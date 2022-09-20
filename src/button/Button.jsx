import React from 'react'
import "./button.css";


function Button(props) {
  
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
}
  
  return (
    <button  onClick={() => onAdd(props.count)} className="btn">{props.text}</button>
  )
}

export default Button;