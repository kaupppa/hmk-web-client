import * as React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import get from '../service/palvelu';
import MyCard from "./MyCard"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    fontWeight: 600,
    margin: "16px",
    border: 0
  },
  [`&.${tableCellClasses.body}`]: {
    margin: "16px",
    border: 0
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover
  }
}));

export default function Hinnat() {
  const hinnat = get()
  return (
    <MyCard >
      <CardContent>
        <Box sx={{
          marginBottom: "16px"
        }}>
          <Typography variant="h1">
            Hinnasto
          </Typography>
        </Box>
        <Table aria-label="Hinnasto">
          <TableHead>
            <TableRow>
              <StyledTableCell>Palvelu</StyledTableCell>
              <StyledTableCell align="right">Kesto</StyledTableCell>
              <StyledTableCell align="right">hinta</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hinnat.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{row.nimi}</StyledTableCell>
                <StyledTableCell align="right">{row.kesto} min</StyledTableCell>
                <StyledTableCell align="right">{row.hinta}€</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </MyCard>
  );
}
