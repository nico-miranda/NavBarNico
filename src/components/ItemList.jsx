import React from 'react'
import Card from './Card'

function ItemList({item, data}) {
  return (
    <div className='card-container'>
    {data.map( (item) => {
      
        return ( 
        <Card 
        key={item.id}
        id={item.id}
        title = {item.title}
        price = {item.price}
        description = {item.description}
        img = {item.img}
        stock = {item.stock}
        category = {item.category}
        />
        );
    })}
</div>
  )
}

export default ItemList