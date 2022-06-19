import React, { useState } from "react";
import { useProductsQuery } from "../../queryServices/useProductsQuery";  // custom hook
import PopupModal from "../Modal.js/popupModal";


const ProductItem = () => {
    const { loading, error, data } = useProductsQuery();
    const [isOpen, setOpen] = useState(false);
    const [itemID, setitemID] = useState();


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    const toggleModal = () => {
        setOpen(!isOpen);
    }

    const renderData = () => {
        return data.product.map(({ id, name, image, price }) => (
            <div key={id} className='product-item'>
                <div className='img-wrapper mb-2'>
                    <img src={image} alt='Not an image yet' title=''/>
                </div>
    
                <div>Name: <b>{name}</b></div>
                <div>Price: ₦ <b>{price}</b></div>

                <button
                    className='btn btn-primary mt-2'
                    onClick={() => {setOpen(true), setitemID(id)}}
                >
                    add to cart
                </button>
            </div>
        ));
    }

    return (
        <>
            {renderData()}

            {
                isOpen ? 
                <PopupModal 
                    openModal={isOpen} 
                    modalID={itemID}
                    data={data.product}
                    onClose={() => setOpen(false)}
                />
                : null
            }
            
        </>
    );
}

export default ProductItem;