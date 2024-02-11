
import './App.css'

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from "./components/Carrito/Carrito";
import Checkout from './components/Checkout/Checkout';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';



function App() {
  
     //<div id="app">    </div> lo saque del return tenia adentro a navbar y todo lo otro

     //Por las dudas no envuelvo browserRouter con el CartOrovider porq puedo llegar a perder el redireccionamiento de BR
  return (
    <>
    <BrowserRouter>

        <CartProvider>

          <NavBar />

          <Routes>
            <Route path="/" element = {<ItemListContainer saludo = {"Bienvenidos a la eCommerce de Música"} />}/>
            <Route path="/categories/:category" element = {<ItemListContainer saludo = {"Bienvenidos a la eCommerce de Música"} />}/>
            <Route path="/detail/:id" element = {<ItemDetailContainer/>} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          
        </CartProvider>

    </BrowserRouter>
      
    </>
  )
}

export default App
