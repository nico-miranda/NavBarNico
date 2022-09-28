import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { getItemDetail } from './mockAPI';


function ItemDetailContainer(props){
    let [data, setData] = useState({});


useEffect(() => {
    getItemDetail().then((respuestaDatos) => setData(respuestaDatos));
}, []);

  return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )}

export default ItemDetailContainer;