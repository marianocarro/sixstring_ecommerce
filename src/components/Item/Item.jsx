import { Link } from "react-router-dom";

import "./Item.css"


const Item = ({product}) => {
  return (
    <div className="item">
        <img className="image" src={product.image} alt={product.name} />
        <p className="title"> {product.name} </p>
        <p className="price">$ {product.price} </p>
        
        <Link to={`/detail/${product.id}`} className="link">Ver detalles</Link>
    </div>
  )
}
export default Item


//<Link to={`/detail/${product.id}`} className="link">Ver detalles</Link>
//                   ${} para insertar una variable dentro de los template string 