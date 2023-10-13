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
import DetailCell from "./DetailCell";


// function SaleDetailShow ({detail}) {
function SaleDetailShow () {
    /**
     * detail: {index, productId, productName, amount}
     */
    // const [ productId, setProductId] = useState(detail.productId);
    // const [ productName, setProductName] = useState(detail.productName);
    // const [ amount, setAmount] = useState(detail.amount);
    // const [edit, setEdit] = useState(false);
    const detail = {
        index: 10,
        productId: 1,
        productName: "Credit Card",
        amount: 10,
    };
    const [ productId, setProductId] = useState(detail.productId);
    const [ productName, setProductName] = useState(detail.productName);
    const [ amount, setAmount] = useState(detail.amount);
    const [edit, setEdit] = useState(false);


    const handleClick = (event) => {
        setEdit(!edit);
    };

    const handleProductId = (event) => {
        setProductId(event.target.value)
    };

    const handleProductName = (event) => {
        setProductName(event.target.value)
    };

    const handleAmount = (event) => {
        setAmount(event.target.value)
    };


    return (
        // <Grid item xs={12} justity="center" alignItems="center"></Grid>
        <div
        >
            {
                edit ?
                <TableRow
                    key={detail.productId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    {/* <TableCell component="th" scope="row">
                        {detail.index}
                    </TableCell> */}
                    <DetailCell component="th" scope="row">
                        {detail.index}
                    </DetailCell>

                    <DetailCell>
                        {detail.productId}
                    </DetailCell>

                    <DetailCell>{detail.productName}</DetailCell>

                    <DetailCell>{detail.amount}</DetailCell>

                    <DetailCell>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                            // onClick={handleMenuIconClick} 
                        >
                            <EditIcon></EditIcon>
                        </IconButton>
                    </DetailCell>

                    <DetailCell>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                            // onClick={handleMenuIconClick} 
                        >
                            <DeleteIcon />
                        </IconButton>
                    </DetailCell>
                </TableRow>
                :
                <TableRow
                    key={productId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {detail.index}
                    </TableCell>

                    <TableCell component="th" scope="row">
                        {productId}
                    </TableCell>

                    <TableCell align="right">
                        <TextField
                        required
                        label="Name (replace)"
                        sx={{ml: 2}}
                        // onChange={}
                        // value={}
                        />
                    </TableCell>

                    <TableCell align="right">
                        <TextField
                            required
                            // type="password"
                            label="amount"
                            sx={{ml: 2}}
                            // onChange={}
                            value={amount}
                        />
                    </TableCell>

                    <TableCell align="right">
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
                    </TableCell>

                    <TableCell align="right">
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                            // onClick={handleMenuIconClick} 
                        >
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </TableCell>
                </TableRow>
                        }
            <Button onClick={handleClick}>ToggleEdit</Button>
        </div>

    );
}

export default SaleDetailShow;