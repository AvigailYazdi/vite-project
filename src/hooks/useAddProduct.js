import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../api/products-functions";

export const useAddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (product) => addProduct(product),
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        }
    });
};