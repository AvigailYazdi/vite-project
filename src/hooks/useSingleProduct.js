import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../api/products-functions";

export const useSingleProduct = (productId) => {
    return useQuery({
        queryKey: ["product", productId],
        queryFn: () => fetchSingleProduct(productId),
        enabled: !!productId,
        staleTime: 1000 * 60 * 5,
    });
};
