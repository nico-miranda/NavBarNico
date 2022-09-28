import React from 'react';
import "../styles/card.css";
import ButtonDetail from '../button/ButtonDetail';
import Button from '../button/Button';
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
                <ButtonDetail  text="Ver Producto"/>
                <Button text="Agregar al Carrito" />
                <ItemCount initial={1} stock={6}/>
                
            </div>
            </div>
        </div>
    )
}
export default Card;