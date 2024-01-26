import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>el carrito esta vacio</h2>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <ul className="lista">
        {carrito.map((product) => (
          <li className="producto" key={product.id}>
            <img
              className="imagen"
              src={product.image}
              alt={product.name}
            />
            <p className="texto nombre">{product.name}</p>
            <p className="texto">cantidad: {product.stock}</p>
            <p className="texto">precio c/u: ${product.price}</p>
            <FaTrashAlt
              className="borrar"
              onClick={() => borrarProducto(product.id)}
              size={25}
            />
          </li>
        ))}
      </ul>
      <h3>Total a pagar: ${totalPrecio()}</h3>
      <div className="borrar-todo" onClick={borrarCarrito}>
        <p>Vaciar carrito</p>
        <FaTrashAlt size={25} />
      </div>
    </div>
  );
};
export default Carrito;