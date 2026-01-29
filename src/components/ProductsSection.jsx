import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

export const ProductsSection = () => {
    const { data: products, isLoading, isError } = useProducts();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading products</div>;
    return (
        <section className="products">
            {products.map((product) => (
                <ProductCard
                    key={product._id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    id={product._id}
                />
            ))}
        </section>
    );
};