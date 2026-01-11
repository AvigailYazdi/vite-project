import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { FilterSortComp } from "./FilterSortComp";
import RangeSlider from "./RangeSlider";


export const SortSection = () => {
  const { categories, handleCatChange, handleSortChange, selectedCategory, selectedSort } = useContext(ShopContext);

  const sortOptions = [
    "No sort",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low"
  ];

  return (
    <div className="sort">
      <FilterSortComp label={"Filter by:"} listOfOptions={categories} handleChange={handleCatChange} value={selectedCategory}/>
      <FilterSortComp label={"Sort by:"} listOfOptions={sortOptions} handleChange={handleSortChange} value={selectedSort}/>
      <RangeSlider></RangeSlider>
    </div>
  );
};


