import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
// import getProducts from "../utilities/data";  esto lo importo si no uso firebase

import db from "../../db/db";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  //data (la parte de js que saque de acá para limpiar código) la guardamos en una variable de estado
 const [products, setProducts] = useState([]); //es necesario que productos inicie como un array vacio ([])
 const {category} = useParams();

 useEffect (()=>{
    
    let consulta
                        //con collection traigo mi bd de nombre product ue cargue en firebas        
    const productsRef = collection (db, "products");
    

    if (category){
      //filtrar data
      consulta = query(productsRef, where("category", "==", category))
    }else{
        //traer toda la data
        consulta = productsRef
    }


    //la promesa (funcion) getDocs me trae todos los documentos (datos). Como argumento tengo que pasarle la funcion productsRef
    getDocs (consulta)
      .then ((respuesta)=> {
      let productsDb = respuesta.docs.map ((product)=> {
          return {id: product.id, ...product.data()};
        });
        setProducts(productsDb)
    })
    .catch((error) => console.log(error))
    
  },[category])  //[] vacio para que se ejecute una sola vez //category para poder hacer el filtrado
                 
           
   


  return (
    <div className="item-list-container">
      <p className="saludo"> {saludo} </p>
      <ItemList products={products}/> 
      
    </div>
  )
}

export default ItemListContainer;










                 // useEffect (()=>{
                                                   // esto va en dentro de useEfects si no uso firebase
                 //      getProducts
                 //         .then((respuesta) => {
                 //           if (category){
                 //             const productsFiltered = respuesta.filter (
                 //               (product) => product.category===category);
                 //             setProducts (productsFiltered);
                 //           }else{
                 //           setProducts(respuesta);
                 //           }
                 //         })
                 //         .catch((error) => {
                 //           console.log(error);
                 //         })
                 //         .finally(() => {
                 //           console.log("finalizo la promesa");
                 //         });
                 //   },[category])  //[] vacio para que se ejecute una sola vez //category para poder hacer el filtrado