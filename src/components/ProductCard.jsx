import { useContext } from "react"
import { ShopContext } from "../ShopContext"
import { useNavigate } from "react-router";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ProductCard = (props) => {
  const { cart, handleAmoutChange } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
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
          <IconButton disabled={cart[props.id] === 0 || !cart[props.id]} onClick={() => handleAmoutChange(props.id, "-")}>
            <RemoveIcon />
          </IconButton>
          <label className="amount-lable">{cart[props.id] ?? 0}</label>
          <IconButton onClick={() => handleAmoutChange(props.id, "+")}>
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};