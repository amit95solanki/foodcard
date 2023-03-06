
import './App.css';
import Nav from './Component/Header/Nav';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Cart from './Component/Cart/Cart';
import ThankYouCart from './Component/Cart/ThankYouCart';
function App() {
  return (
  <>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/thankyoucart" element={<ThankYouCart/>}/>
    

  </Routes>
  </>
  );
}

export default App;
