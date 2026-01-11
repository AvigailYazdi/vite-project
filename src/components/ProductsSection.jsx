import { useContext, useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ShopContext } from "../ShopContext";

export const ProductsSection = () => {
    const { products } = useContext(ShopContext);
    return (
        <section className="products">
            {products.map((product) => (
                <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    id={product.id}
                />
            ))}
        </section>
    );
};