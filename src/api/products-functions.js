export const handleProducts = async () => {
  const response = await fetch("http://localhost:3000/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

export const fetchSingleProduct = async (productId) => {
  const response = await fetch(`http://localhost:3000/products/${productId}`);
  if (!response.ok) throw new Error("Failed to fetch product");
  return response.json();
};
