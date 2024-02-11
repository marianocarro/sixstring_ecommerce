import { Link } from "react-router-dom";

import "./Item.css"
import { useState } from "react";


const Item = ({product}) => {

  //evento, cuando paso el mouse por sobre el item, se va a agrandar
  const [zoom, setZoom]= useState(false)  
  const handleMouseOver = () => {
    setZoom(true);
  }
  const handleMouseLeave = () => {
    setZoom(false);
  }
  const cardstyle = {
    transform: zoom ? 'scale(1.1)' : 'scale(1)',
    transition: 'transforms 0.3s ease-in-out'
  }

  return (
    <div 
      style={cardstyle}
      onMouseOver={handleMouseOver} //en React los eventos siempre empiezan con on. Evento de zoom cuando paso el mouse por sobre el item
      onMouseLeave={handleMouseLeave}
      className="item"> 

        <img className="image" src={product.image} alt={product.name} />
        <p className="title"> {product.name} </p>
        <p className="price">$ {product.price} </p>
        
        <Link to={`/detail/${product.id}`} className="link">Ver detalles</Link>
    </div>
  );
};
export default Item


//<Link to={`/detail/${product.id}`} className="link">Ver detalles</Link>
//                   ${} para insertar una variable dentro de los template string 