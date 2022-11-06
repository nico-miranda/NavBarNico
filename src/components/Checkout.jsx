import React from 'react';
import { useParams } from 'react-router-dom';

function Checkout() {
    const {orderid} = useParams();

    return (
        <div>
            <h2>Gracias por tu compra!</h2>
            <h3>Tus datos del orden son: {orderid}</h3>
        </div>
    )
}

export default Checkout