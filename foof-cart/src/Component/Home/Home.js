import { Box ,Typography,styled} from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../Context/contextAPI';

const cartBtn = styled(Button)`

`
const Home = () => {
  const { data, setData } = useContext(DataContext);

  return (
    <>
     <Box sx={{display:"flex", justifyContent:"center",marginTop:"10%"}}>
         <Stack spacing={2} direction="column">
         <Typography variant='h2' sx={{fontFamily:"sans-serif"}}>Welcome to Food's 
         Kitchen</Typography>
        <Button variant="contained"  sx={{width:"150px" , backgroundColor:"#2734ab" , marginLeft:"250px"}}  component={Link} to={"/cart"} onClick={()=>setData(true)} >
            GO TO MENU</Button>

           

         </Stack>
         </Box>
    
    </>
  )
}

export default Home
