---
title: "Jenkins"
weight: 2
---

{{% children depth="1" showhidden="true" %}}

## Présentation

## Pipelines

#### Variables d'environnement

- `BRANCH_NAME`: For a multibranch project, this will be set to the name of the branch being built, for example in case you wish to deploy to production from master but not from feature branches; if corresponding to some kind of change request, the name is generally arbitrary (refer to CHANGE_ID and CHANGE_TARGET).

- `CHANGE_BRANCH`: For a multibranch project corresponding to some kind of change request, this will be set to the name of the actual head on the source control system which may or may not be different from BRANCH_NAME. For example in GitHub or Bitbucket this would have the name of the origin branch whereas BRANCH_NAME would be something like PR-24.

- `CHANGE_TARGET`: For a multibranch project corresponding to some kind of change request, this will be set to the target or base branch to which the change could be merged, if supported; else unset.

[Source](https://stackoverflow.com/questions/49151984/env-branch-name-becomes-pr-1)
