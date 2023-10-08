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
import EmployeesAccordion from "../../standalone/EmployeesAccordion";
import { useEffect } from "react";

import authService from "../../../services/authService";
import productsService from "../../../services/productsService";
import employeesService from "../../../services/employeesService";

function TrackEmployeesPage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [monthYearSelect, setMonthYearSelect] = React.useState([]);
    const [selectedMonthYear, setSelectedMonthYear] = React.useState(""); // This one must also show on table
    const [managedEmployees, setManagedEmployees] = React.useState([]);
    const [shownEmployees, setShownEmployees] = React.useState([]);

    useEffect( () => {
       const fetchData = async () => {
        // TODO: This can throw error if the back-end is not working, handle
        // apropriatedly
            let identity = await authService.getIdentity();
            const employees = await employeesService
                .getEmployeesManagedEmployees(identity.employeeId); 

            setManagedEmployees(employees)

            console.log(employees);
            let monthsAndYears = employeesService.extractUniqueMonthsAndYears(employees);
            setMonthYearSelect(
                monthsAndYears.map((obj) => ({
                    ...obj,
                    chain: `${obj.year}-${obj.month.toString().padStart(2, '0')}`,
                }))
            );
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

    const handleChangeSelectedMonthYear= (event) => {
        // console.log(`Selected Month Year: ${selectedMonthYear}`);
        const [year, month] = selectedMonthYear.split('-').map((obj) => parseInt(obj));
        setSelectedMonthYear(event.target.value);
        setShownEmployees(
            employeesService.filterAndTransformManagedEmployees(
                managedEmployees,
                month,
                year
                )
        );
        console.log(managedEmployees);
        console.log(shownEmployees);
    };



    const handleSubmitButton = async (event) => {
        let identity = await authService.getIdentity();
        if (!identity){
            console.log('The identity could not be retrieved [BUTTON]');
            return;
        }
        console.log(`Successful Identity Retrieval:\n${identity.username}`);
        console.log(`EmployeeId:\n${identity.employeeId}`);
        console.log(`Manager?:\n${identity.manager}`);
        try{
        }catch(error) {
            // TODO: Show message window here
            throw error;    
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
                md={6} 
                mdOffset={3} 
                xs={12} 
                xsOffset={0} 
                justifyContent="center"
                alignItems="center"
                >
                    <Grid item xs={12} md={7} justity="center" alignItems="center">
                        <FormControl fullWidth>
                            <InputLabel id="product-select">Periodo</InputLabel>
                            <Select
                                required
                                labelId="product-select"
                                id="product-select"
                                value={selectedMonthYear}
                                onChange={handleChangeSelectedMonthYear}
                            >
                                {/* <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem> */}
                                { 
                                    monthYearSelect.map(
                                        (item) => {
                                            return (
                                                <MenuItem
                                                value={item.chain}
                                                key={item.chain}
                                                >
                                                {item.chain} 
                                                </MenuItem>
                                            );
                                        }
                                    )
                                }
                            </Select>
                            </FormControl>
                        </Grid>
                    <Grid item xs={12} justity="center" alignItems="center">
                        <EmployeesAccordion employees={shownEmployees} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
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
            </Box>
        </Base>
    );
}

export default TrackEmployeesPage;