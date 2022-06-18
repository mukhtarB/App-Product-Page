import React from 'react';
import logo from '../images/logo.svg';
import ProductItem from './ProductItem/ProductItem';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { endpoint_URI } from '../config';

const client = new ApolloClient({
    uri: endpoint_URI,
    cache: new InMemoryCache(),
});


function App() {
    return (
        <div className="App container">

            <h2> Product Page: Item List</h2>

            <div className='product-list'>
                <ProductItem logo={logo}/>
            </div>
        </div>
    );
}

export default App;
