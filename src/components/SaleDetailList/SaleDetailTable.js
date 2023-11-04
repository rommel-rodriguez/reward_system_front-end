import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SaleDetailShowPoly from './SaleDetailShowPoly';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


function SaleDetailTable({details}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell >Cod. Product</TableCell>
            <TableCell >Nombre&nbsp;</TableCell>
            <TableCell >Cantidad&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            details.map((detail, index) => (
              <SaleDetailShowPoly
                detail={{...detail, index:(index+1)}}
                key={detail.productId}
              />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SaleDetailTable;