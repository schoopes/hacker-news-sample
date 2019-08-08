const { ApolloServer, gql } = require('apollo-server');

const links = [];

const typeDefs = gql`
type Link {}
type Query {
  links: [Link]
}
`;

const resolvers = {
  Query: {
    links: () => links
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("Server listening at port ${url}");
});