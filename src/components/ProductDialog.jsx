import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useAddProduct } from "../hooks/useAddProduct";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

export const ProductDialog = (props) => {
    const { isOpen, onCloseFunc, product } = props;
    const isEdit = !!product;
    const emptyProduct = { image: "", title: "", price: "", description: "", category: "" };
    const [formData, setFormData] = useState(emptyProduct);
    const { mutate: add } = useAddProduct();
    const { mutate: update } = useUpdateProduct();

    useEffect(() => {
        if (isEdit) {
            setFormData({
                image: product.image,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category
            });
        }
        else {
            setFormData(emptyProduct);
        }
    }, [product])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        if (isEdit) {
            const updatedP = { ...formJson, _id: product._id }
            update(updatedP);
        }
        else {
            add(formJson);
        }
        onCloseFunc();
        setFormData(emptyProduct);
    };

    return (
        <Dialog open={isOpen} onClose={onCloseFunc}>
            <DialogTitle>{isEdit ? "Edit Product Details" : "New Product"}</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} id="product-form">
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                required
                                fullWidth
                                margin="dense"
                                name="title"
                                label="Title"
                                type="text"
                                defaultValue={formData.title} />
                        </Grid>
                        <Grid size={6}>
                            <TextField
                                required
                                fullWidth
                                margin="dense"
                                name="category"
                                label="Category"
                                type="text"
                                defaultValue={formData.category} />
                        </Grid>
                        <Grid size={6}>
                            <TextField
                                required
                                fullWidth
                                margin="dense"
                                name="price"
                                label="Price"
                                type="number"
                                slotProps={{
                                    htmlInput: {
                                        step: "0.01",
                                        min: 0
                                    }
                                }}
                                defaultValue={formData.price} />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                required
                                fullWidth
                                margin="dense"
                                name="image"
                                label="Image URL"
                                type="url"
                                defaultValue={formData.image} />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                minRows={3}
                                maxRows={6}
                                margin="dense"
                                name="description"
                                label="Description"
                                type="text"
                                defaultValue={formData.description} />
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={()=>{onCloseFunc(), setFormData(emptyProduct)}}>CANCLE</Button>
                <Button type="submit" form="product-form" variant="contained">{isEdit ? "UPDATE" : "ADD"}</Button>
            </DialogActions>
        </Dialog>
    );
}