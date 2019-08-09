const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    username: String!
  }

  type Link {
    id: ID!
    url: String!
    title: String!
    posted: Boolean!
  }

  type Query {
    user(id: ID!): User
    feed: [Link!] !
    comments: [Comment]
  }

  type Mutation {
    createUser(email: String!, username: String!): User!
    post(url: String!, title: String!, posted: Boolean!): Link!
  }
`;

module.exports = typeDefs;