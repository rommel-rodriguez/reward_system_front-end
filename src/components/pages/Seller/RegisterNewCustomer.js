import React, { useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useAddCustomerMutation } from '../../../store';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import { FormControl, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Unstable_Grid2';

function RegisterNewCustomer() {
  // const options = [{fullName:"option01", id: 1}, {fullName:"option02", id: 2}];

  // Required for single transaction

  const [documentTypeSelect, setDocumentTypeSelect] = React.useState([
    'DNI',
    'PASSPORT',
    'OTHER',
  ]);
  const [selectedDocumentType, setSelectedDocumentType] = React.useState(''); // This one must also show on table
  const [documentNumber, setDocumentNumber] = React.useState('');
  const [cellPhoneNumber, setCellPhoneNumber] = React.useState('');

  const [clientFirstName, setClientFirstName] = React.useState('');
  const [clientLastName, setClientLastName] = React.useState('');

  const [addCustomer, { data, error, isLoading, isSuccess, isError }] =
    useAddCustomerMutation();

  const customStyle = {
    width: '100%', // Will fill the parent component
  };

  useEffect(() => {
    const fetchData = async () => {
      /**
       * TODO: Should fetch Document Type Optionos from the database
       * instead of harcoding the types inside this file. Also, add a cleanup
       * method later.
       *  */
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

  const handleChangeSelectedProduct = (event) => {
    setSelectedDocumentType(event.target.value);
  };

  const handleSubmitButton = async (event) => {
    const customer = {
      documentType: selectedDocumentType,
      documentNumber,
      lastName: clientLastName,
      firstName: clientFirstName,
      cellPhoneNumber,
    };

    addCustomer(customer);
  };

  return (
    <Box sx={{ flexGrow: 1 }} justifyContent='center' alignItems='center'>
      <form>
        <Card variant='outlined'>
          <CardContent>
            <Grid
              container
              spacing={2}
              md={6}
              mdOffset={3}
              xs={12}
              xsOffset={0}
            >
              <Grid item xs={12} justity='center' alignItems='center'>
                <Typography variant='h2' gutterBottom>
                  Registro de Nuevos Clientes
                </Typography>
              </Grid>

              <Grid item xs={12} md={5} mt={4}>
                <FormControl style={customStyle}>
                  <TextField
                    label='Primer Nombre'
                    onChange={handleChangeFirstName}
                    value={clientFirstName}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={7} mt={4}>
                <FormControl style={customStyle}>
                  <TextField
                    label='Apellido/s del Cliente'
                    onChange={handleChangeLastName}
                    value={clientLastName}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4} justity='center' alignItems='center'>
                <FormControl fullWidth>
                  <InputLabel id='product-select'>Tipo de Documento</InputLabel>
                  <Select
                    required
                    labelId='product-select'
                    id='product-select'
                    value={selectedDocumentType}
                    label='Age'
                    onChange={handleChangeSelectedProduct}
                  >
                    {documentTypeSelect.map((item) => {
                      return (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6} justity='center' alignItems='center'>
                <FormControl style={customStyle}>
                  <TextField
                    required
                    label='Numero de Documento'
                    name='amount'
                    onChange={handleChangeDocumentNumber}
                    value={documentNumber}
                    // helperText = "Valor no Valido"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6} justity='center' alignItems='center'>
                <FormControl style={customStyle}>
                  <TextField
                    required
                    label='Numero de Mobil'
                    type='number'
                    onChange={handleCellPhoneNumber}
                    value={cellPhoneNumber}
                    // helperText = "Valor no Valido"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} mt={10}>
                <Button
                  variant='outlined'
                  size='large'
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
  );
}

export default RegisterNewCustomer;
