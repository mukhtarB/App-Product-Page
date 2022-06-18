import React from 'react';
import logo from '../logo.svg';
import ProductItem from './ProductItem/ProductItem';


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
