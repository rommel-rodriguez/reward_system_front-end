import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
    Box,
    Button,
    Typography,
    IconButton,
    Card,
    CardContent,
    TableRow,
    TableCell,
} from "@mui/material";
import { useState } from "react";
import {TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


function SaleDetailShow () {
    /**
     * detail: {index, productId, productName, amount}
     */
    const [edit, setEdit] = useState(false);
    const detail = {
        index: 10,
        productId: 1,
        productName: "Credit Card",
        amount: 10,
    };


    const handleClick = (event) => {
        setEdit(!edit);
    };

    return (
        // <Grid item xs={12} justity="center" alignItems="center"></Grid>
        <Box
        color="text.primary"
        >
            {
                edit ?
                <Box>
                    <Typography gutterBottom>{detail.index}</Typography>
                    <Typography gutterBottom>{detail.productId}</Typography>
                    <Typography gutterBottom>{detail.productName}</Typography>
                    <Typography gutterBottom>{detail.amount}</Typography>

                    <Typography display="inline">
                        {detail.index}
                        {detail.productId}
                        {detail.productName}
                        {detail.amount} <br></br>
                    </Typography>

                    <Typography display="inline">
                        {
                        + " " + detail.index
                        + " " + detail.productId
                        + " " + detail.productName
                        + " " + detail.amount
                        }
                    </Typography>

                    <Card>
                        <CardContent>
                            {detail.index}
                            {detail.productId}
                            {detail.productName}
                            {detail.amount}
                        </CardContent>
                    </Card>


                    <Card display="inline">
                        <CardContent>
                            {detail.index}
                        </CardContent>
                    </Card>

                    <Card display="inline">
                        <CardContent>
                            {detail.index}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            {detail.index}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            {detail.index}
                        </CardContent>
                    </Card>
                    <TableRow
                        key={detail.productId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {detail.index}
                        </TableCell>
                        <TableCell align="right">{detail.productId}</TableCell>
                        <TableCell align="right">{detail.productName}</TableCell>
                        <TableCell align="right">{detail.amount}</TableCell>
                    </TableRow>

                </Box>
                :
                <Box>
                    {/* <TextField>detail.index</TextField> */}
                    <TextField
                    required
                    // type="password"
                    label="Password"
                    name="password"
                    // onChange={}
                    // value={}
                    />
                    <TextField
                    required
                    // type="password"
                    label="Password"
                    name="password"
                    sx={{ml: 2}}
                    // onChange={}
                    // value={}
                    />
                    <TextField
                    required
                    // type="password"
                    label="Password"
                    name="password"
                    sx={{ml: 2}}
                    // onChange={}
                    // value={}
                    />
                    {/* <Typography>detail.productId</Typography>
                    <Typography>detail.productName</Typography>
                    <Typography>detail.amount</Typography> */}

                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2 }}
                        // onClick={handleMenuIconClick} 
                    >
                        <SaveIcon></SaveIcon>
                    </IconButton>
                            </Box>
                        }
            <Button onClick={handleClick}>ToggleEdit</Button>
        </Box>

    );
}

export default SaleDetailShow;