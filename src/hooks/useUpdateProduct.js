import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../api/products-functions";

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (updatedProduct) => updateProduct(updatedProduct),
        onSuccess: () => {
            queryClient.invalidateQueries(["product"]);
            queryClient.invalidateQueries(["product", productId]);
        }
    });
};