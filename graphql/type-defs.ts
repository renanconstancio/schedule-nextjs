import { gql } from "graphql-tag";

export const typeDefs = gql`
  /**
   * Type definitions to Store
   * /
  type Store {
    id: ID!
    fantasyName: String!
    corporateName: String!
    cnpj: String!
    cpf: String!
    description: String!
    address: String!
    phones: String!
    themes: String!
  }

  type Query {
    store: [Store!]!
  }
`;
