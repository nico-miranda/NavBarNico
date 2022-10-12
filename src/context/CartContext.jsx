import React, { useState, createContext} from "react";

const cartCtx = createContext();

export default function CartContextProvider({ children }){
const [cart, setCart] = useState([]);

function addItem(item, count){
const newItem ={
    ...item,
    count
}

    if (isInCart(newItem.id)) {
        const findProduct = cart.find(item => item.id === newItem.id)
        const productIndex = cart.indexOf(findProduct)
        const auxArray = [...cart]
        auxArray[productIndex].count += count
        setCart(auxArray)
    } else {
        setCart([...cart, newItem])
    }
}

function getTotalItemsInCart(){
    return cart.reduce((acc, item) => acc += item.count, 0)
}

function isInCart(id){
let found = cart.some( item => item.id === id)
    return found;
}

function emptyCart(){
    return setCart([])
}

function deleteItem(id){
    return setCart(cart.filter(item => item.id !== id))
}

function getItemPrice() {
    return cart.reduce((acc, item) => acc += item.price * item.count, 0)
}

function totalPrice() {
    return cart.reduce((prev, act) => prev + act.count * act.price, 0)
}

    return (
        <cartCtx.Provider value={{ cart, addItem, getTotalItemsInCart, isInCart, emptyCart, deleteItem, getItemPrice, totalPrice}}>
            {children}
        </cartCtx.Provider>
    )
}

export { cartCtx };