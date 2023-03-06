import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo  from "../../assets/logo.svg";
import {  useSelector } from 'react-redux';
import CartDialog from '../Cart/CartDialog';
import { useState,useContext } from 'react';
import { DataContext } from '../../Context/contextAPI';

const Nav = ({children}) => {
    const  item = useSelector((state)=>state.cart)
    
    const [open,setOpen]= useState(false);

    const openDialog =()=>{
        setOpen(true)
    }
    const { data, setData } = useContext(DataContext);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       sx={{ backgroundColor:"#2734ab"}}
    >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="childrenmenu"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="logo" style={{backgroundColor:"#2734ab"}} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food's Restaurent
          </Typography>
          {
            data ? <Typography onClick={()=>openDialog()}>cart-item: {item.length}</Typography>
            : children
          }
          
        </Toolbar>
        
      </AppBar>
      <CartDialog open={open} setOpen={setOpen}/>
    </Box>
    </>
  )
}

export default Nav
