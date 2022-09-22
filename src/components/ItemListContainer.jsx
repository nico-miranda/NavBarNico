import React, { useState, useEffect } from 'react';
import Card from "./Card";
import "../styles/card.css"
import getItems from './mockAPI';


function ItemListContainer(props) {

  let [data, setData] = useState([]);
useEffect( 
  () => { 
  getItems().then((respuestaDatos) =>  setData (respuestaDatos));
  },
   []
  );


  return (
      <div>
          <br></br>
          <h1 className="tituloH1">{props.greeting}</h1>
          <br></br>
          <div className='card-container'>
                  {data.map( (item) => {
                    console.log(item);
                      return ( 
                      <Card 
                      key={item.id}
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
      </div>
  )
}

export default ItemListContainer;