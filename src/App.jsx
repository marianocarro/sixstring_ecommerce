
import './App.css'

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  
     //<div id="app">    </div> lo saque del return tenia adentro a navbar y todo lo otro
  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element = {<ItemListContainer saludo = {"Bienvenidos a la eCommerce de Música"} />}/>
        <Route path="/categories/:category" element = {<ItemListContainer saludo = {"Bienvenidos a la eCommerce de Música"} />}/>
        <Route path="/detail/:id" element = {<ItemDetailContainer/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      
      
    </BrowserRouter>
      
    </>
  )
}

export default App
