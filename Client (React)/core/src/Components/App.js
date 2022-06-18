import React from 'react';
import logo from '../logo.svg';
import './App.css';

function App() {
    return (
        <div className="App container">

            <h2> Product Page: Item List</h2>

            <div className='product-list'>

                <div className='product-item'>
                    <div className='img-wrapper'>
                        <img src={logo} alt='Not an image yet' title=''/>
                    </div>

                    <p>Name: Name of Product</p>
                    <p>Price: Product Price</p>
                    <button className='btn btn-primary'>add to cart</button>
                </div>

                <div className='product-item'>
                    <div className='img-wrapper'>
                        <img src={logo} alt='Not an image yet' title=''/>
                    </div>

                    <p>Name: Name of Product</p>
                    <p>Price: Product Price</p>
                    <button className='btn btn-primary'>add to cart</button>
                </div>

                <div className='product-item'>
                    <div className='img-wrapper'>
                        <img src={logo} alt='Not an image yet' title=''/>
                    </div>

                    <p>Name: Name of Product</p>
                    <p>Price: Product Price</p>
                    <button className='btn btn-primary'>add to cart</button>
                </div>

            </div>
        </div>
    );
}

export default App;
