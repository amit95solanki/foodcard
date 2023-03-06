import { Dialog,Box, Typography,Stack, Button } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Coke', 1, ),
  createData('Fries', 2),
 
];



const CartDialog = ({open , setOpen}) => {

  const handleClose =()=>{
    setOpen(false)
  }
  return (
    <Dialog open={open} onClose={handleClose }>
        <Box sx={{width:"400px",height:"300px"}}>
             <Typography variant='h6' sx={{margin:"20px"}}>
              Order Summary
             </Typography>
           
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
    
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right"><Button variant="contained" >+</Button></TableCell>
              <TableCell align="right"><Button variant="contained" sx={{ backgroundColor:"#e01238"}} >-</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Typography variant='subtitle1' >Price(INR):200</Typography>
       <Stack direction="row" spacing={2} >
       <Box sx={{marginLeft:"100px",marginTop:"20px"}}>
        <Button variant="contained" sx={{marginRight:"15px"}} component={Link} to={"/thankyoucart"} onClick={()=>handleClose()} >save and checkout</Button>
       <Button variant="contained" sx={{ backgroundColor:"#e01238"}} >cancel</Button></Box>
       </Stack>

        </Box>
    </Dialog>
  )
}

export default CartDialog;
