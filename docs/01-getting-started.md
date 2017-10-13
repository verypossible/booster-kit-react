# Getting Started

## Global Dependencies
### Node 8.4.0
If you don't have a node version manager, we recommend installing one first. Here are the steps for getting up and running with NVM:

```bash
# If you don't have a node version manager, install one first. We recommend NVM:
> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.3/install.sh | bash

# Verify the installation was successful. Troubleshooting: https://github.com/creationix/nvm
> command -v nvm

# Install the required version of node:
> nvm install 8.4.0

# Reinstall global packages. PREVIOUS is the previous node version prior to updating to 8.4.0:
> nvm reinstall-packages PREVIOUS
```

### Yarn 27.5.0
If you don't have yarn installed, follow all of the following steps, otherwise just `brew update` and `brew upgrade` to get current.

```bash
# It's always a good idea to get Homebrew current before installing anything new:
> brew update
> brew upgrade

# If you are using a node version manager:
> brew install yarn --without-node

# If you are not using a node version manager:
> brew install yarn

# Verify Yarn was installed successfully. Troubleshooting: https://yarnpkg.com/en/docs/install
> yarn --version
```

## Running The Project Locally
```bash
# Create a new directory wherever you plan on storing the project
> mkdir /new/folder

# Set the new folder as your working directory
> cd /new/folder

# Clone the repo to a folder of your choosing:
> git clone https://github.com/verypossible/booster-kit-react .

# Install the local dependencies:
> yarn

# Start the dev server:
> yarn start

# The dev server runs at :3000 as is proxied for BrowserSync at :3010. You should see the homepage:
> open http://localhost:3010
```

## Make your editor love TypeScript
These are not required, but will provide a better experience while working with TypeScript.

### Atom
* TypeScript syntax highlighting: `apm install atom-typescript`
* Base linter: `apm install linter`
* TypeScript linter: `apm install linter-tslint`
* Auto-update packages: `apm install auto-update-packages`
* React syntax highlighting: `apm install react`
* Git status in the tree view: `apm install tree-view-git-status`

### Vim
TypeScript [recommended plugins](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim)

If you have specific recommendations for your editor, please open a pull request and contribute to the docs.
