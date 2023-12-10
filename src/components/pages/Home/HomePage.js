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
    const {identity} = useContext(IdentityContext);
    console.log("Signin page: ", identity);

    return (
        <Base>
            <Box
            sx={{ flexGrow: 1 }}
            justifyContent="center"
            alignItems="center"
            mt={3}
            >
                <Grid container
                spacing={2}
                // md={8} 
                // mdOffset={2} 
                xs={12} 
                xsOffset={0} 
                // justifyContent="center"
                // alignItems="center"
                direction="row"
                justifyContent="center"
                // alignItems="start"
                >
                    <Grid item xs={12} md={5} sx={{height: '90vh'}}>
                        <Card sx={{height: "100%", overflow: "clip"}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=870"
                                alt="Paella dish"
                                sx={{height: "70%"}}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dictum magna commodo lobortis. Nullam condimentum sagittis dui, vitae blandit nibh bibendum in. Maecenas a lectus fringilla, iaculis risus a, dictum urna. Curabitur maximus enim nec ligula efficitur, suscipit sollicitudin nulla pharetra. Aliquam bibendum odio ut felis dignissim luctus. Suspendisse potenti. Nulla facilisi. Vivamus elit eros, posuere vitae purus vitae, suscipit rhoncus augue. Nunc accumsan mauris molestie purus lobortis tincidunt. Vivamus consectetur hendrerit feugiat. Nullam non turpis vehicula, fermentum ex nec, luctus velit. Aliquam lacus justo, posuere eget nisi ac, volutpat tincidunt purus. Integer cursus eu est vitae lobortis. Nullam auctor orci ut diam gravida laoreet.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{height: '90vh'}}>
                        <Card
                            variant="outlined"
                            sx={{height: "49%", overflow: "hidden", mb: "2%"}}
                            className="hover:overflow-scroll"
                        >
                            <CardMedia
                                component="img"
                                image="https://plus.unsplash.com/premium_photo-1679917737897-9b373261ad57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400"
                                alt="Paella dish"
                                sx={{height: "70%"}}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dictum magna commodo lobortis. Nullam condimentum sagittis dui, vitae blandit nibh bibendum in. Maecenas a lectus fringilla, iaculis risus a, dictum urna. Curabitur maximus enim nec ligula efficitur, suscipit sollicitudin nulla pharetra. Aliquam bibendum odio ut felis dignissim luctus. Suspendisse potenti. Nulla facilisi. Vivamus elit eros, posuere vitae purus vitae, suscipit rhoncus augue. Nunc accumsan mauris molestie purus lobortis tincidunt. Vivamus consectetur hendrerit feugiat. Nullam non turpis vehicula, fermentum ex nec, luctus velit. Aliquam lacus justo, posuere eget nisi ac, volutpat tincidunt purus. Integer cursus eu est vitae lobortis. Nullam auctor orci ut diam gravida laoreet.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            variant="outlined"
                            sx={{height: "49%", overflow: "clip"}}
                            className="hover:overflow-scroll"
                        >
                            <CardMedia
                                component="img"
                                image="https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720"
                                alt="Paella dish"
                                sx={{height: "70%"}}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dictum magna commodo lobortis. Nullam condimentum sagittis dui, vitae blandit nibh bibendum in. Maecenas a lectus fringilla, iaculis risus a, dictum urna. Curabitur maximus enim nec ligula efficitur, suscipit sollicitudin nulla pharetra. Aliquam bibendum odio ut felis dignissim luctus. Suspendisse potenti. Nulla facilisi. Vivamus elit eros, posuere vitae purus vitae, suscipit rhoncus augue. Nunc accumsan mauris molestie purus lobortis tincidunt. Vivamus consectetur hendrerit feugiat. Nullam non turpis vehicula, fermentum ex nec, luctus velit. Aliquam lacus justo, posuere eget nisi ac, volutpat tincidunt purus. Integer cursus eu est vitae lobortis. Nullam auctor orci ut diam gravida laoreet.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* <Grid item xs={12}  md={5} sx={{height: '40vh'}}> */}
                    {/* </Grid> */}
                </Grid>
            </Box>
        </Base>
    );
}

export default HomePage;