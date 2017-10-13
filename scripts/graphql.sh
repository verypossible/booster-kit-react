# Generate the schema
yarn run apollo-codegen introspect-schema https://us-west-2.api.scaphold.io/graphql/very-react --output src/lib/graphql/serverSchema.json

# Generate the type definitions
yarn run apollo-codegen generate **/*.gql --add-typename --schema src/lib/graphql/serverSchema.json --target typescript --output src/lib/graphql/schema.ts
