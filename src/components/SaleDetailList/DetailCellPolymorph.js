import React from "react";
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

function DetailCellPolymorph ({
    required=false,
    cellValue=null,
    edit=false,
    inputType=null,
    handleOnChange=null,
    inputComponent=null,
    ...rest
}) {
    
    let content = null;
    let altForm =
        <TextField
            required={required}
            value={cellValue}
            onChange={handleOnChange}
        />;

    if (cellValue === null){
        throw new Error();
    }

    content = cellValue;

    if (inputType !== null) {
        altForm =
            <TextField
                required={required}
                type={inputType}
                value={cellValue}
                onChange={handleOnChange}
            />;
    }

    if (inputComponent !== null) {
        altForm = inputComponent;
    }

    content = edit ? altForm: cellValue;

    return (
        <TableCell align="center" {...rest} >
            {content}
        </TableCell>
    );
}

export default DetailCellPolymorph;