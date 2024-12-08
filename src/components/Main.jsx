import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate(); 

  const handleExplore = () => {
    navigate('/shop'); 
  };

  return (
    <div className="main">
      <div className="content">
        <h1 className="heading-main">WELLNESS STARTS <br />HERE</h1>
        <p className="text-main">Providing medicines at your doorstep</p>
        <button className="button-main" onClick={handleExplore}>
          Explore
        </button>
      </div>
    </div>
  );
}

export default Main;
