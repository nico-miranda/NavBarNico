import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
function CartWidget(props) {
  return (
    <div carrito={props.carrito}>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>0</span>
    </div>
    
  )
}

export default CartWidget;