import { Avatar, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useAllProducts } from "../hooks/useAllProducts";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useDeleteProduct } from "../hooks/useDeleteProduct";

export const AdminPage = () => {
    const { data: allProducts = [] } = useAllProducts();
    const{mutate: deleteProductMutate, isLoding} = useDeleteProduct();

    return (
        <div className="adminPageDiv">
            <div className="adminHeadDiv">
                <h1>Product Management</h1>
                <Button variant="outlined" startIcon={<AddIcon />}>
                    ADD PRODUCT
                </Button>
            </div>
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
                                            <IconButton>
                                                <ModeEditOutlinedIcon color="primary" />
                                            </IconButton>
                                            <IconButton onClick={()=>deleteProductMutate(product._id)} disabled={isLoding}>
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
        </div>
    );
}