import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Unstable_Grid2';

import salesService from '../../../services/salesService';
import SalesContext from '../../../context/sales';
import SaleDetailTable from '../../SaleDetailList/SaleDetailTable';
import { addItem, useFetchCustomerOptionsQuery } from '../../../store';
import { useDispatch } from 'react-redux';

function RegisterSalePage() {
  const dispatch = useDispatch();
  const [clientId, setClientId] = React.useState(0);
  const [selectedClient, setSelectedClient] = React.useState(null);
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = React.useState(0);
  const user = useSelector((state) => state.identity.user);
  const {
    data: customerOptions,
    error: errorCustomerOptions,
    isLoading: isLoadingCustomerOptions,
  } = useFetchCustomerOptionsQuery();

  console.log('[DEBUG] RegiterSalePage, customerOPtions:', customerOptions);
  const { productSelect } = useContext(SalesContext);

  const saleDetails = useSelector((state) => state.saleList.saleItems);

  const [date, setDate] = React.useState(
    new Date().toLocaleDateString('en-CA')
  );

  // Must be shown on screen
  const [clientName, setClientName] = React.useState('');
  const [selectedProduct, setSelectedProduct] = React.useState(''); // This one must also show on table

  const customStyle = {
    width: '100%', // Will fill the parent component
  };

  console.log('[DEBUG] Details: ', saleDetails);

  const handleChangeClientId = (event) => {
    setClientId(event.target.value);
  };

  const handleChangeAmount = (event) => {
    const newValue = event.target.value;
    if (newValue <= -1) {
      console.log('Invalid Amount Value');
      event.target.error = true;
    }
    setAmount(newValue);
  };

  const handleChangeSelectedProduct = (event) => {
    const id = event.target.value;
    let name = null;
    setSelectedProduct(id);
    try {
      name = productSelect
        .filter((product) => product.id === id)
        .map((product) => product.name)[0];
    } catch (error) {
      console.error('handleChangeSelectedProduct Error:', error.message);
    }

    setProductName(name);
  };

  const handleClientSelected = (event, value) => {
    console.log('Search value', value);
    setSelectedClient(value);
    setClientId(value ? value.id : 0);
    setClientName(value ? value.fullName : '');
  };

  const handleSubmitButton = async (event) => {
    // let identity = await authService.getIdentity();
    if (amount <= -1) {
      ///  Stop the sale here and send a message
    }

    if (!user) {
      console.log('The identity could not be retrieved');
      return;
    }
    console.log(`Successful Identity Retrieval:\n${user.username}`);
    console.log(`EmployeeId:\n${user.employeeId}`);
    console.log(`Manager?:\n${user.manager}`);
    try {
      const registerResponse = await salesService.register(
        user.employeeId,
        clientId,
        selectedProduct,
        date,
        amount
      );
      console.log('Sale registration response:', registerResponse);
    } catch (error) {
      // TODO: Show message window here
      throw error;
    }
  };

  const handleAddDetail = () => {
    // const index = saleDetails.length + 1;
    const newDetail = {
      // index,
      productId: selectedProduct,
      productName,
      amount: parseFloat(amount),
    };

    dispatch(addItem(newDetail));
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      justifyContent='center'
      alignItems='center'
      className='flex justify-center '
    >
      <form className='max-w-screen-xl'>
        <Card variant='outlined'>
          <CardContent className='bg-neutral-300'>
            <Grid
              container
              spacing={2}
              md={6}
              mdOffset={3}
              xs={12}
              xsOffset={0}
              // justifyContent="center"
              // alignItems="center"
            >
              <Grid item xs={12} justity='center' alignItems='center'>
                <Typography variant='h2' gutterBottom>
                  Registro de Venta
                </Typography>
              </Grid>
              <Grid item xs={12} justity='center' alignItems='center' mt={5}>
                <FormControl fullWidth>
                  <Autocomplete
                    disablePortal
                    options={isLoadingCustomerOptions ? [] : customerOptions}
                    id='combo-box-demo'
                    getOptionLabel={(option) => option.fullName}
                    onChange={handleClientSelected}
                    value={selectedClient}
                    inputValue={clientName}
                    onInputChange={(event, newInputValue) => {
                      setClientName(newInputValue);
                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='Buscar por nombre de usuario'
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2} justity='center' alignItems='center'>
                <FormControl style={customStyle}>
                  <TextField
                    required
                    label='Codigo del Cliente'
                    name='clientId'
                    onChange={handleChangeClientId}
                    value={clientId}
                    type='number'
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={10}>
                <FormControl style={customStyle}>
                  <TextField
                    label='Nombre del Cliente'
                    name='clientName'
                    onChange={handleChangeClientId}
                    value={clientName}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={7} justity='center' alignItems='center'>
                <FormControl fullWidth>
                  <InputLabel id='product-select'>Producto</InputLabel>
                  <Select
                    required
                    labelId='product-select'
                    id='product-select'
                    value={selectedProduct}
                    label='Producto'
                    onChange={handleChangeSelectedProduct}
                  >
                    {productSelect.map((item) => {
                      return (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4} justity='center' alignItems='center'>
                <FormControl style={customStyle}>
                  <TextField
                    required
                    label='Cantidad'
                    name='amount'
                    onChange={handleChangeAmount}
                    value={amount}
                    type='number'
                    error={amount <= -1}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={3} justity='center' alignItems='center'>
                <FormControl style={customStyle}>
                  <TextField
                    disabled
                    required
                    label='Fecha'
                    name='amount'
                    value={date}
                    type='date'
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={3}>
                <Button
                  variant='contained'
                  size='large'
                  onClick={handleAddDetail}
                >
                  Agregar
                </Button>
              </Grid>

              <Grid item xs={12}>
                <SaleDetailTable details={saleDetails}></SaleDetailTable>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant='outlined'
                  size='large'
                  onClick={handleSubmitButton}
                >
                  Procesar Venta
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </Box>
  );
}

export default RegisterSalePage;
