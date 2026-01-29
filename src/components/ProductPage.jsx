import { Link, useParams } from "react-router"
import { Rating } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../api/products-functions";

export const ProductPage = () => {
    const { productId } = useParams();
    const { data: product, isLoading, isError, error } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => fetchSingleProduct(productId),
        enabled: !!productId,
    });

    if (isLoading) return <div>Loading product details...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    if (!product) return <div>No product found.</div>;

    return (
        <div className={"productPageMainDiv"}>
            <div>
                <img src={product.image} />
            </div>
            <div className={"productPageInfoDiv"}>
                <h1 className={"productTitle"}>{product.title}</h1>
                <span>Category: <strong>{product.category}</strong></span>
                <span>Product Id: <strong>{productId}</strong></span>
                <span className={"priceSpan"}>{product.price}$</span>
                <div className={"descriptionDiv"}>
                    <span>Description:</span>
                    <span>{product.description}</span>
                </div>
                <div className={"priceRatingDiv"}>
                    <Rating className={"priceRating"} readOnly value={product.rating.rate}></Rating>
                    <span>({product.rating.count})</span>
                </div>
                <Link to="/">Back to home</Link>
            </div>
        </div>
    )
}