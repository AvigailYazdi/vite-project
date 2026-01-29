import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./App"
import { ProductPage } from "./components/ProductPage"
import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import { useAllProducts } from "./hooks/useAllProducts";

export const Router = () => {
    const [cart, setCart] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("All Items");
    const [selectedSort, setSelectedSort] = useState("No sort");
    const [priceRange, setPriceRange] = useState([]);
    const [open, setOpen] = useState(false);

    const { data: products = [] } = useAllProducts();

    const categories = ["All Items", ...new Set(products.map((p) => p.category))];

    const prices = products.map((p) => p.price);
    const minPrice = prices.length ? Math.floor(Math.min(...prices)) : 0;
    const maxPrice = prices.length ? Math.ceil(Math.max(...prices)) : 0;

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        if (minPrice !== 0 || maxPrice !== 0) {
            setPriceRange([minPrice, maxPrice]);
        }
    }, [minPrice, maxPrice]);

    const handleCatChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (sortType) => {
        setSelectedSort(sortType);
    };

    const handlePriceRangeChange = (event, newPriceRange) => {
        setPriceRange(newPriceRange);
    };

    const handleAmoutChange = (productId, sign) => {
        setCart((prev) => {
            const current = prev[productId] ?? 0;
            const next = sign === "+" ? current + 1 : current - 1;

            if (next <= 0) {
                const updatedCart = { ...prev };
                delete updatedCart[productId];
                return updatedCart;
            }

            return { ...prev, [productId]: next };
        })
    }

    const router = createBrowserRouter([
        {
            path: "/",
            Component: App
        },
        {
            path: "/products/:productId",
            Component: ProductPage
        }
    ])
    return (
        <ShopContext.Provider
            value={{ categories, cart, selectedCategory, selectedSort, priceRange, minPrice, maxPrice, open, handleCatChange, handleAmoutChange, handleSortChange, handlePriceRangeChange, toggleDrawer }}>
            <RouterProvider router={router} />
        </ShopContext.Provider>
    )
}