import { useContext } from "react";
import { Link, useParams } from "react-router"
import { ShopContext } from "../ShopContext";
import { Rating } from "@mui/material";

export const ProductPage = () => {
    const { productId } = useParams();
    const { products } = useContext(ShopContext);
    const product = products.filter(p => p.id === +productId)[0];
    console.log(product);
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