import React from "react";



const PopupModal = ({openModal, modalID, data, onClose}) => {

    if (openModal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    const getImage = data.find( (dataItem) => {
        return dataItem['id'] == modalID;
    })

    return (
        <>
            <div className="overlay" onClick={onClose}></div>

            <div className="my-modal">

                <div className="item">
                    <div className='img-wrapper mb-2'>
                        <img src={getImage.image} alt={getImage.name} title = {getImage.name} />
                    </div>

                    <div>Name: <b>{getImage.name}</b></div>
                    <div>Price: ₦ <b>{getImage.price}</b></div>
                </div>

                <div className="item-details">
                    <p
                        className="closeBtn btn-outline-danger"
                        onClick={onClose}
                    > close </p>
                    <div>
                        <h5 className="text-left pl-3">Description:</h5>
                        {getImage.description}
                    </div>
                    <div>
                        <a> + </a>
                        Qty 2
                        <a> - </a>
                    </div>
                </div>

            </div>
        </>
    )
};

export default PopupModal;