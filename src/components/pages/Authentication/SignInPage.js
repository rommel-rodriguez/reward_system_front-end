import React from "react";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { FormControl, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Unstable_Grid2'; 
import Modal from "../../common/Modal/Modal";
import Base from "../../common/Base/Base";
import IdentityContext from "../../../context/identity";

import authService from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../../store";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SignInPage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [modalMessage, setModalMessage] = React.useState({title: '', content:''});
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate();


    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const [signIn, { isLoading, isError, error }] = useSignInMutation();


    const actionBar = <div>
        {/* <Button variant="contained" onClick={handleClose}>SomeButton</Button> */}
    </div>;
    const modal = <Modal actionBar={actionBar} closeModal={handleClose}>
        <div>
            <Typography variant="h3">{modalMessage.title}</Typography>
            <br></br>
            <Typography>{modalMessage.content}</Typography>
        </div>
    </Modal>;

    // console.log("Signin page: ", identity);

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
            // await login(username, password);
            const token = await signIn({username, password});
            console.log('Token:', token);

        } catch (error) {
            // TODO: Show error window here
            setModalMessage({
                title: "Fallo en logearse",
                content: "Credenciales incorrectas"
            });
            setShowModal(true);
        }

        setModalMessage({
            title: "Se ha autenticado con exito",
            content: "Sera redirigido en unos momentos"
        });
        setShowModal(true);
        setTimeout(() => {
            navigate("/profile");
        }, 10000); 
    };

    return (
        <Box
        sx={{ flexGrow: 1, mt: 10 }}
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
        {
            showModal && modal 
        }
        </Box>
    );
}

export default SignInPage;