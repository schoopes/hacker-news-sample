const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    links: [Link]
    comments: [Comment]
  }

  type Link {
    id: ID!
    url: String!
    title: String!
    posted: Boolean!
  }

  type Comment {
    id: ID!
    body: String!
  }

  type Query {
    user: User
    links: [Link]
    comments: [Comment]
  }
`;

module.exports = typeDefs;