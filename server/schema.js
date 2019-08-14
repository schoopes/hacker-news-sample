const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    links: [Link!]!
  }

  type Link {
    id: ID!
    url: String!
    title: String!
    postedBy: User
  }

  type Query {
    user(id: ID!): User
    feed: [Link!] !
  }

  type Payload {
    token: String
    user: User
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): User!
    post(url: String!, title: String!): Link!
    login(email: String!, password: String!): Payload
  }
`;

module.exports = typeDefs;