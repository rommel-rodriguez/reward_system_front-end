import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
    Button,
    Typography,
    IconButton,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import {TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DetailCell from "./DetailCell";
import DetailCellPolymorph from "./DetailCellPolymorph";


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

    console.log("Edit Mode When rendering:", edit);

    const handleEditClick = (event) => {
        console.log("Inside Edit Handler");
        console.log("Edit Mode Before:", edit);
        setEdit(true);
    };

    const handleEditClose = (event) => {
        console.log("Inside Close Handler");
        console.log("Edit Mode Before:", edit);
        setEdit(false);
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
            edit ?
            <TableRow
                key={productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <DetailCell component="th" scope="row">
                    {detail.index}
                </DetailCell>

                <DetailCell>
                    {productId}
                </DetailCell>

                <DetailCell>
                    <TextField
                    required
                    label="Name (replace)"
                    sx={{ml: 2, width: "202px"}}
                    // onChange={}
                    // value={}
                    />
                </DetailCell>

                <DetailCell>
                    <TextField
                        required
                        // type="password"
                        label="amount"
                        sx={{ml: 2, width: "100px"}}
                        // onChange={}
                        value={amount}
                    />
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
                        <SaveIcon></SaveIcon>
                    </IconButton>
                </DetailCell>

                <DetailCell onClick={handleEditClose}>
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
                </DetailCell>
            </TableRow>
            :
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

                <DetailCell sx={{width: "202px"}}>{detail.productName}</DetailCell>

                <DetailCell sx={{width: "100px"}}>{detail.amount}</DetailCell>

                <DetailCell onClick={handleEditClick}>
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
    );
}

export default SaleDetailShow;