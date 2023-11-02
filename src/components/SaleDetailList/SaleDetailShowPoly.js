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
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { useState } from "react";
import {TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DetailCell from "./DetailCell";
import DetailCellPolymorph from "./DetailCellPolymorph";


function SaleDetailShowPoly ({detail}) {

    /** Get productSelect from provider */
    const productSelect = [
        {
            id: 5,
            name: "prod1"
        },
        {
            id: 1,
            name: "Credit Card"
        },
    ];

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

    const handleChangeAmount = (event) => {
        setAmount(event.target.value)
    };


    return (
            <TableRow
                key={productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                <DetailCellPolymorph component="th" scope="row"
                    edit={edit}
                    cellValue={detail.index}
                />

                <DetailCellPolymorph
                    edit={edit}
                    cellValue={productId}
                />

                <DetailCellPolymorph
                    edit={edit}
                    cellValue={productName}
                    sx={{ml: 2, width: "202px"}}
                    inputComponent={
                        <Select
                            required
                            labelId="product-select"
                            id="product-select"
                            value={productId}
                            label="ProductId"
                            sx={{width: "202px"}}
                        >
                            { 
                                productSelect.map(
                                    (item) => {
                                        return (
                                            <MenuItem
                                            value={item.id}
                                            key={item.id}
                                            >
                                            {item.name} 
                                            </MenuItem>
                                        );
                                    }
                                )
                            }
                        </Select>
                    }
                />


                <DetailCellPolymorph
                    edit={edit}
                    required
                    inputType="number"
                    cellValue={amount}
                    sx={{ml: 2, width: "100px"}}
                    // value={amount}
                    // onChange={handleChangeAmount}
                />


            {
                edit ?
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
                :
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
            }
            
            {
                edit ?
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

                :
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
            }
            </TableRow>
    );
}

export default SaleDetailShowPoly;