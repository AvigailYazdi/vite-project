import { useContext } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ShopContext } from '../ShopContext';

export default function RangeSlider() {
    const { minPrice, maxPrice, handlePriceRangeChange, priceRange } = useContext(ShopContext);

    return (
        <Box className={"priceSlider"} sx={{ width: 250 }}>
            <Slider
                min={minPrice}
                max={maxPrice}
                getAriaLabel={() => 'Price range'}
                value={priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    );
}
