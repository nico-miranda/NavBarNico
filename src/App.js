
import './App.css';
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

function App(props) {
 
  return (
  <>
  <NavBar />
  <CartWidget/>  
  <ItemListContainer greeting="Ofertas Imperdibles!"/>
  
  </>  
  
  );
}

export default App;
