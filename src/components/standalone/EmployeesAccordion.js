import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardContent, LinearProgress } from '@mui/material';

export default function EmployeesAccordion({employees}) {
    /**
     * Basically, employees has a summary and details object,
     * where details is further divided into more attributes
     */


    const employeesList = employees.map((employee) => {

        return (
            <Accordion key={employee.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{width: "100%"}}>
                    Asesor de Ventas: {employee.firstName + " " + employee.lastName} <br />
                    Progreso: {employee.progress < 0 ? 0 : employee.progress}%<br/>
                </Typography>
                <Typography sx={{width: "100%"}}>
                    <LinearProgress
                    variant="determinate"
                    value={employee.progress}
                    sx={{width: "100%"}}
                    />
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Card variant="outlined" sx={{pl: 33, backgroundColor: "#fff685"}}>
                    <CardContent>
                        <Typography textAlign="left">
                            Tipo de documento: {employee.documentType} <br />
                            Numero de documento: {employee.documentNumber} <br />
                            Numero de celular: {employee.cellPhoneNumber} <br />
                        </Typography>
                    </CardContent>
                </Card>
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
