import React, { useEffect } from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const goto = useNavigate();
  const navref = useRef();

  const shownavbar = () => {
    navref.current.classList.toggle("responsive_nav");
  };
  useEffect(() => {
    sessionStorage.getItem("CARTIDS");
  });
  const gotocart = () => {
    goto("/cartitems");
  };
  const myorders = () => {
    goto("/myorders");
  };
  const gotosign=()=>{
    goto("/signin")
  }
 
  return (
    <>
      <div className="navbarpage">
        <header>
          <nav ref={navref}>
            <div className="justify-content-start" >
              CLASSIC COLLECTIONS
            <div className="d-flex justify-content-end " style={{marginTop:"-20px"}}>
              <div className="a" style={{display:"inline-block",textAlign:"center"}}>
                <div style={{}}>
                <span class="material-symbols-outlined">person</span>
                </div>
                <div onClick={gotosign}>
                <a href="#">SignIn</a>
                </div>
              </div>
              <div className="a" style={{display:"inline-block",textAlign:"center"}} onClick={gotocart}>
                <div>

                <div className="d-flex textAlign-center" style={{marginLeft:"29px"}}>
                <span class="material-symbols-outlined" >
                  shopping_cart
                </span>
                <div style={{position:"relative",top:"0px",left:"0px"}}>
                {sessionStorage.getItem("CARTIDS")
                    ? -sessionStorage.getItem("CARTIDS").split(",").length
                    : ""}{" "}
                </div>
                </div>
                </div>

                <div>
                   <a href="#">
                  Cart
                  
                </a>
                
                </div>
               
              </div>
              <div className="a">
                <a href="#" onClick={myorders}>
                  My Orders
                </a>
              </div>
              <div className="a">
                <a href="#">History</a>
              </div>
            </div>

            </div>
          </nav>
          {/* <button className="nav-btn" onClick={shownavbar}>
            <div>
              <span class="material-symbols-outlined">close</span>
            </div>
          </button> */}
        </header>
      </div>
    </>
  );
};
export default Navbar;
