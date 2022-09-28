import React, { useState, useEffect } from 'react';
import getItems from './mockAPI';
import ItemList from './ItemList';

function ItemListContainer(props) {

  let [data, setData] = useState([]);
useEffect( 
  () => { 
    console.log("use effect");
  getItems().then((respuestaDatos) => {
  console.log("ejecutamos getItems");
  setData (respuestaDatos)});
  },[]);


  return (
      <div>
          <br></br>
          <h1 className="tituloH1">{props.greeting}</h1>
          <br></br>
        <ItemList data={data}/>
      </div>
  )
}

export default ItemListContainer;