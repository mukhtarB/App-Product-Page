import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './Components/App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { endpoint_URI } from '../config';

const client = new ApolloClient({
    uri: endpoint_URI,
    cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);
