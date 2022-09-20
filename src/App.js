
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from './components/ItemCount'; 

function App(props) {
 
  return (
  <>
  <NavBar />
  
  <ItemListContainer greeting="Ofertas Imperdibles!"/>
  
  
  </>  
  
  );
}

export default App;
