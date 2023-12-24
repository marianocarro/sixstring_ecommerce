import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock}) => {     //({}) aca es lo que recibo
    const [contador, setContador] = useState(1)

    const sumar = () =>{
        if (contador < stock){
        setContador(contador+1)
        }
    }
    const restar = () =>{
        if (contador >1){
            setContador(contador-1)
        }
        
    }

  return (
    <div>
         <button onClick={sumar}>+</button>
         <p>{contador}</p>
         <button onClick={restar}>-</button>
         <button  > Terminar compra </button>
    </div>
  )
}

export default ItemCount