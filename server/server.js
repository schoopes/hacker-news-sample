const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { createStore } = require('./utilities');

const UserAPI = require('./datasources/user');
const store = createStore();

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => ({
    userAPI: new UserAPI({ store })
  }), 
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server listening at port ${url}`);
});