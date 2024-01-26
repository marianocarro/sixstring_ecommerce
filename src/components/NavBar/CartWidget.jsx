import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


import { FaCartArrowDown } from "react-icons/fa";

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext);

  return (
    <Link to="/carrito" id="cartwidget">
      <FaCartArrowDown size={45}/>
      {carrito.length !== 0 && <p>{totalCantidad()}</p>}
    </Link>
  );
};




export default CartWidget
