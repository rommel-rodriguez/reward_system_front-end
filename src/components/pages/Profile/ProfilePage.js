import React from "react";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
// import { FormControl, FormLabel } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import Base from "../../common/Base/Base";
import IdentityContext from "../../../context/identity";

// import authService from "../../../services/authService";

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
        // TODO: Need to create a Provider component to track the is-logged
        // state across all the application
        console.log(`Form Submitted! Credentials:\n${username}::${password}`);
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
                </Grid>
            </Box>
        </Base>
    );
}

export default ProfilePage;