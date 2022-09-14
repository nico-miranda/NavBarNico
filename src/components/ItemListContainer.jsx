import React from 'react';
import Card from "./Card";
import "../styles/card.css"
function ItemListContainer(props) {
  
  return (
    <div>
        
        <h1 className="tituloH1">{props.greeting}</h1>
        <div className="mainContainer">
    <Card title="Griferia para baño" img="https://http2.mlstatic.com/D_NQ_NP_960673-MLA40666960739_022020-W.webp" price={52.272} description="Combo Grif. Monocomando Fv Arizona Lavatorio Bidé Ducha B1" />
    <Card title="Griferia para cocina" img="https://http2.mlstatic.com/D_NQ_NP_774701-MLA32043988266_092019-W.webp" price={13.837} description="Grifo de cocina monocomando FV B1 Arizona 0423/B1 cromo" />
    <Card title="Griferia para baño" img="https://http2.mlstatic.com/D_NQ_NP_963556-MLA45244017611_032021-W.webp" price={28.722} description="Grifería de bañera y ducha FV Arizona 0106/B1 color cromo" />
    </div>
    </div>
  )
}

export default ItemListContainer;