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

function DetailCell ({children, ...rest}) {
    return (
        <TableCell align="center" {...rest} >
            {children}
        </TableCell>
    );
}

export default DetailCell;