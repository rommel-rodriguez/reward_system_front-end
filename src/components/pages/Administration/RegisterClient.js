import React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';

function Signup() {
  const [documentType, setDocumentType] = React.useState('');

  const handleChange = (event) => {
    setDocumentType(event.target.value);
  };
  return (
    <Box>
      <form>
        <FormControl>
          <InputLabel id='name-label'>Nombre</InputLabel>
          <TextField labelId='name-label'></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Apellidos</FormLabel>
          <TextField></TextField>
        </FormControl>
        <FormControl variant='outlined' sx={{ m: 1, minWidth: 250 }}>
          {/* <FormLabel select id="document-type-label" >Tipo de Documento</FormLabel> */}
          <InputLabel id='document-type-label'>Tipo de Documento</InputLabel>
          <Select
            labelId='document-type-label'
            id='demo-simple-select'
            value={documentType}
            label='Age'
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <TextField></TextField>
        </FormControl>
        <Button>Submit</Button>
      </form>
    </Box>
  );
}

export default Signup;
