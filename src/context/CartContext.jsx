import { createContext, useState } from "react";


// Creamos un contexto de React llamado CArtContext
const CartContext = createContext()

const CartProvider = ({children}) => {  //la prop children van a ser todos los componentes que envolvamos con la cart provider //renderizo chilndren en el div
                                        //value {todo lo que este aca (codigoJS) va a poder ser consumido por todos los componentes que esten en la prop children }
                                        // value={{carrito, texto, objeto1, objeto2, ...}} ---> recordar {} son para escribir codigo JS dentro, la segunda es p enviar un/os objeto/s

   const [carrito, setCarrito] = useState ([]) //el array esta vacio pq quiero tener un aaray de objetos (cada producto en este caso )
   
   return (                             
    <CartContext.Provider value={{carrito}}>
        {children}                      
    </CartContext.Provider>

)

}


export {CartProvider, CartContext}