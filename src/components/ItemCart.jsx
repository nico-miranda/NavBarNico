import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) =>{
   const { removeProduct } = useCartContext(); 
    return (
        <div className="itemCart">
            <img src ={product.image} alt={product.title}/>
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.count}</p>
                <p>Precio u.: {product.price}</p>
                <p>Subtotal: ${product.count * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart; 

