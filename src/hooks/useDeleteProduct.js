import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api/products-functions";

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (productId) => deleteProduct(productId),
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        }
    });
};
