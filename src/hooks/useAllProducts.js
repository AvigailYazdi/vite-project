import { useQuery } from "@tanstack/react-query";
import { handleProducts } from "../api/products-functions";

export const useAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: handleProducts,
    staleTime: 1000 * 60 * 5,
  });
};
