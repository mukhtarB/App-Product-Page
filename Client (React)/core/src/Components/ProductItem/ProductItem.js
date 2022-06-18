import React from "react";


const ProductItem = ({logo}) => {
    return(
        <div className='product-item'>
            <div className='img-wrapper'>
                <img src={logo} alt='Not an image yet' title=''/>
            </div>

            <p>Name: Name of Product</p>
            <p>Price: Product Price</p>
            <button className='btn btn-primary'>add to cart</button>
        </div>
    )
}

export default ProductItem;