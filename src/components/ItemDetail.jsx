import React from 'react'
import "../styles/itemDetail.css";
import "../styles/itemCount.css"
import ItemCount from './ItemCount';


function ItemDetail(props) {
  




    return (
    <div className="centrado">
        
        <div className="detailCard">
    <img className="detailImg" src={props.data.img} alt="card img"></img>
   <h1>{props.data.title}</h1>
    <h3>${props.data.price}</h3>
    <p>{props.data.description}</p>
    <button className="btn">Agregar al carrito</button>
    <ItemCount className="sumarRestar" initial={1} stock={6} onAdd/>
    

        </div>
    </div>
  )
}

export default ItemDetail