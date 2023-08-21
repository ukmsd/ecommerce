import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Orderconfm = () => {
    const goto=useNavigate()
  const [ordersplaced, setorderplaced] = useState([]);
  const [tamount, setamount] = useState(0);
  const [orderamount, setorderamount] = useState(
    sessionStorage.getItem("TOTALAMOUNT")
  );
  const [gst, setgst] = useState("25.00");

  const placeorder = () => {
    toast.success("order placed successfully");
    setTimeout(()=>{
goto("/")
    },5000)
  };
  useEffect(() => {
    let s = `${sessionStorage.getItem("TOTALAMOUNT")}`;
    let g = +s + +gst;
    setamount(g);
  }, []);
  return (
    <div>
      <div>
        <div
          className=""
          style={{
            backgroundColor: "whitesmoke",
            textAlign: "center",
            padding: "20px",
          }}
        >
          {" "}
          Payment method ( COD )
        </div>
        <div className="row" style={{ padding: "20px" }}>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="card" style={{ padding: "20px" }}>
              <div className="">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                    <div><h5>Items</h5></div>
                  <div className="mt-1">
                    <span class="iconru material-symbols-outlined">
                      currency_rupee
                    </span>
                    
                  </div>
                    </div>
                  
                  <div> {orderamount}</div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                    <div className="d-flex">
                    <div><h5>Delivery</h5></div>
                  <div className="mt-1">
                    <span class="iconru material-symbols-outlined">
                      currency_rupee
                    </span>
                    
                  </div>
                    </div>
                  
                  <div> 0.00</div>
                </div>
              <div className="d-flex justify-content-between">
              <div className="d-flex">

                    <div>
                    <h5>GST</h5>
                    </div>
                    <div className="mt-1">
                    <span class="iconru material-symbols-outlined">
                            currency_rupee
                          </span>
                    </div>
                    </div>
                    <div>
                     {gst}
                    </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <div>
                    <h5>Total amount</h5>
                    </div>
                    <div className="mt-1">
                    <span class="iconru material-symbols-outlined">
                            currency_rupee
                          </span>
                    </div>
                    </div>
                    <div>
                    {tamount}
                    </div>
                </div>
             
             
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>

        <div
          className=""
          style={{
            backgroundColor: "yellow",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <button className="btn" type="button" onClick={placeorder}>
            place order
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Orderconfm;
