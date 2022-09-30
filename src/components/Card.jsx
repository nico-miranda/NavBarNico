import React from 'react';
import "../styles/card.css";
import ButtonDetail from '../button/ButtonDetail';
import { Link } from "react-router-dom";

function Card(props) {
    
const urlDetalle= `/detalle/${props.id}`;

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
                <Link to={urlDetalle}>  
                <ButtonDetail  text="Ver Producto"/>
                </Link>
                
            </div>
            </div>
        </div>
    )
}
export default Card;