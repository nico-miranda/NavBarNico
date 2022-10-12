import React, { useState, useContext } from 'react'
import "../styles/itemDetail.css";
import "../styles/itemCount.css"
import ItemCount from './ItemCount';
import {Link} from "react-router-dom";
import { cartCtx } from "../context/cartContext";

function ItemDetail({ item }) {

  const [irAlCarro, setIrAlCarro] = useState(false);
  
  const { addItem } = useContext(cartCtx);


  function sumarClick(count){
    setIrAlCarro(true);
    addItem(item, count);
}
    return (
    <div className="centrado">
        
        <div className="detailCard">
    <img className="detailImg" src={item.img} alt="card img"></img>
    <h1>{item.title}</h1>
    <h3>${item.price}</h3>
    <p>{item.description}</p>
    {irAlCarro === false ? (<ItemCount stock={6} onAddToCart={sumarClick}/>) : (<Link><button className="btn">Finalizar Compra</button></Link> )}
        </div> 
    </div>
  );
}

export default ItemDetail;