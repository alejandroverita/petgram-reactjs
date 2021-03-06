import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import {AppProvider}  from './Context/AppContext';

import {App} from './App';

const httpLink = createHttpLink({
    uri: "https://petgram-server-alejandroverita-alejandroverita.vercel.app/graphql",

});

const authLink = setContext((_, {headers}) => {
   // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    // se ejecuta justo antes de hacer cualquier peticion al servidor
    cache: new InMemoryCache(),
    onError: onError(({ networkError }) => {
        if (networkError && networkError.result.code === 'invalid_token') {
          window.sessionStorage.removeItem('token')
          window.location = '/user'
        }
    })
});

ReactDOM.render(
    <AppProvider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </AppProvider>,
    document.getElementById('app')
)
