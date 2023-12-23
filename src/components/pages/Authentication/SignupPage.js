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
import Grid from '@mui/material/Unstable_Grid2'; 
import Base from "../../common/Base/Base";

import authservice from "../../../services/authService";

function SignupPage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [employeeId, setEmployeeId] = React.useState(0);

    const handleChangeUser = (event) => {
        setUsername(event.target.value);
        // console.log(`User name: ${event.target.value}`);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeEmployeeId = (event) => {
        setEmployeeId(event.target.value);
    };

    const handleSubmit = (event) => {
        console.log(`Form Submitted!!!!`);
    };

    const handleSubmitButton = (event) => {
        console.log(`Form Submitted! Credentials:\n${username}::${password}::${employeeId}`);
        authservice.signup(
            username,
            password,
            employeeId !== 0 ? employeeId : null);
    };

    return (
        <Box
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="center"
        >
            <form onSubmit={handleSubmit}>
                <Grid container
                spacing={2}
                md={6} 
                mdOffset={3} 
                xs={12} 
                xsOffset={0} 
                justifyContent="center"
                alignItems="center"
                >
                        <Grid item xs={12} justity="center" alignItems="center">
                            <FormControl>
                                <TextField
                                required
                                label="Nombre de Usuario"
                                name="username"
                                onChange={handleChangeUser}
                                value={username}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                {/* <FormLabel>Password</FormLabel> */}
                                <TextField
                                required
                                type="password"
                                label="Password"
                                name="password"
                                onChange={handleChangePassword}
                                value={password}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl>
                                <TextField
                                label="Codigo de Empleado (Opcional)"
                                type="number"
                                name="employeeId"
                                onChange={handleChangeEmployeeId}
                                value={employeeId}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                            variant="outlined"
                            size="large"
                            onClick={handleSubmitButton}
                            >
                                Registrar Usuario 
                            </Button>
                        </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default SignupPage;