# Monorepo

## Packages
[@bob/core-components](./packages/bob-core-components/README.md)\
[@bob/standalone-map](./packages/bob-standalone-map/README.md)\
[@bob/mittbob-pwa](./packages/mittbob-pwa/README.md)

## Get started

- Install `lerna` cli.
- Do the .npmrc section below.
- Run ```lerna bootstrap```

#### .npmrc
     For authentication towards azure registry:
     1. Create .npmrc in the project directory
     2. Go to https://dev.azure.com/bobbbl/BOB%20WEB/_packaging?_a=connect&feed=bob-web-feed.
     3. Choose npm and click `other` underneath project setup.
     4. Generate your credentials and paste them into the `.npmrc` so it looks like this.
     5. Remove your node_modules folder and run `yarn` to install dependency from azure registry.
     
     ```
     ; Treat this auth token like a password. Do not share it with anyone, including Microsoft support. This token expires on or before 2.3.2020.
     ; begin auth token
     //pkgs.dev.azure.com/bobbbl/_packaging/bob-web-feed/npm/registry/:username=bobbbl
     //pkgs.dev.azure.com/bobbbl/_packaging/bob-web-feed/npm/registry/:_password=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
     //pkgs.dev.azure.com/bobbbl/_packaging/bob-web-feed/npm/registry/:email=npm requires email to be set but doesn't use the value
     //pkgs.dev.azure.com/bobbbl/_packaging/bob-web-feed/npm/:username=bobbbl
     //pkgs.dev.azure.com/bobbbl/_packaging/bob-web-feed/npm/:_password=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
     //pkgs.dev.azure.com/bobbbl/_packaging/bob-web-feed/npm/:email=npm requires email to be set but doesn't use the value
     ; end auth token
     registry=https://pkgs.dev.azure.com/bobbbl/_packaging/bob-web-feed/npm/registry/
     always-auth=true
     ```

## Lerna and yarn
Read about lerna here: https://github.com/lerna/lerna

We use `lerna` with `yarn workspaces` to manage monorepo and releases.
All packages are set up with a "dependent"-strategy meaning all packages are versioned and released together regardless of which package changed.

From the root you can run ```yarn workspace <package name in package.json> <any yarn command>``` ie ```yarn workspace @bob/core-components storybook```

To release a version you can run ```yarn version-and-publish``` from the master branch. This step is usually ran in the pipeline.

After the release lerna updates [CHANGELOG.MD](./CHANGELOG.md) in the root and all sub packages.

## Conventional commits
To generate automatic CHANGELOG.md on releases we use "conventional commits" as described https://www.conventionalcommits.org/en/v1.0.0/#summary.

We mainly use `fix`, `feat` and `chore` for our commit messages. You may find other useful conventions in the url above.
Always include the Azure DevOps task number in the message. Example:
`git commit -m "fix: User email login bug. #1234"`

## Azure DevOps pipeline

The CI/CD pipeline is defined in azure-pipelines.yml at the root.
Currently there are two types of stages defined:
### VerifyReleaseBuild
This stage does the following:
- Releases new versions and merges CHANGELOGS back to develop branch, if the source branch is master and commit message does not include `chore(release)`.
If `chore(release)` is included it means that a release has already been executed. This is a workaround and a limitation in Azure DevOps to prevent a loop in master branch.
- Tests and builds the source regardless of branch other than master.

### Deploy stages
After the previous stage is succeeded the deploy stages will do the following 
- Ensure that the infrastructure is set up by running terraform commands.
- Injecting the environment variables.
- Uploading the mittbob-pwa build to the environment storage account.