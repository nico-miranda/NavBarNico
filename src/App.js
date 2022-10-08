import './App.css';
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from "./context/cartContext";
function App(props) {
 
  return (
    <CartContextProvider>
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/home" element={<ItemListContainer greeting="Ofertas Imperdibles!"/>}/>
    <Route path="/category/:cat" element={<ItemListContainer/>}/>
    <Route path="/detalle/:id" element={ <ItemDetailContainer/>}/>
    <Route path="/#" element={<h1>404: Te perdiste</h1>}/>
    <Route path="*" element={<ItemListContainer greeting="Ofertas Imperdibles!"/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>  
  </CartContextProvider>
  );
}

export default App;
