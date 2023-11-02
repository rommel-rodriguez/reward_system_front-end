import React from "react";
import { useContext } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { FormControl, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Unstable_Grid2'; 
import Base from "../../common/Base/Base";
import IdentityContext from "../../../context/identity";


function HomePage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {identity, login} = useContext(IdentityContext);
    console.log("Signin page: ", identity);

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

    const handleSubmitButton = async (event) => {
        // TODO: Need to create a Provider component to track the is-logged
        // state across all the application
        console.log(`Form Submitted! Credentials:\n${username}::${password}`);
        // authService.login(username, password);
        try {
            await login(username, password);
        } catch (error) {
            // TODO: Show error window here
        }
    };

    return (
        <Base>
            <Box
            sx={{ flexGrow: 1 }}
            justifyContent="center"
            alignItems="center"
            >
                <Grid container
                spacing={2}
                md={8} 
                mdOffset={2} 
                xs={12} 
                xsOffset={0} 
                // justifyContent="center"
                // alignItems="center"
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                >
                    <Grid item xs={12} direction="row">
                        <Card>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=870"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://plus.unsplash.com/premium_photo-1679917737897-9b373261ad57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} >
                        <Card>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Base>
    );
}

export default HomePage;