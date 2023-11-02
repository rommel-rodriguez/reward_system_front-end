import React from "react";
import { useContext, useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Button from '@mui/material/Button';
// import { FormControl, FormLabel } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import Base from "../../common/Base/Base";
import IdentityContext from "../../../context/identity";

function ProfilePage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {identity} = useContext(IdentityContext);
    console.log(`Profile Page, username: ${identity.username}`);


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
        console.log(`Form Submitted! Credentials:\n${username}::${password}`);
        console.log("Profile Page : ", identity);
        console.log(`Profile Page, username: ${identity.username}`);
    };

    return (
        <Base>
            <Box
            sx={{ flexGrow: 1, mt: "100px" }}
            justifyContent="center"
            alignItems="center"
            >
                <Grid container
                spacing={2}
                md={6} 
                mdOffset={3} 
                xs={12} 
                xsOffset={0} 
                // justifyContent="center"
                alignItems="left"
                >
                    <Grid container xs={12} justity="left" alignItems="left">
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        Nombre: 
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        {identity.firstName + ' ' + identity.lastName}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container xs={12} justity="left" alignItems="left">
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        Tipo de Documento:
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        {identity.documentType}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container xs={12} justity="left" alignItems="left">
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        Username: 
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        {identity.username}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>


                    <Grid container xs={12} justity="left" alignItems="left">
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        Nombre: 
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        {identity.firstName + ' ' + identity.lastName}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container xs={12} justity="left" alignItems="left">
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        Número de documento
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography textAlign="left">
                                        {identity.documentNumber}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </Base>
    );
}

export default ProfilePage;