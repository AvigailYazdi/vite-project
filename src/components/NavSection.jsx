import { useContext } from "react";
import { SortSection } from "./SortSection";
import { ShopContext } from "../ShopContext";
import { DrawerSection } from "./DrawerSection";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router";

export const NavSection = () => {
  const { cart, toggleDrawer } = useContext(ShopContext);
  const totalItems = Object.values(cart).reduce((sum, amount) => sum + amount, 0);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/admin`);
  }

  return (
    <nav className="product-filter">
      <h1 onClick={handleNavigate}>Admin</h1>
      <SortSection />
      <div className="cartBtnDiv">
        <IconButton className="cartButton" onClick={toggleDrawer(true)} color="primary">
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCart fontSize="large" />
          </Badge>
        </IconButton>
      </div>
      <DrawerSection />
    </nav>
  );
};