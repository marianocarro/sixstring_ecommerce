import { useEffect, useState } from "react"

import getProducts from "../utilities/data"
import ItemDetail from "../ItemDetail/ItemDetail"


import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(()=>{
    getProducts
      .then((respuesta)=> {
        const productFind = respuesta.find( (prod)=> prod.id === id)
        setProduct(productFind)
      })
      .catch((err)=>{
        console.log(err)
      })

  }, [])

  return (
    <div>
      <ItemDetail product={product} />
      
    </div>
  )
}
export default ItemDetailContainer


//<ItemCount stock = {10} onAdd={(contador) => console.log('Cantidad Agregada', contador)}/>
