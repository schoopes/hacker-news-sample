const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const resolvers = {
  Mutation,
  Query
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers 
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server listening at port ${url}`);
});