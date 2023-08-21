import React from "react";
import "./styling.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cartitems from "./components/Cartitems";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orderconfm from "./components/Orderconfm";
import Myorders from "./components/Myorders";
import Sign from "./components/Sign";
import Login from "./components/Login";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/cartitems" element={<Cartitems/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/confirm" element={<Orderconfm/>} /> 
            <Route path="/myorders" element={<Myorders/>} /> 
            <Route path="/signin" element={<Sign/>} /> 
            <Route path="/login" element={<Login/>} /> 





          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
