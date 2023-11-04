import React from "react";
import { useState, useContext, useReducer } from "react";
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
import {TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DetailCell from "./DetailCell";
import DetailCellPolymorph from "./DetailCellPolymorph";
import SalesContext from "../../context/sales";


const reducer  = ( state, action) => {

    let newState = {};

    switch ( action.type ) {
        case 'change-amount':
            newState = {...state, amount: action.payload};
            break;

        case 'change-productId':
            newState = {...state, productId: action.payload};
            break;

        default:
            console.log("The provided action type on the row state is not valid");

    };

    return newState;
};


function SaleDetailShowPoly ({detail}) {

    console.log("Row Poly's init detail", detail);
    const {
            productSelect,
            updateDetail,
            removeDetail,
          } = useContext(SalesContext);

    // const [ rowState, setRowState] = useState(detail);
    const [ rowState, dispatchRow ] = useReducer(
        reducer,
        detail,
    );
    console.log("Row Poly's State", rowState);
    const [edit, setEdit] = useState(false);

    console.log("Edit Mode When rendering:", edit);

    const rowStateToDetail = () => {
        return {
            index: rowState.index,
            productId: rowState.productId,
            productName: rowState.productName,
            amount: rowState.amount
        };
    };

    const handleEditClick = (event) => {
        console.log("Inside Edit Handler");
        console.log("Edit Mode Before:", edit);
        setEdit(true);
    };

    const handleSaveDetail= (event) => {
        console.log("Inside Save Detail Handler");
        updateDetail(rowStateToDetail());
        setEdit(false);
    };

    const handleRemoveDetail = (event) => {
        console.log("Inside Remove Detail");
        removeDetail(rowStateToDetail());
        setEdit(false);
    };

    const handleEditClose = (event) => {
        console.log("Inside Close Handler");
        console.log("Edit Mode Before:", edit);
        setEdit(false);
    };


    const handleChangeAmount = (event) => {
        // setAmount(event.target.value)
        dispatchRow(
            {
                type: "change-amount",
                payload: parseFloat(event.target.value),
            }
        );
    };


    return (
            <TableRow
                key={rowState.productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                <DetailCellPolymorph component="th" scope="row"
                    // edit={edit}
                    cellValue={rowState.index}
                />

                <DetailCellPolymorph
                    // edit={edit}
                    cellValue={rowState.productId}
                />

                <DetailCellPolymorph
                    // edit={edit}
                    cellValue={rowState.productName}
                    sx={{ml: 2, width: "202px"}}
                    inputComponent={
                        <Select
                            required
                            labelId="product-select"
                            id="product-select"
                            value={rowState.productId}
                            label="ProductId"
                            sx={{width: "202px"}}
                            onChange={
                                (event)=> {
                                    console.log("Select Callback");
                                    console.log(event.target);
                                    dispatchRow(
                                        {
                                            type: "change-productId",
                                            payload: event.target.value
                                        }
                                    );
                                    // setProductName();
                                    // const changedDetail = createDetail(detail.index, productId, productName, amount);
                                    // updateDetail(changedDetail);
                                }
                            }
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
                    cellValue={rowState.amount}
                    sx={{ml: 2, width: "100px"}}
                    onChange={handleChangeAmount}
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
                        onClick={handleSaveDetail} 
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
                        onClick={handleRemoveDetail} 
                    >
                        <DeleteIcon />
                    </IconButton>
                </DetailCell>
            }
            </TableRow>
    );
}

export default SaleDetailShowPoly;