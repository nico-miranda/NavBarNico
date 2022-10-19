import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { cartCtx } from '../context/cartContext';
import { createBuyOrder } from './firestore';


function CheckoutForm() {

    const navigate = useNavigate()
    const { cart, totalPrice } = useContext(cartCtx)

    function handleCheckout(event){   
        event.preventDefault();
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: totalPrice(),
        };
        createBuyOrder(orderData).then( (orderid)=>{
            navigate(`/checkout/${orderid}`);
        });
    }

    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: "",
    })

    function inputChangeHandler(event){
        let inputName = event.target.name;
        let value = event.target.value;

        const newDataForm = {...dataForm};
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }
    return <div>
        <form onSubmit={handleCheckout}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input
                value={dataForm.name}
                onChange={inputChangeHandler}
                name="name"
                type="text"
                placeholder="Nombre"
                required
                />
            </div>

        <div>
            <label htmlFor="phone">Telefono</label>
                <input
                value={dataForm.phone}
                onChange={inputChangeHandler}
                name="phone"
                type="text"
                placeholder="Telefono"
                required
                />
            </div>

            <div>
            <label htmlFor="email">Email</label>
                <input
                value={dataForm.email}
                onChange={inputChangeHandler}
                name="email"
                type="text"
                placeholder="email"
                required
                />
            </div>
            <button type="submit" className="btn">Finalizar Compra</button>
        </form>
    </div>

}

export default CheckoutForm