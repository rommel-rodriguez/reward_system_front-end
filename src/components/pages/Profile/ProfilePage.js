import React from "react";
import { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
// import { FormControl, FormLabel } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import Base from "../../common/Base/Base";
import IdentityContext from "../../../context/identity";

import authService from "../../../services/authService";

function ProfilePage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [identity, setIdentity] = React.useState({});
    // const {identity,} = useContext(IdentityContext);
    // const identity = authService.g;
    console.log(`Profile Page, username: ${identity.username}`);

    useEffect( () => {
       const fetchData = async () => {
        // TODO: This can throw error if the back-end is not working, handle
        // apropriatedly
            let localIdentity = await authService.getIdentity();
            console.log("Local Identity: ", localIdentity);
            setIdentity(localIdentity);
        };
    //    return () => { };
       fetchData();
    }, []);

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
        console.log("Profile Page : ", identity);
        console.log(`Profile Page, username: ${identity.username}`);
    };

    // const handleSubmitButton = async (event) => {
    //     console.log(`Form Submitted! Credentials:\n${username}::${password}`);
    // };

    return (
        <Base>
            <Box
            sx={{ flexGrow: 1 }}
            justifyContent="center"
            alignItems="center"
            >
                <Grid container
                spacing={2}
                md={6} 
                mdOffset={3} 
                xs={12} 
                xsOffset={0} 
                justifyContent="center"
                alignItems="center"
                >
                    <Grid item xs={12} md={4} justity="center" alignItems="center">
                        <Typography>
                            {identity.firstName} <br />
                            {identity.username} <br />
                            {identity.documentType} <br />
                            {identity.documentNumber} <br />
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4} >
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <Typography>

                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                        variant="outlined"
                        size="large"
                        onClick={handleSubmitButton}
                        >
                            Test 
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Base>
    );
}

export default ProfilePage;