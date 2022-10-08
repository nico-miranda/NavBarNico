import React, { useContext } from "react";
import { cartCtx } from "../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartCtx);

  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{getTotalItemsInCart()}</span>
    </div>
    
  )
}

export default CartWidget; 

