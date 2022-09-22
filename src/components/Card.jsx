import React from 'react';
import Button from "../button/Button";
import "../styles/card.css";
import ItemCount from './ItemCount';


function Card(props) {
    


    return (
        <div>
            <div className="card">
            <div className="card-img">
                <img src={props.img} alt="card img"></img>
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <h4>${props.price} </h4>
                <Button  text="Agregar al carrito"/>
                <ItemCount initial={1} stock={6} onAdd={props.onAdd}/>
            </div>
            </div>
        </div>
    )
}
export default Card;