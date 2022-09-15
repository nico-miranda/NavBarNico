
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App(props) {
 
  return (
  <>
  <NavBar />
  
  <ItemListContainer greeting="Ofertas Imperdibles!"/>
  
  </>  
  
  );
}

export default App;
