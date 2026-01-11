import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./App"
import { ProductPage } from "./components/ProductPage"
import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";

export const Router = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("All Items");
    const [selectedSort, setSelectedSort] = useState("No sort");
    const [rangeValue, setRangeValue] = useState([]);
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    const applyFilterAndSort = () => {
        let result =
            selectedCategory === "All Items"
                ? products
                : products.filter((p) => p.category === selectedCategory);


        result = result.filter((p) => p.price >= rangeValue[0] && p.price <= rangeValue[1]);

        if (selectedSort && selectedSort !== "No sort") {
            const sortMap = {
                "Alphabetically, A-Z": (a, b) => a.title.localeCompare(b.title, "en"),
                "Alphabetically, Z-A": (a, b) => b.title.localeCompare(a.title, "en"),
                "Price, low to high": (a, b) => a.price - b.price,
                "Price, high to low": (a, b) => b.price - a.price,
            };

            const sortFunc = sortMap[selectedSort];
            if (sortFunc) {
                result = [...result].sort(sortFunc);
            }
        } else {

            result = [...result];
        }

        return result;
    };

    useEffect(() => {
        const handleProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        };
        handleProducts();
    }, []);

    useEffect(() => {
        const cat = products.map((p) => p.category)
            .filter((value, index, array) => array.indexOf(value) === index);

        if (cat.length > 0) {
            cat.unshift("All Items");
            setCategories(cat);
        }
        if (products.length > 0) {
            let min=products[0].price;
            let max=products[0].price;
            for (let i = 0; i < products.length; i++) {
                if (products[i].price < min) {
                    min=products[i].price;
                }
                if (products[i].price > max) {
                    max=products[i].price;
                }
            }
            setMinPrice(Math.floor(min));
            setMaxPrice(Math.ceil(max));
        }

    }, [products]);

    useEffect(()=>{
        setRangeValue([minPrice, maxPrice]);
    },[minPrice,maxPrice]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    useEffect(() => {
        setFilteredProducts(applyFilterAndSort());
    }, [products, selectedCategory, selectedSort, rangeValue])


    const handleCatChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (sortType) => {
        setSelectedSort(sortType);
    };

    const handleRangeValueChange = (event, newRangeValue) => {
        setRangeValue(newRangeValue);
    };

    const handleAmoutChange = (productId, sign) => {
        setCart((prev) => {
            const current = prev[productId] ?? 0;
            const next = sign === "+" ? current + 1 : current - 1;

            return ({ ...prev, [productId]: next })
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
            value={{ products: filteredProducts, categories, cart, selectedCategory, selectedSort, value: rangeValue, minPrice, maxPrice, handleCatChange, handleAmoutChange, handleSortChange, handleRangeValueChange }}>
            <RouterProvider router={router} />
        </ShopContext.Provider>
    )
}