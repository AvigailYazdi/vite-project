import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { FilterSortComp } from "./FilterSortComp";
import RangeSlider from "./RangeSlider";
import { DrawerSection } from "./DrawerSection";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";


export const SortSection = () => {
  const { cart, categories, handleCatChange, handleSortChange, selectedCategory, selectedSort, toggleDrawer } = useContext(ShopContext);

  const sortOptions = [
    "No sort",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low"
  ];

  const totalItems = Object.values(cart).reduce((sum, amount) => sum + amount, 0);

  return (
    <div className="sort">
      <FilterSortComp label={"Filter by"} listOfOptions={categories} handleChange={handleCatChange} value={selectedCategory} />
      <FilterSortComp label={"Sort by"} listOfOptions={sortOptions} handleChange={handleSortChange} value={selectedSort} />
      <RangeSlider></RangeSlider>
      <div className="cartBtnDiv">
        <IconButton className={"cartButton"} onClick={toggleDrawer(true)} color="primary">
          <ShoppingCart />
        </IconButton>
        <span>{totalItems}</span>
      </div>
      <DrawerSection></DrawerSection>
    </div >
  );
};

