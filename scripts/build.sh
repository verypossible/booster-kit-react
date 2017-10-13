#!/usr/bin/env bash
# Start in tasks/ even if run from root directory
cd "$(dirname "$0")"

# Exit the script on any command with non 0 return code
# We assume that all the commands in the pipeline set their return code
# properly and that we do not need to validate that the output is correct
set -e

# Echo every command being executed
set -x

# Go to root
cd ..
root_path=$PWD

# Clear the contents of the build directory
yarn clear

# Generate graphql types
yarn graphql

# Generate typedocs and related meta data
yarn docs

# Copy static assets to build directory
cp -rv ./public ./build

# Compile the production assets
bnr build
