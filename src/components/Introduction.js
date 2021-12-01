import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, id) {
    return { name, id };
}
const rows = [
    createData('Trần Huỷnh Tường Huy', 4501104096),
    createData('Huỳnh Thiên Phú', 4501104177),
    createData('Võ Anh Kha', 4501104103),
    createData('Trần Việt Thành', 4501104215),
];


const Introduction = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{color:'rgba(86, 141, 229, 1)'}}>Nhóm HKP</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><h1>Họ tên</h1></TableCell>
                            <TableCell align="center"><h1>Mã số sinh viên</h1></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.id}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}
export default Introduction;