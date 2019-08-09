import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import '../styles/App.css';

const client = new ApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Hacker News</h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
