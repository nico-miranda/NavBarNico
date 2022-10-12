import React from 'react'
import { useState } from 'react';


function ItemCount({stock, onAddToCart}) {
    
    const [count, setCount] = useState(1);
    
    function sumarClick (){
        if (count < stock) setCount(count+1);
    }

    function restarClick (){
        if (count > 1) setCount(count-1);
    }
    
    return (
        <div>
            <div>
                <button  onClick={() => onAddToCart(count)} className="btn">Agregar al carrito!</button> 
            </div>
            <button onClick={restarClick}>-</button>
            <span>{count}</span>
            <button onClick={sumarClick }>+</button>
        </div>
    )
}

export default ItemCount;