import { useContext } from "react"
import { ShopContext } from "../ShopContext"
import { useNavigate } from "react-router";

export const ProductCard = (props) => {
  const { cart, handleAmoutChange } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate(`/products/${props.id}`);
  }
  return (
    <div className="product-card">
      <div className="product-image" onClick={handleNavigate}>
        <img src={props.image} />
      </div>
      <div className="product-info">
        <h5>{props.title}</h5>
        <h6>{props.price}</h6>
        <div className="product-amount">
          <button disabled={cart[props.id] === 0 || !cart[props.id]} onClick={() => handleAmoutChange(props.id, "-")}>-</button>
          <label className="amount-lable">{cart[props.id] ?? 0}</label>
          <button onClick={() => handleAmoutChange(props.id, "+")}>+</button>
        </div>
      </div>
    </div>
  );
};