import React from "react";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { FormControl, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';

function Signup() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [employeeId, setEmployeeId] = React.useState(0);

    const handleChangeUser = (event) => {
        setUsername(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeEmployeeId = (event) => {
        setEmployeeId(event.target.value);
    };
    return (
        <Box sx={{ columnCount: 1, columnWidth: '20px', flexWrap: 'wrap' }}>
            <form style={{ columns: '100 2', display: 'flex'}}>
            {/* <form style={{ columns: '50% 1', display: 'flex',flexWrap: 'wrap' }}> */}
                <FormControl>
                    {/* <InputLabel id="user-label">Nombre de Usuario</InputLabel> */}
                    <TextField
                     labelId="user-label"
                     required
                     label="Nombre de Usuario"
                     name="username"
                    />
                </FormControl>
                <FormControl>
                    {/* <FormLabel>Password</FormLabel> */}
                    <TextField
                     required
                     type="password"
                     label="Password"
                     name="password"
                    />
                </FormControl>

                <FormControl>
                    <TextField
                     label="Codigo de Empleado (Opcional)"
                     type="number"
                     name="employeeId"
                    />
                </FormControl>

                <Button
                 variant="outlined"
                 size="large">
                    Submit
                </Button>
            </form>

        </Box>
    );
}

export default Signup;