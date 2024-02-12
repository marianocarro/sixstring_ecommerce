import { createContext, useState } from "react";


// Creamos un contexto de React llamado CartContext
const CartContext = createContext();

// Creamos un componente llamado CartProvider
// que servira como proveedor del contexto
const CartProvider = ({children}) => {  //la prop children van a ser todos los componentes que envolvamos con la cart provider //renderizo chilndren en el div
                                        //value {todo lo que este aca (codigoJS) va a poder ser consumido por todos los componentes que esten en la prop children }
                                        // value={{carrito, texto, objeto1, objeto2, ...}} ---> recordar {} son para escribir codigo JS dentro, la segunda es p enviar un/os objeto/s

   const [carrito, setCarrito] = useState ([]); //el array esta vacio pq quiero tener un aaray de objetos (cada producto en este caso )
   
   const añadirProducto = (product) => {
    const condicion = estaEnElCarrito(product.id);
    if (condicion) {
      //logica para sumar la cantidad si el producto ya estaba agregado
      const productosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === product.id) {
          return {
            ...productoCarrito,
            cantidad: productoCarrito.cantidad + product.cantidad,
          };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(productosModificados);
    } else {
      setCarrito([...carrito, product]);
    }
  };

  const estaEnElCarrito = (idProduct) => {
    return carrito.some((product) => product.id === idProduct);
  };

  const totalCantidad = () => {
    return carrito.reduce((total, product) => total + product.cantidad, 0);
  };

  const totalPrecio = () => {
    return carrito.reduce(
      (total, product) => total + product.cantidad * product.price,
      0
    );
  };

  const borrarCarrito = () => {
    setCarrito([]);
  };

  const borrarProducto = (idProduct) => {
    const productosFiltrados = carrito.filter(
      (product) => product.id !== idProduct
    );
    setCarrito(productosFiltrados);
  };

  return (
    <CartContext.Provider
      value={{carrito, añadirProducto, totalCantidad, borrarCarrito, borrarProducto, totalPrecio}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };