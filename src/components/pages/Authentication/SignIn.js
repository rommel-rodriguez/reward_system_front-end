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

import authService from "../../../services/authService";

function SignIn() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChangeUser = (event) => {
        setUsername(event.target.value);
        // console.log(`User name: ${event.target.value}`);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = (event) => {
        console.log(`Form Submitted!!!!`);
    };

    const handleSubmitButton = (event) => {
        // TODO: Need to create a Provider component to track the is-logged
        // state across all the application
        console.log(`Form Submitted! Credentials:\n${username}::${password}`);
        authService.login(username, password);
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
                            <Button
                            variant="outlined"
                            size="large"
                            onClick={handleSubmitButton}
                            >
                                Login 
                            </Button>
                        </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default SignIn;