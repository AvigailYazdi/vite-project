import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import Drawer from '@mui/material/Drawer';
import { Button, Divider, IconButton, List } from "@mui/material";
import { CartItem } from "./CartItem";
import CloseIcon from '@mui/icons-material/Close';
import { useAllProducts } from "../hooks/useAllProducts";

export const DrawerSection = () => {
    const { open, cart, toggleDrawer } = useContext(ShopContext);
    const { data: allProducts = [] } = useAllProducts();

    let totalAmount = 0;
    let totalPrice = 0;
    for (let i in cart) {
        totalAmount += cart[i];
        totalPrice += allProducts.filter(p => p._id === i)[0].price * cart[i];
    }

    return (
        < Drawer open={open} onClose={toggleDrawer(false)} >
            <div className="drawerContent">
                <div className={"cartHeader"}>
                    <span>Shopping Cart ({totalAmount})</span>
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <Divider />
                <List className="cart">
                    {Object.entries(cart).map(([id, amount]) => (
                        <div key={id}>
                            <CartItem id={id} amount={amount} />
                            <Divider />
                        </div>
                    ))}
                </List>
                <div className={"cartFooter"}>
                    <div className="totalPrice">
                        <span>Total price: </span>
                        <span>{totalPrice.toFixed(2)}$</span>
                    </div>
                    <div className="chechOutBtn">
                        <Button variant="contained">Proceed to Checkout</Button>
                    </div>
                </div>
            </div >
        </Drawer >
    );
}