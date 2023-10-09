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

                                    Potenciando la Excelencia

                                    En Caja Piura, nos impulsa una búsqueda incansable de la excelencia. Creemos que cada empleado posee talentos y capacidades únicas, y es nuestro compromiso colectivo aprovechar y nutrir estas fortalezas lo que nos impulsa hacia adelante. Tu dedicación no solo es apreciada; es celebrada. Te empoderamos para que hagas un impacto significativo, no solo dentro de nuestra organización, sino también en la vida de nuestros clientes. Tu experiencia y compromiso inquebrantable son los pilares de nuestro éxito. A medida que continuamos en este viaje, recuerda que eres el corazón de Caja Piura y, juntos, alcanzaremos alturas aún mayores.


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
                                    **Un Viaje de Crecimiento:**

                                    El crecimiento no es solo una palabra en Caja Piura; es una forma de vida. Entendemos que tus aspiraciones no se limitan al éxito profesional; también se extienden al desarrollo personal. Es por eso que ofrecemos un entorno de apoyo y dinámico que fomenta el aprendizaje continuo y la innovación. Ya sea a través de nuestros programas de capacitación en curso, oportunidades de mentoría o exposición a desafíos diversos, tu viaje con nosotros está diseñado para ser transformador. No solo estamos construyendo carreras; estamos dando forma a vidas. Tu historia de crecimiento es nuestra historia de éxito y estamos comprometidos en ayudarte a escribir una notable.
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
                                Dando Forma a Futuros Financieros:

                                Nuestro propósito en Caja Piura es claro: dar forma a futuros financieros más brillantes para nuestros clientes. Tu papel en esta misión es fundamental. Cada interacción, cada decisión y cada solución que brindas contribuye al bienestar financiero de nuestros clientes. Como miembro de nuestro equipo, no eres solo una pieza en la maquinaria; eres la fuerza que impulsa nuestra visión hacia adelante. No se trata solo de banca; se trata de crear oportunidades, infundir confianza y asegurar sueños. Juntos, somos arquitectos de la estabilidad financiera y la prosperidad. Tu dedicación a esta causa es lo que nos distingue y, juntos, seguiremos marcando la diferencia.

                                Espero que encuentres estos párrafos revisados más abundantes y ricos en contenido. Si necesitas ajustes adicionales o tienes preferencias específicas, no dudes en hacérmelo saber.
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