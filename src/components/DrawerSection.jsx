import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import Drawer from '@mui/material/Drawer';
import { Button, Divider, IconButton, List } from "@mui/material";
import { CartItem } from "./CartItem";
import CloseIcon from '@mui/icons-material/Close';

export const DrawerSection = () => {
    const { allProducts, open, cart, toggleDrawer } = useContext(ShopContext);
    let totalAmount = 0;
    let totalPrice = 0;
    for (let i in cart) {
        totalAmount += cart[i];
        totalPrice += allProducts.filter(p => p.id === +i)[0].price * cart[i];
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
                    {Object.entries(cart).map((product) => (
                        <>
                            <CartItem id={product[0]} amount={product[1]} />
                            <Divider />
                        </>
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