const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
  typeDefs, 
  resolvers 
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server listening at port ${url}`);
});