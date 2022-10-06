import React from 'react'
import "../styles/itemDetail.css";
import "../styles/itemCount.css"
import ItemCount from './ItemCount';
import { useState } from 'react';
import {Link} from "react-router-dom";

function ItemDetail(props) {

  const [irAlCarro, setIrAlCarro] = useState(false);
  

  function sumarClick(count){
    setIrAlCarro(true);
}
    return (
    <div className="centrado">
        
        <div className="detailCard">
    <img className="detailImg" src={props.data.img} alt="card img"></img>
    <h1>{props.data.title}</h1>
    <h3>${props.data.price}</h3>
    <p>{props.data.description}</p>
    {irAlCarro === false ? (<ItemCount stock={6} onAddToCart={sumarClick} />) : (<Link><button className="btn">Finalizar Compra</button></Link> )}
       </div> 
    </div>
  );
}

export default ItemDetail;