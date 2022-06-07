variable "region"  {
  type = string
  default = "weu"
}

variable "regions_long_name_map" {
  type = map
  default = {
    weu = "West Europe"
  }
}

variable "workspace_to_environment_map" {
  type = map
  default = {
    d = "d"
    dev = "d"
    p = "p"
    prod = "p"
    s = "s"
    stage = "s"
    t =  "t"
    test = "t"
  }
}
variable "env_custom_domain_hostname_prefix_map" {
  type = map
  default = {
    d = "dev-"
    p = ""
    s = "stage-"
    t =  "test-"
  }
}

variable "workspace_to_subscription_id_map" {
  type = map
  default = {
    d = "226fe772-a6f3-4dbe-b7a1-f61706a7936c"
    p = "4de7044d-0f5c-4ad8-8d53-8247aa679f28"
    s = "1051f5f4-77e1-49ec-a304-577fffab9d7a"
    t = "a2e84724-38bb-42e4-9f7c-c82ce773761b"
  }
}

variable "arm_client_id" { }
variable "arm_tenant_id" { }
variable "arm_client_secret" { }