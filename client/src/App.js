import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Hacker News</span></h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
