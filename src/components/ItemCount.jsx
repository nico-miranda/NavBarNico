import React from 'react'


function ItemCount(props) {
    
    const [count, setCount] = React.useState(props.initial);
console.log("stock:", props.stock)



    function sumarClick (){
        setCount(count+1);
    }

    function restarClick (){
        setCount(count-1);
    }
    

    return (
        <div>
            <button disabled={count<=(props.initial)} onClick={restarClick}>-</button>
            <span>{count}</span>
            <button disabled={count>=(props.stock)}   onClick={sumarClick}>+</button>
        </div>
    )
}

export default ItemCount;