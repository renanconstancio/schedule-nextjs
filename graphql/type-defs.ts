import { gql } from "graphql-tag";

export const typeDefs = gql`
  # Type definitions to Store
  type Store {
    id: ID!
    fantasyName: String!
    corporateName: String
    cnpj: String!
    cpf: String
    description: String
    address: String!
    phones: String!
    themes: String
    created_at: String
    updated_at: String
    deleted_at: String

    categories: [Category!]
  }

  type Category {
    id: ID!
    title: String!
    description: String
    position: Int!
    visibility: Boolean!

    created_at: String
    updated_at: String
    deleted_at: String
  }

  type Query {
    stores: [Store!]
    store(id: ID!): Store!
  }

  type Mutation {
    storeCreateUpdate(id: ID!, body: Store!): Store
  }
`;
