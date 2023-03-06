import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//////////////////////////////////////====card 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
//////////////////////////////////////===== Card Data
import { CartData } from '../Database/CartData';
/////////////////////////////======redux-toolkit
import {add} from "../../store/cartSlice"
import {remove} from "../../store/cartSlice"
import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {
    const [data,setData] = useState(CartData);
    console.log(data)

    const dispatch = useDispatch()
    const handleAdd = (product) => {
        dispatch(add(product));
    };

    const handleRemove = (product) => {
        dispatch(remove(product));
    };

  const  item = useSelector((state)=>state.cart)
 console.log(item)
  return (
    <>
     <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop:"50px"}}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        {
            data.map((product)=>{
                return <div key={product.id}>
                     
        <Card sx={{ maxWidth: 500 ,maxHeight:500, marginLeft:"20px"} }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            name: {product.name}
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
            Price:{product.price}
          </Typography>

          <Stack spacing={2} direction="row">
          <Button variant="contained" sx={{fontSize:"25px"}} onClick={() => handleAdd(product)} >+</Button>
          <Button variant="text" sx={{fontSize:"25px" , backgroundColor:"#d9dade"}}   onClick={() => handleRemove(product.id)}>-</Button>
          </Stack>

        </CardContent>
      </CardActionArea>
    </Card>
        
                </div>
            })
        }
        
        
      </Grid>
         
         

    </Box>
       
      </Container>
      
    </>
  )
}

export default Cart


