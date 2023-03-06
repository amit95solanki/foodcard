import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider, Typography } from '@mui/material';

const ThankYouCart = () => {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' }} >
            <Box>
            <Typography variant="h5"  component="div" sx={{textAlign:"center",marginTop:"40px"}} >Checkout</Typography>
            </Box>
            <Box>
            <Typography variant="h6"  component="div" sx={{textAlign:"center",marginTop:"40px"}} >Thank you for your order</Typography>
            </Box>
            <Divider sx={{marginTop:"20px"}}/>
        </Box>
      </Container>
    </>
  )
}

export default ThankYouCart
