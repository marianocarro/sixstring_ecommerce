
import './App.css'

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  
     //<div id="app">    </div> lo saque del return tenia adentro a navbar y todo lo otro
  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element = {<ItemListContainer saludo = {"Bienvenidos a la eCommerce de Música"} />}/>

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <ItemCount stock = {10} />

    </BrowserRouter>
      
    </>
  )
}

export default App
