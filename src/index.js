import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import {AppProvider}  from './Context/AppContext';

import {App} from './App';

const client = new ApolloClient({
    uri: "https://petgram-server-alejandroverita-alejandroverita.vercel.app/graphql",
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <AppProvider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </AppProvider>,
    document.getElementById('app')
)
