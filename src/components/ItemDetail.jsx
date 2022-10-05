import React from 'react'
import "../styles/itemDetail.css";
import "../styles/itemCount.css"
import ItemCount from './ItemCount';


function sumarClick(count){
        alert(`se agrego ${count} al carrito!`)
}

function ItemDetail({data}) {

let estadoCart = false;   

    return (
    <div className="centrado">
        
        <div className="detailCard">
    <img className="detailImg" src={data.img} alt="card img"></img>
    <h1>{data.title}</h1>
    <h3>${data.price}</h3>
    <p>{data.description}</p>
    
    {estadoCart === false ? (
        <ItemCount stock={6} onAddToCart={sumarClick} />
      ) : (
        <button>Finalizar Compra</button>
      )}
       </div> 
    </div>
  );
}

export default ItemDetail;