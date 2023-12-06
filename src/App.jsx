
import './App.css'

import NavBar from "./components/NavBar/NavBar";
import Cartwidget from "./components/NavBar/CartWidget";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  

  return (
    <>
    <div id="app">
      <NavBar />
      <ItemListContainer saludo = {"Bienvenidos a la eCommerce de Música"} />
      

    </div>
      
    </>
  )
}

export default App
