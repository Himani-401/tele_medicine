import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';  
import Shop from './components/Shop';  
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import { Elements } from "@stripe/react-stripe-js"; 

import { stripePromise } from './components/Checkout';

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </Elements>
  );
}

export default App;
