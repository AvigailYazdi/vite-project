import { Avatar, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useAllProducts } from "../hooks/useAllProducts";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

export const ProductsTable = ({ onEdit }) => {
    const { data: allProducts = [] } = useAllProducts();
    const { mutate: deleteProductMutate, isLoding } = useDeleteProduct();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        allProducts.map((product) => (
                            <TableRow key={product._id}>
                                <TableCell><Avatar src={product.image}></Avatar></TableCell>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>{(product.price).toFixed(2)}$</TableCell>
                                <TableCell>
                                    <div className="actionsCell">
                                        <IconButton onClick={() => onEdit(product)}>
                                            <ModeEditOutlinedIcon color="primary" />
                                        </IconButton>
                                        <IconButton onClick={() => deleteProductMutate(product._id)} disabled={isLoding}>
                                            <DeleteOutlinedIcon color="error" />
                                        </IconButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}