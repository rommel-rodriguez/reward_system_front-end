import React, { useEffect, useState, useContext } from "react";
import { Autocomplete, Box, Card, CardContent, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { FormControl, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Unstable_Grid2'; 
import Base from "../../common/Base/Base";

import authService from "../../../services/authService";
import salesService from "../../../services/salesService";
import productsService from "../../../services/productsService";
import customerService from "../../../services/customerService";

import IdentityContext from "../../../context/identity";

function RegisterNewCustomer() {
    // const options = [{fullName:"option01", id: 1}, {fullName:"option02", id: 2}];

    // Required for single transaction
    const [clientId, setClientId] = React.useState(0);
    const [selectedClient, setSelectedClient] = React.useState(null);
    const [options, setOptions] = React.useState([]);
    const [amount, setAmount] = React.useState(0);

    const [documentTypeSelect, setDocumentTypeSelect] = React.useState(['DNI', 'PASSPORT', 'OTHER']);
    const [selectedDocumentType, setSelectedDocumentType] = React.useState(""); // This one must also show on table
    const [documentNumber, setDocumentNumber] = React.useState("");
    const [cellPhoneNumber, setCellPhoneNumber] = React.useState("");


    const [clientFirstName, setClientFirstName] = React.useState("");
    const [clientLastName, setClientLastName] = React.useState("");


    const customStyle = {
        width: "100%", // Will fill the parent component
    };

    useEffect( () => {
       const fetchData = async () => {
        // TODO: This can throw error if the back-end is not working, handle
        // apropriatedly
        const idsAndNames = await productsService.getProductIdsAndNames(); 
        const customerOptions = await customerService.getCustomerOptions(); 
        // console.log(idsAndNames);
        console.log(customerOptions);
        // setDocumentTypeSelect(idsAndNames);
        setOptions(customerOptions);
       };
    //    return () => { };
       fetchData();
    }, []);

    const handleChangeFirstName = (event) => {
        setClientFirstName(event.target.value);
    };

    const handleChangeDocumentNumber = (event) => {
        setDocumentNumber(event.target.value);
    };

    const handleCellPhoneNumber = (event) => {
        setCellPhoneNumber(event.target.value);
    };

    const handleChangeLastName = (event) => {
        setClientLastName(event.target.value);
    };


    const handleChangeAmount= (event) => {
        const newValue = event.target.value;
        if (newValue <= -1){
            console.log("Invalid Amount Value");
            event.target.error = true;
        }
        setAmount(newValue);
    };


    const handleChangeSelectedProduct= (event) => {
        setSelectedDocumentType(event.target.value);
    };

    const handleClientSelected = (event, value) => {
        console.log("Search value", value);
        setSelectedClient(value);
        setClientId(value.id);
        setClientFirstName(value.fullName);
    };


    const handleSubmitButton = async (event) => {
        // let identity = await authService.getIdentity();

        // console.log(`EmployeeId:\n${identity.employeeId}`);
        // console.log(`Manager?:\n${identity.manager}`);
        try{
            const registerResponse = await customerService.register(
                selectedDocumentType,
                documentNumber,
                clientLastName,
                clientFirstName,
                cellPhoneNumber,
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
                    <Card variant="outlined">
                        <CardContent>

                    <Grid container
                    spacing={2}
                    md={6} 
                    mdOffset={3} 
                    xs={12} 
                    xsOffset={0} 
                    >
                        <Grid item
                         xs={12}
                         justity="center"
                         alignItems="center"
                         >
                            <Typography variant="h2" gutterBottom>
                                Registro de Nuevos Clientes
                            </Typography>
                        </Grid>
                        {/* <Grid item
                         xs={12}
                         justity="center"
                         alignItems="center"
                         mt={5}
                         >
                            <FormControl fullWidth>
                                <Autocomplete
                                    disablePortal
                                    options={options}
                                    id="combo-box-demo"
                                    getOptionLabel={(option) => option.fullName}
                                    onChange={ handleClientSelected}
                                    value={selectedClient}
                                    inputValue={clientName}
                                    onInputChange={(event, newInputValue) => {
                                        setClientName(newInputValue);
                                    }}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Buscar por nombre de usuario" />}
                                />
                            </FormControl>
                        </Grid> */}

                        <Grid item
                         xs={12} md={5} mt={4}
                         >
                            <FormControl style={customStyle}>
                                <TextField
                                label="Primer Nombre"
                                onChange={handleChangeFirstName}
                                value={clientFirstName}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item
                         xs={12} md={7} mt={4}
                         >
                            <FormControl style={customStyle}>
                                <TextField
                                label="Apellido/s del Cliente"
                                onChange={handleChangeLastName}
                                value={clientLastName}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={4} justity="center" alignItems="center">
                            <FormControl fullWidth>
                                <InputLabel id="product-select">Tipo de Documento</InputLabel>
                                <Select
                                 required
                                 labelId="product-select"
                                 id="product-select"
                                 value={selectedDocumentType}
                                 label="Age"
                                 onChange={handleChangeSelectedProduct}
                                >
                                    { 
                                        documentTypeSelect.map(
                                            (item) => {
                                                return (
                                                    <MenuItem
                                                    value={item}
                                                    key={item}
                                                    >
                                                    {item} 
                                                    </MenuItem>
                                                );
                                            }
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6} justity="center" alignItems="center">
                            <FormControl style={customStyle}>
                                <TextField
                                required
                                label="Numero de Documento"
                                name="amount"
                                onChange={handleChangeDocumentNumber}
                                value={documentNumber}
                                // helperText = "Valor no Valido"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6} justity="center" alignItems="center">
                            <FormControl style={customStyle}>
                                <TextField
                                required
                                label="Numero de Mobil"
                                type="number"
                                onChange={handleCellPhoneNumber}
                                value={cellPhoneNumber}
                                // helperText = "Valor no Valido"
                                />
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} mt={10}>
                            <Button
                            variant="outlined"
                            size="large"
                            onClick={handleSubmitButton}
                            >
                                Registrar Cliente 
                            </Button>
                        </Grid>
                    </Grid>
                        </CardContent>
                    </Card>
                </form>
            </Box>
        </Base>
    );
}

export default RegisterNewCustomer;