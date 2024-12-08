import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';  
import Shop from './components/Shop';  
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/shop" element={<Shop />} /> 
        <Route path ="/cart" element ={<Cart/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
