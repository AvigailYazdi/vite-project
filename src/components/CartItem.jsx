import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAllProducts } from "../hooks/useAllProducts";

export const CartItem = (props) => {
    const { id, amount } = props;
    const { handleAmoutChange } = useContext(ShopContext);
    const { data: allProducts = [] } = useAllProducts();
    const product = allProducts.find((p) => p._id === id);
    if (!product) return null;

    return (
        <ListItem
            className="cartItem"
            secondaryAction={
                <div className="cartItemActions">
                    <IconButton className="cartItemBtn" onClick={() => handleAmoutChange(id, "-")}>
                        <RemoveIcon />
                    </IconButton>
                    <span className="cartItemAmount">{amount}</span>
                    <IconButton className="cartItemBtn" onClick={() => handleAmoutChange(id, "+")}>
                        <AddIcon />
                    </IconButton>
                </div>
            }
        >
            <ListItemAvatar>
                <Avatar src={product.image}></Avatar>
            </ListItemAvatar>
            <ListItemText
                className={"cartItemText"}
                primary={<span className="cartItemTitle">{product.title}</span>}
                secondary={<span className="cartItemPrice">{product.price}$ X {amount} = {(product.price * amount).toFixed(2)}$</span>}
            >
            </ListItemText>
        </ListItem >
    )
}