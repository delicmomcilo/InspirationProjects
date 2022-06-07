locals {
  environment = lookup(var.workspace_to_environment_map, terraform.workspace, "d")
  subscription_id = lookup(var.workspace_to_subscription_id_map, terraform.workspace, "d")
  region_long = lookup(var.regions_long_name_map, var.region, "weu")
  region = var.region
  shared_rg_name = "bob-${local.environment}-${local.region}-shared-rg"
  custom_domain_prefix = lookup(var.env_custom_domain_hostname_prefix_map, local.environment)
}

provider "azurerm" {
  version = "=2.6.0"
  subscription_id = local.subscription_id
  features {}
}

provider "azuread" {
  version = "=0.8.0"
  subscription_id = local.subscription_id
}

terraform {
  required_version = "0.12.20"
  required_providers {
    azurerm = "=2.6.0"
  }
  backend "azurerm" {
    resource_group_name = "bob-p-weu-tfstate-rg"
    storage_account_name = "bobpweutfstatestg"
    // Character limit on account storage
    container_name = "bob-p-weu-tfstate-stc"
    subscription_id = "4de7044d-0f5c-4ad8-8d53-8247aa679f28"
    // Prod - where all terraform states are stored at this moment.
    key = "mittbob.terraform.state."
  }
}

data "azurerm_storage_account" "storage-account-1" {
  name = "bob${local.environment}weu1stg"
  resource_group_name = local.shared_rg_name
}

resource "null_resource" "enable-static-website" {
  triggers = {
    client_id = var.arm_client_id
    client_secret = var.arm_client_secret
    tenant_id = var.arm_tenant_id
    subscription_id = local.subscription_id
    environment = local.environment
  }
  provisioner "local-exec" {
    when = create
    command = <<EOT
      az login --service-principal --username ${self.triggers.client_id} --password ${self.triggers.client_secret} --tenant ${self.triggers.tenant_id}
      az account set --subscription ${self.triggers.subscription_id}
      az storage account update --resource-group bob-${self.triggers.environment}-weu-shared-rg --name bob${self.triggers.environment}weu1stg --default-action Allow
      az storage container exists --account-name bob${self.triggers.environment}weu1stg --name \$web
      az storage blob service-properties update --account-name bob${self.triggers.environment}weu1stg --static-website --404-document index.html --index-document index.html
  EOT
  }
  provisioner "local-exec" {
    when = destroy
    command = <<EOT
      az login --service-principal --username ${self.triggers.client_id} --password ${self.triggers.client_secret} --tenant ${self.triggers.tenant_id}
      az account set --subscription ${self.triggers.subscription_id}
      az storage container delete --name \$web --account-name bob${self.triggers.environment}weu1stg
  EOT
  }
}

resource "azurerm_cdn_profile" "mittbob-cdn" {
  name = "bob-${local.environment}-${local.region}-mittbob-cdn"
  location = local.region_long
  resource_group_name = local.shared_rg_name
  sku = "Standard_Microsoft"
}

resource "azurerm_cdn_endpoint" "mittbob-cdne" {
  name = "bob-${local.environment}-${local.region}-app-cdne"
  profile_name = azurerm_cdn_profile.mittbob-cdn.name
  location = local.region_long
  resource_group_name = local.shared_rg_name
  origin_host_header = data.azurerm_storage_account.storage-account-1.primary_web_host

  origin {
    name = "bob-${local.environment}-${local.region}-origin-cdneo"
    host_name = data.azurerm_storage_account.storage-account-1.primary_web_host
  }

  delivery_rule {
    name = "HTTPSRedirectRule"
    order = 1

    request_scheme_condition {
      match_values = [
        "HTTP",
      ]
      negate_condition = false
      operator = "Equal"
    }

    url_redirect_action {
      protocol = "Https"
      redirect_type = "Found"
    }
  }
  delivery_rule {
    name = "BypassAll"
    order = 2

    cache_expiration_action {
      behavior = "BypassCache"
    }

    request_uri_condition {
      match_values = [
        "/this_request_should_not_exist/",
      ]
      negate_condition = true
      operator = "Contains"
      transforms = []
    }
  }
  delivery_rule {
    name = "RedirectAllToIndexHtml"
    order = 3

    url_file_extension_condition {
      match_values = [
        "1",
      ]
      negate_condition = false
      operator = "LessThan"
      transforms = []
    }

    url_rewrite_action {
      destination = "/index.html"
      preserve_unmatched_path = false
      source_pattern = "/"
    }
  }

  tags = {
    profile_id = azurerm_cdn_profile.mittbob-cdn.id
  }
}

resource "null_resource" "create-custom-domain" {
  triggers = {
    client_id = var.arm_client_id
    client_secret = var.arm_client_secret
    tenant_id = var.arm_tenant_id
    subscription_id = local.subscription_id
    environment = local.environment
    endpoint = azurerm_cdn_endpoint.mittbob-cdne.name
    resource_group = local.shared_rg_name
    region = local.region
    hostname = "${local.custom_domain_prefix}mitt.bob.no"
    profile = azurerm_cdn_profile.mittbob-cdn.name
    endpoint_id = azurerm_cdn_endpoint.mittbob-cdne.id
    profile_id = azurerm_cdn_profile.mittbob-cdn.id
  }

  depends_on = [
    azurerm_cdn_endpoint.mittbob-cdne]

  provisioner "local-exec" {
    when = create
    command = <<EOT
      az login --service-principal --username ${self.triggers.client_id} --password ${self.triggers.client_secret} --tenant ${self.triggers.tenant_id}
      az cdn custom-domain create --endpoint-name ${self.triggers.endpoint} \
          --hostname ${self.triggers.hostname} \
          --name bob-${self.triggers.environment}-mittbob-custom-domain \
          --profile-name ${self.triggers.profile} \
          --resource-group ${self.triggers.resource_group} \
          --location ${self.triggers.region} \
          --subscription ${self.triggers.subscription_id}
  EOT
    /*
      There is no good way to automate and enabling https with our OWN managed certificate.
      The code underneath can be used to enable Azure managed https.
      sleep 10
      az cdn custom-domain enable-https  --endpoint-name ${self.triggers.endpoint} \
          --name bob-${self.triggers.environment}-mittbob-custom-domain \
          --profile-name ${self.triggers.profile} \
          --resource-group ${self.triggers.resource_group} \
          --subscription ${self.triggers.subscription_id}
    */
  }
  provisioner "local-exec" {
    when = destroy
    command = <<EOT
      az login --service-principal --username ${self.triggers.client_id} --password ${self.triggers.client_secret} --tenant ${self.triggers.tenant_id}
      az cdn custom-domain delete --endpoint-name ${self.triggers.endpoint} \
          --name bob-${self.triggers.environment}-mittbob-custom-domain \
          --profile-name ${self.triggers.profile} \
          --resource-group ${self.triggers.resource_group} \
          --subscription ${self.triggers.subscription_id} \
  EOT
  }

}

// Terraform currently does not support createing "$web" container for storage V2 accounts.
// This needs to be done in the command line for now.

//resource "azurerm_storage_container" "webapp" {
//  name = "bob-${local.environment}-${local.region}-webapp-stc"
//  storage_account_name = "bob${local.environment}${local.region}1stg"
//  container_access_type = "blob"
//}