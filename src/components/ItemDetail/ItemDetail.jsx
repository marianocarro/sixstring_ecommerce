import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


import "./ItemDetail.css";



const ItemDetail = ({ product }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto } = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoNuevo = {...product, cantidad: contador }
    añadirProducto(productoNuevo)
    setToggle(true);
  };


  return (
    <div className="item-detail">
      <img className="imagen" src={product.image} alt={product.name} />
      <div className="texto">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>

     {toggle ? (
          <>
            <Link className="button-terminar" to="/carrito">
              Ir al carrito
            </Link>
            <Link className="button-terminar" to="/">
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount
            stock={product.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
      </div>
    </div>
  );
};



export default ItemDetail;