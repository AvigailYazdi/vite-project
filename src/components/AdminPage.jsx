import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { ProductDialog } from "./ProductDialog";
import { ProductsTable } from "./ProductsTable";

export const AdminPage = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddClick = () => {
        setSelectedProduct(null);
        setDialogOpen(true);
    };

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="adminPageDiv">
            <div className="adminHeadDiv">
                <h1>Product Management</h1>
                <Button variant="outlined" onClick={handleAddClick} startIcon={<AddIcon />}>
                    ADD PRODUCT
                </Button>
            </div>
            <ProductsTable onEdit={handleEditClick} />
            <ProductDialog isOpen={dialogOpen} onCloseFunc={handleCloseDialog} product={selectedProduct} />
        </div>
    );
}