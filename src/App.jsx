
import './App.css'

import NavBar from "./components/NavBar/NavBar";
import Cartwidget from "./components/NavBar/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";


function App() {
  

  return (
    <>
    <div id="app">
      <NavBar />
      <ItemListContainer saludo = {"Bienvenidos a la eCommerce de Música"} />
      
      <ItemCount stock = {10} />
    </div>
      
    </>
  )
}

export default App
