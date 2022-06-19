import React from "react";
import { useQuery, gql } from '@apollo/client';

const PRODUCT_LIST = gql`
    query ProductList {
        product {
            id
            name
            image
            price
            description
            sku
        }
    }
`;


const ProductItem = () => {

    const { loading, error, data } = useQuery(PRODUCT_LIST);
    // console.log("L,E,D ==>", loading, error, data);

    if (loading) return <p>Loading?...</p>;
    if (error) return <p>Error :(</p>;

    return data.product.map(({ id, name, image, price, description }) => (
        <div key={id} className='product-item'>
            <div className='img-wrapper'>
                <img src={image} alt='Not an image yet' title=''/>
            </div>

            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button className='btn btn-primary'>add to cart</button>
        </div>
    ));
}

export default ProductItem;