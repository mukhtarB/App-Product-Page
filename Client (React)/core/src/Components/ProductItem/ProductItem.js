import React from "react";
import { useProductsQuery } from "../../queryServices/useProductsQuery";  // custom hook


const ProductItem = () => {
    const { loading, error, data } = useProductsQuery();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.product.map(({ id, name, image, price }) => (
        <div key={id} className='product-item'>
            <div className='img-wrapper mb-2'>
                <img src={image} alt='Not an image yet' title=''/>
            </div>

            <div>Name: <b>{name}</b></div>
            <div>Price: ₦ <b>{price}</b></div>
            <button className='btn btn-primary mt-2'>add to cart</button>
        </div>
    ));
}

export default ProductItem;