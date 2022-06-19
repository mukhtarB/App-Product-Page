import React from "react";



const PopupModal = ({openModal, modalID, data, onClose}) => {

    if (!openModal) return null

    const getImage = data.find( (dataItem) => {
        return dataItem['id'] == modalID;
    })

    console.log(getImage)

    return (
        <>
            <div className="overlay">
                <div className="modalContainer">
                    <p
                        className="closeBtn bg-outline-danger"
                        onClick={onClose}
                    > close </p>

                    <div>
                        <div className='img-wrapper mb-2'>
                            <img src={getImage.image} alt='' title = '' />
                        </div>

                        <div>Name: <b>{getImage.name}</b></div>
                        <div>Price: ₦ <b>{getImage.price}</b></div>
                    </div>

                    <div className="item-details">
                        <p>Description: <br /></p>
                        <div>
                            <a></a>
                            Qty 2
                            <a></a>
                        </div>
                    </div>

                </div>
            </div>
            <div>My Modal</div>
        </>
    )
};

export default PopupModal;