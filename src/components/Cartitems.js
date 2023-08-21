import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cartitems = () => {
  const goto = useNavigate();
  const [ids, setids] = useState(sessionStorage.getItem("CARTIDS").split(","));
  const [data, setdata] = useState([]);
  const [totalamount, setamount] = useState(0);
  const [productdata, setproductdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setdata(res.data);
        let a = res.data;
        let s = [];
        let tamount = [];
        a.forEach((x, k) => {
          ids.forEach((y) => {
            if (x.id == y) {
              s.push(x);
              tamount.push(x.price);
            }
          });
        });
        let o = tamount.reduce((i, k) => i + k);
        setproductdata(s);
        setamount(o);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const gotocheckout = () => {
    sessionStorage.setItem("TOTALAMOUNT", totalamount);
    goto("/checkout");
  };
  return (
    <div className="homepage">
      <h1
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "2",
          textAlign: "center",
          backgroundColor: "whitesmoke",
        }}
      >
        PRODUCTS IN CART
      </h1>
      <hr />
      {productdata &&
        productdata.map((i, k) => {
          //   if (`${selectedcategory}`.includes(i.category)) {
          return (
            <div className="row">
              <div className="col-1"></div>
              <div className="productscard col-lg-10">
                <div className="car row">
                  <div className="col-lg-3">
                    <img src={i.image} alt="p" width="200px" height="200px" />
                  </div>
                  <div className="card-bod col-lg-4">
                    <div className="titl">{i.title}</div>
                    <div className="d-flex justify-content-start">
                      <div className="">Rating: {i.rating.rate}</div>
                      <div className=""></div>
                      <div className="">Count: {i.rating.count}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="rupeeicon">
                          <span class="material-symbols-outlined">
                            currency_rupee
                          </span>
                        </div>
                        <div className="amount">{i.price}</div>
                      </div>
                      <div>
                        {/* <div className="addbtn mt-3" ><button onClick={()=>addingtocart(i.id)} className="btn  btn-sm btn-outline-primary addbtns">ADD</button></div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-3">
                    <div>
                      <button className="btn btn-outline-primary" type="button">
                        -
                      </button>{" "}
                      1{" "}
                      <button className="btn btn-outline-primary" type="button">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
              <hr />
            </div>
          );
          //   }
        })}
      <div
        style={{
          backgroundColor: "yellow",
          textAlign: "center",
          padding: "20px",
          fontWeight: 700,
          //   cursor: "pointer",
          position: "sticky",
          bottom: "0px",
        }}
      >
        <button className="btn " onClick={gotocheckout}>
          Proceed To checkout{" "}
          <span class="material-symbols-outlined">currency_rupee</span>
          {totalamount}
        </button>
      </div>
    </div>
  );
};

export default Cartitems;
