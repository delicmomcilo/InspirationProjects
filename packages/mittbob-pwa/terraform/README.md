# Getting started
1.	Use `make init` for the first init. This will init within `default` workspace which we will not use.
1.	Use `make create_workspaces` to set up all the workspaces in terraform that we currently support. These are related to our environments. d = dev, t = test, p = prod, s = stage.
1.	Use `make plan_<env>` to plan for an enviroment/workspace i.e. `make plan_dev`
1.	Use `make apply_<env>` to plan for an enviroment/workspace i.e. `make apply_dev`
1.	Use `make destroy_<env>` to plan for an enviroment/workspace i.e. `make destroy_dev`

# Subscriptions
Every workspace is linked with a subscription id in the variable `workspace_to_subscription_ids_map`. The only exception is the backend config,
which is hardcoded to prod, where all terraform states are stored.