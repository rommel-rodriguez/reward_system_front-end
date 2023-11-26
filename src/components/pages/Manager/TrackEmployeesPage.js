import React from "react";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { FormControl, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Unstable_Grid2'; 
import Base from "../../common/Base/Base";
import EmployeesAccordion from "../../standalone/EmployeesAccordion";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import employeesService from "../../../services/employeesService";


import {
    useFetchEmployeesQuery,
    useFetchManagerByIdQuery,
    useFetchManagedEmployeesByManagerIdQuery,
} from "../../../store";

function TrackEmployeesPage() {
    // const [monthYearSelect, setMonthYearSelect] = React.useState([]);
    const [selectedMonthYear, setSelectedMonthYear] = React.useState(""); // This one must also show on table
    const [managedEmployees, setManagedEmployees] = React.useState([]);
    const [shownEmployees, setShownEmployees] = React.useState([]);
    const user = useSelector((state) => state.identity.user);
    const { data, error, isLoading } = useFetchEmployeesQuery();
    const {
        data: managerData,
        error: managerError,
        isLoading: managerIsLoading
    } = useFetchManagerByIdQuery(user.employeeId);

    const {
        data: managedEmployeesData,
        error: managedEmployeesError,
        isLoading: managedEmployeesIsLoading
    } = useFetchManagedEmployeesByManagerIdQuery(user.employeeId);


    if (data)
        console.log("Employees: ", data);

    if (managedEmployeesData)
        console.log("Managed Employee's Data: ", managedEmployeesData);

    if (managerData)
        console.log("Manager's Data: ", managerData);

    // let monthsAndYears = [];
    let monthYearSelect;
    if (managedEmployeesData) {
        const monthsAndYears = employeesService
            .extractUniqueMonthsAndYears(managedEmployeesData);
        monthYearSelect = monthsAndYears.map((obj) => ({
            ...obj,
            chain: `${obj.year}-${obj.month.toString().padStart(2, '0')}`,
        }));
    }

    useEffect( () => {
       const fetchData = async () => {
        // TODO: This can throw error if the back-end is not working, handle
        // apropriatedly

        // let employees = await managedEmployeesData;

        // setManagedEmployees(employees || []);

        //TODO: Seems like, even after executing the setManagedEmployees
        // function, the managedEmployee's data is still not ready yet?
        // console.log("Managed Employees State: ", employees);

        // let monthsAndYears = employeesService
        //     .extractUniqueMonthsAndYears(employees);

        // console.log("TEP Unique Months and Years", monthsAndYears);

        // setMonthYearSelect(
        //     monthsAndYears.map((obj) => ({
        //         ...obj,
        //         chain: `${obj.year}-${obj.month.toString().padStart(2, '0')}`,
        //     }))
        // );
        };
    //    return () => { };
       fetchData();
    }, [managedEmployeesData]);


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
        if (!user){
            console.log('The identity could not be retrieved [BUTTON]');
            return;
        }
        console.log(`Successful Identity Retrieval:\n${user.username}`);
        console.log(`EmployeeId:\n${user.employeeId}`);
        console.log(`Manager?:\n${user.manager}`);
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
                                { 
                                    (!managedEmployeesIsLoading) &&
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