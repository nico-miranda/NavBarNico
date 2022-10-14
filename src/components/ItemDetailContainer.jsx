import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { getItemDetail } from './firestore';
import { useParams } from "react-router-dom";


function ItemDetailContainer(props){
    let [data, setData] = useState({});

    const { id } = useParams();

useEffect(() => {
    getItemDetail(id).then((respuestaDatos) => setData(respuestaDatos));
}, [id]);

  return (
    <div>
        <ItemDetail item={data}/>
    </div>
  )}

export default ItemDetailContainer;