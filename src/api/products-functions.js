export const handleProducts = async () => {
    const response = await fetch("https://server-gr38.onrender.com/api/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
};

export const fetchSingleProduct = async (productId) => {
    const response = await fetch(`https://server-gr38.onrender.com/api/products/${productId}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
};

export const deleteProduct = async (productId) => {
    const response = await fetch(`https://server-gr38.onrender.com/api/products/${productId}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Failed to delete product");
    return response.json();
};

export const addProduct = async (newProduct) => {
    const response = await fetch(`https://server-gr38.onrender.com/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
    });
    if (!response.ok) throw new Error("Failed to add product");
    return response.json();
}

export const updateProduct = async (updatedProduct) => {
    const response = await fetch(`https://server-gr38.onrender.com/api/products/${updatedProduct._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
    })
    if (!response.ok) throw new Error("Failed to update product");
    return response.json();
}
