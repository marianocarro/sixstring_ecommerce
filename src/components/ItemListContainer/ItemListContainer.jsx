import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import getProducts from "../Utilities/data";

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  //data (la parte de js que saque de acá para limpiar código) la guardamos en una variable de estado
 const [products, setProducts] = useState([]) //es necesario que productos inicie como un array vacio ([])

useEffect (()=>{
  getProducts
    .then((respuesta) => {
      setProducts(respuesta);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finalizo la promesa");
    });
  
},[])  //[] vacio para que se ejecute una sola vez
   


  return (
    <div>
      <p> {saludo} </p>
      <ItemList products={products}/> 
    </div>
  )
}

export default ItemListContainer;
