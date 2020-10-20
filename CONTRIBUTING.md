# Contributing

First off, Contributions are always welcome and we appreciate any help you can offer. Please take a moment to read the entire contributors guide.

## Before you begin

Below are some general guidelines we try to stick to on all of our FHIR related repositories. When contributing to `mobilizing-million-hearts`, we do ask that you do your best to follow these guidelines.

### Branch Organization

We do our best to keep `master` in a stable state. We also started cutting release branches, for example, `release/1.4.0`, to make it easier to contribute to specific versions and maintain older versions. When you submit pull requests, please make sure to fork from and submit back to `master`.

### Semantic Versioning

We try to follow [semantic versioning](https://semver.org/) for this repo as close as we can. If we ever publish breaking changes, there will be something in the release notes. There have been occasionally breaking changes in the past on minor updates, which is something we will not be doing going forwards.

### Conventional Commits

We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) which helps keep commit messages clean and useful. It also is helpful because we use the changelog cli generator (`yarn changelog`) to automatically generate changelogs when cutting new releases.

### Style Guide

In an attempt to never have a debate about style or tabs versus spaces in a PR, we use [prettier](https://prettier.io/), an opinionated code formatter. We ask everyone to run this before submitting a pull request and have some general configurations defined in our package.json.

## Getting Started

Getting setup is easy, however, this project does require that you have Node.js and preferably yarn installed. You can install the latest LTS for [Node.js here](https://nodejs.org/en/).

### Installation

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repo to your GitHub account and clone it.
2. Run `yarn install`.

### Development Workflow

After cloning and installing all the dependencies, there are several commands we can use for local development.

- `yarn lint` - Lints everything in src directory
- `yarn jest` - Runs jest over all tests in src directory
- `yarn test` - Runs yarn lint and yarn jest together
- `yarn build` - Builds the application

### Production Workflow

- `NODE_ENV=production yarn start` - Runs a production version

Or: Build Docker images

```
NODE_ENV=production docker build -t hearts .
docker run -e NODE_ENV=production -p 3000:3000
```

## Pull Request Checklist

When submitting a pull request, please make sure you have completed the following otherwise the pull request will not be accepted.

1. Run `yarn prettier`.
2. `yarn test` passes.
3. If documentation needs to be added, include a snippet of what should be added and where.
4. If new code is being introduced or a bug is being fixed, add relevant test cases.
5. Pull request base branch is set to `master`. All pull requests should be forked from and merged back to `master`.

## Resources

For more information about how things are designed and how they work, please consult our [Docs](https://github.com/onc-healthit/mobilizing-million-hearts-app/docs).

## Issues

Please file your issues [here](https://github.com/onc-healthit/mobilizing-million-hearts-app) and try to provide as much information in the template as possible/relevant.
