import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import Login from "./Login";
import '../styles/App.css';

import Header from "./Header";

const client = new ApolloClient({
  link: "http://localhost:4000",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
        <div>
          <Header />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
