import React from "react";
import { useContext } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProvider } from "./context/AppContext";

const client = new ApolloClient({
  uri: "https://petgram-backend-one.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppProvider>
      <App />
    </AppProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
