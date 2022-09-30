import React, { useState, useEffect } from 'react';
import getItems, { getItemsByCategory } from './mockAPI';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

function ItemListContainer(props) {

  let [data, setData] = useState([]);
  console.log(useParams());
  const { cat } = useParams();
useEffect( 
  () => { 
   if(cat === undefined){ 
  getItems(cat).then((respuestaDatos) => setData (respuestaDatos));
   }
   else{
    getItemsByCategory(cat).then((respuestaDatos) => 
      setData (respuestaDatos));
   }
  },[cat]);


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