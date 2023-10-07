import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { FormControl, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Unstable_Grid2'; 
import Base from "../../common/Base/Base";

import authService from "../../../services/authService";
import salesService from "../../../services/salesService";
import productsService from "../../../services/productsService";

function RegisterSalePage() {
    // Required for single transaction
    const [clientId, setClientId] = React.useState(0);
    const [productId, setProductId] = React.useState(0);
    const [employeeId, setEmployeeId] = React.useState(0); // TODO: This one must be retrieved from the identity
    const [amount, setAmount] = React.useState(0);

    const [productSelect, setProductSelect] = React.useState([]);
    const [date, setDate] = React.useState(
        (new Date()).toLocaleDateString('en-CA')
        );

    // Required state for sale
    const [saleItems, setSaleItems] = React.useState([]); // List of SaleLine Objects
    // Must be shown on screen
    const [clientName, setClientName] = React.useState("");
    const [selectedProduct, setSelectedProduct] = React.useState(""); // This one must also show on table

    const customStyle = {
        width: "100%", // Will fill the parent component
    };


    useEffect( () => {
       const fetchData = async () => {
        // TODO: This can throw error if the back-end is not working, handle
        // apropriatedly
        const idsAndNames = await productsService.getProductIdsAndNames(); 
        console.log(idsAndNames);
        setProductSelect(idsAndNames);
       };
    //    return () => { };
       fetchData();
    }, []);
    


    const handleChangeClientId = (event) => {
        setClientId(event.target.value);
        // console.log(`User name: ${event.target.value}`);
    };

    const handleChangeProductId= (event) => {
        setProductId(event.target.value);
    };

    const handleChangeAmount= (event) => {
        setAmount(event.target.value);
    };

    const handleChangeEmployeeId = (event) => {
        setEmployeeId(event.target.value);
    };

    const handleChangeSelectedProduct= (event) => {
        setSelectedProduct(event.target.value);
    };


    const handleSubmitButton = async (event) => {
        let identity = await authService.getIdentity();
        if (!identity){
            console.log('The identity could not be retrieved [BUTTON]');
            return;
        }
        console.log(`Successful Identity Retrieval:\n${identity.username}`);
        console.log(`EmployeeId:\n${identity.employeeId}`);
        console.log(`Manager?:\n${identity.manager}`);
        try{
            const registerResponse = await salesService.register(
                identity.employeeId,
                clientId,
                selectedProduct,
                date,
                amount
            );
        }catch(error) {
            // TODO: Show message window here
            throw error;    
        }
    };

    return (
        <Base>
            <Box
            sx={{ flexGrow: 1 }}
            justifyContent="center"
            alignItems="center"
            >
                <form >
                    <Grid container
                    spacing={2}
                    md={6} 
                    mdOffset={3} 
                    xs={12} 
                    xsOffset={0} 
                    // justifyContent="center"
                    // alignItems="center"
                    >
                        <Grid item
                         xs={12}
                         justity="center"
                         alignItems="center"
                         >
                            <Typography variant="h2" gutterBottom>
                                Registro de Venta
                            </Typography>
                        </Grid>
                        <Grid item
                         xs={12} md={2}
                         justity="center"
                         alignItems="center"
                         >
                            <FormControl style={customStyle}>
                                <TextField
                                required
                                label="Codigo del Cliente"
                                name="clientId"
                                onChange={handleChangeClientId}
                                value={clientId}
                                type="number"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item
                         xs={12} md={10}
                         >
                            <FormControl style={customStyle}>
                                <TextField
                                label="Nombre del Cliente"
                                name="clientName"
                                onChange={handleChangeClientId}
                                value={clientName}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={7} justity="center" alignItems="center">
                            <FormControl fullWidth>
                                <InputLabel id="product-select">Producto</InputLabel>
                                <Select
                                 required
                                 labelId="product-select"
                                 id="product-select"
                                 value={selectedProduct}
                                 label="Age"
                                 onChange={handleChangeSelectedProduct}
                                >
                                    {/* <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem> */}
                                    { 
                                        productSelect.map(
                                            (item) => {
                                                return (
                                                    <MenuItem
                                                    value={item.id}
                                                    key={item.id}
                                                    >
                                                    {item.name} 
                                                    </MenuItem>
                                                );
                                            }
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* <Grid item xs={12} md={2} justity="center" alignItems="center">
                            <FormControl style={customStyle}>
                                <TextField
                                required
                                label="Codigo del producto"
                                name="productId"
                                onChange={handleChangeProductId}
                                value={productId}
                                type="number"
                                />
                            </FormControl>
                        </Grid> */}


                        <Grid item xs={12} md={4} justity="center" alignItems="center">
                            <FormControl style={customStyle}>
                                <TextField
                                required
                                label="Cantidad"
                                name="amount"
                                onChange={handleChangeAmount}
                                value={amount}
                                type="number"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item
                         xs={12} md={2}
                         justity="center"
                         alignItems="center"
                         >
                            <FormControl style={customStyle}>
                                <TextField
                                disabled
                                required
                                label="Fecha"
                                name="amount"
                                // onChange={handleChangeAmount}
                                value={date}
                                type="date"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                            variant="outlined"
                            size="large"
                            onClick={handleSubmitButton}
                            >
                                Procesar Venta 
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Base>
    );
}

export default RegisterSalePage;