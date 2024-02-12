import { useEffect, useState } from "react";
//import getProducts from "../utilities/data"     saco esto cuando cambio a firebase
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import db from "../../db/db";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [productoExiste, setProductoExiste] = useState(false);
  const { id } = useParams();

  useEffect(()=>{
    const productRef = doc (db, "products", id );
    getDoc (productRef).then((respuesta)=>{
    const productDb = {id: respuesta.id, ...respuesta.data()};
    
    if (!respuesta.exists()) {
      setProductoExiste(true);
    }
    setProduct(productDb);
    }) 
  }, [id]); //nos pide id como dependencia para que si cambia id debe cambiar toda la data

  return (
    <div>
      {productoExiste ? (
        <div>Producto no existe</div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};
    

export default ItemDetailContainer;











   /*  eso iria dentro del use efects si no uso firebase

      getProducts
       .then((respuesta)=> {
          const productFind = respuesta.find( (prod)=> prod.id === id)
          setProduct(productFind)
            })
         .catch((err)=>{
         console.log(err)
       }) asi filtraba por productos antes del firebase
       


  esto es para firebase
        const productRef = doc (db, "product", id );
    getDoc (productRef).then((respuesta)=>{
    const productDb = {id: respuesta.id, ...respuesta.data()};
    
    if (!respuesta.exists()) {
      setProductoExiste(true);
    }
    setProduct(productDb);
    }) */


