import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";

function CartWidget() {
  
const{ totalProducts } = useCartContext();

  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{totalProducts() || ''}</span>
    </div>
    
  )
}

export default CartWidget; 

