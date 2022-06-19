import React from 'react';
import ProductItem from './ProductItem/ProductItem';


function App() {
    return (
        <div className="App container">

            <h2> Product Page: Item List</h2>

            <div className='product-list'>
                <ProductItem />
            </div>
        </div>
    );
}

export default App;
