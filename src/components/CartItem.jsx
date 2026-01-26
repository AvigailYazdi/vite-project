import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const CartItem = (props) => {
    const { id, amount } = props;
    const { allProducts, handleAmoutChange } = useContext(ShopContext);
    const product = allProducts.filter(p => p._id === id)[0];

    return (
        <ListItem
            key={id}
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