
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App(props) {
 
  return (
  <>
  <NavBar />
  
  <ItemListContainer greeting="Ofertas Imperdibles!"/>
  
  
  </>  
  
  );
}

export default App;
