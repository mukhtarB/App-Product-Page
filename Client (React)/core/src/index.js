import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './Components/App';


// apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { endpoint_URI } from './constants';
import Cookie from "js-cookie";

const client = new ApolloClient({
    uri: endpoint_URI,
    cache: new InMemoryCache(),
    credentials: 'include',
    headers: {
        "x-csrftoken": Cookie.get("csrftoken")
    }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);
