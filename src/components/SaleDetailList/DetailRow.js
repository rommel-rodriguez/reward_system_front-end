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

function DetailRow ({children, ...rest}) {
    return (
        <TableRow {...rest} align="right">
            {children}
        </TableRow>
    );
}

export default DetailRow;