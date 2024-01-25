import { useEffect, useState } from "react"

import getProducts from "../utilities/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemCount from "../ItemCount/ItemCount"

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
      <ItemCount stock = {10} onAdd={(contador) => console.log('Cantidad Agregada', contador)}/>

    </div>
  )
}
export default ItemDetailContainer