import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import getProducts from "../Utilities/data";

import ItemList from "../ItemList/ItemList";


import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  //data (la parte de js que saque de acá para limpiar código) la guardamos en una variable de estado
 const [products, setProducts] = useState([]) //es necesario que productos inicie como un array vacio ([])
 const {category} = useParams()

 useEffect (()=>{
  getProducts
    .then((respuesta) => {
      if (category){
        const productsFiltered = respuesta.filter (
          (product) => product.category===category);
        setProducts (productsFiltered);
      }else{
      setProducts(respuesta);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finalizo la promesa");
    });
  
},[category])  //[] vacio para que se ejecute una sola vez //category para poder hacer el filtrado
   


  return (
    <div className="item-list-container">
      <p className="saludo"> {saludo} </p>
      <ItemList products={products}/> 
      
    </div>
  )
}

export default ItemListContainer;