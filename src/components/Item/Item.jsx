import "./Item.css"


const Item = ({product}) => {
  return (
    <div className="item">
        <img className="image" src={product.image} alt={product.name} />
        <p className="title"> {product.name} </p>
        <p className="price">$ {product.price} </p>
      
        <p>{product.name}</p>
    </div>
  )
}
export default Item