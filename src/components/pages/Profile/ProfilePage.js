import React from "react";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, Typography } from "@mui/material";
// import { FormControl, FormLabel } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import profilePicture from '../../../assets/images/profile.png';

function ProfilePage() {
    // const {identity} = useContext(IdentityContext);
    const identity = useSelector((state) => state.identity.user);
    console.log(`Profile Page, username: ${identity.username}`);

    return (
        <Box
        sx={{ flexGrow: 1}}
        justifyContent="center"
        alignItems="center"
        className="flex flex-col justify-center mt-6"
        >
            <picture className="w-full flex justify-center">
                <source media="(min-width: 800px)" srcSet={profilePicture} />
                <source media="(min-width: 450px)" srcSet="medium-image.jpg" />
                <img
                    src="default-image.jpg"
                    alt="Description"
                    className="mb-10 rounded-3xl h-72 w-full md:w-3/5"
                />
            </picture>
            <Grid container
            spacing={2}
            md={6} 
            // mdOffset={3} 
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
    );
}

export default ProfilePage;