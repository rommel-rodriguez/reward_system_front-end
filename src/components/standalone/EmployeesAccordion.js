import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, LinearProgress } from '@mui/material';

export default function EmployeesAccordion({employees}) {
    /**
     * Basically, employees has a summary and details object,
     * where details is further divided into more attributes
     */

    // const employees = [
    //     {
    //         id: 123,
    //         firstName: "Test Name",
    //         lastName: "Test Last Name 01",
    //         progreso: 20,
    //         documentType: "Type 01",
    //         documentNumber: "jfosajfasi23313",
    //         cellPhoneNumber: "987654325",


    //     },
    //     {
    //         id: 1234,
    //         firstName: "Mariela",
    //         lastName: "Gonzales Rivera",
    //         progreso: 50,
    //         documentType: "Type 02",
    //         cellPhoneNumber: "987654325",
    //     },
    // ];

    const employeesList = employees.map((employee) => {

        return (
            <Accordion key={employee.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>
                    Asesor de Ventas: {employee.firstName + " " + employee.lastName} <br />
                    Progreso: {employee.progress}
                    <LinearProgress
                    variant="determinate"
                    value={employee.progress}
                    sx={{width: "100%"}}
                    />
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Tipo de documento: {employee.documentType} <br />
                    Numero de documento: {employee.documentNumber} <br />
                    Numero de celular: {employee.cellPhoneNumber} <br />
                </Typography>
            </AccordionDetails>
            </Accordion>
        );
    });
    

    return (
    <div>
        {employeesList}
    </div>
    );
}
