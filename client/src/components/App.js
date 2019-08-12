import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import '../styles/App.css';

import Header from "./Header";

const client = new ApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
      </div>
    </ApolloProvider>
  );
}

export default App;
