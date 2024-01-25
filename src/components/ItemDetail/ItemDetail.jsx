import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const {carrito} = useContext(CartContext)

  return (
    <div className="item-detail">
      <img className="imagen" src={product.image} alt={product.name} />
      <div className="texto">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};
export default ItemDetail;