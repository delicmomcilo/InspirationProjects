# CREATE WORKSPACES
create_workspaces:
		# Development
		terraform workspace new d;
		# Production
		terraform workspace new p;
		# Stage
		terraform workspace new s;
		# Test
		terraform workspace new t;

# INIT COMMANDS
init:
	# First init after clone, then create workspaces
	terraform init

init_dev:
		terraform workspace select d && terraform init
init_test:
		terraform workspace select t && terraform init
init_stage:
		terraform workspace select s && terraform init
init_prod:
		terraform workspace select p && terraform init

# PLAN COMMANDS
plan_dev:
		terraform workspace select d && terraform plan -out=tfplan  -input=false
plan_test:
		terraform workspace select t && terraform plan -out=tfplan  -input=false
plan_stage:
		terraform workspace select s && terraform plan -out=tfplan  -input=false
plan_prod:
		terraform workspace select p && terraform plan -out=tfplan  -input=false

# APPLY COMMANDS
apply_dev:
		terraform workspace select d && terraform apply -input=false tfplan
apply_test:
		terraform workspace select t && terraform apply -input=false tfplan
apply_stage:
		terraform workspace select s && terraform apply -input=false tfplan
apply_prod:
		terraform workspace select p && terraform apply -input=false tfplan

# APPLY COMMANDS
destroy_dev:
		terraform workspace select d && terraform destroy
destroy_test:
		terraform workspace select t && terraform destroy
destroy_stage:
		terraform workspace select s && terraform destroy
destroy_prod:
		terraform workspace select p && terraform destroy



# Subscription name aliases
init_Development:
		make init_dev
init_Testing:
		make init_test
init_Staging:
		make init_stage
init_Production:
		make init_prod
plan_Development:
		make plan_dev
plan_Testing:
		make plan_test
plan_Staging:
		make plan_stage
plan_Production:
		make plan_prod
apply_Development:
		make apply_dev
apply_Testing:
		make apply_test
apply_Staging:
		make apply_stage
apply_Production:
		make apply_prod
destroy_Development:
		make destroy_dev
destroy_Testing:
		make destroy_test
destroy_Staging:
		make destroy_stage
destroy_Production:
		make destroy_prod
