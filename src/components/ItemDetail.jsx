import React from 'react'
import "../styles/itemDetail.css";

function ItemDetail({data}) {
  
    return (
    <div className="centrado">
        
        <div className="detailCard">
    <img className="detailImg" src={data.img} alt="card img"></img>
   <h1>{data.title}</h1>
    <h3>${data.price}</h3>
    <p>{data.description}</p>

        </div>
    </div>
  )
}

export default ItemDetail