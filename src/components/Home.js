import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { data } from "./Data";

const Home = () => {
  const [productdata, setproductdata] = useState([]);
  const [category, setcategory] = useState([]);
  const [selectedcategory, setselectedcategory] = useState([
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ]);                         
  const [addedtocartids, setaddedtocartids] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => {
        // let d = res.data;
        let d=data
        d.forEach((x) => {
          x.count = 0;
        });
        setproductdata(d);
        let f = data;
        let a = [];
        f.forEach((x) => {
          a.push(x.category);
        });
        let data2 = [...new Set(a)];
        setcategory(data2);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
  }, []);
  const categoryselection = (k) => {
    let a = [...category];
    setselectedcategory([a[k]]);
  };
  const dispalyall = () => {
    setselectedcategory([
      "men's clothing",
      "jewelery",
      "electronics",
      "women's clothing",
    ]);
  };
  const addingtocart = (k) => {
    // let a=[...productdata]
    // alert(k)
    let a = [...addedtocartids];
    a.push(k);
    setaddedtocartids(a);
    sessionStorage.setItem("CARTIDS", a);
    sessionStorage.setItem("CARTITEMS",JSON.stringify(productdata))
  };

  
  const dec = (l) => {
    let a = productdata[l].count - 1;
    setproductdata([...productdata, (productdata[l].count = a)]);
    let b=productdata[l].id
    addingtocart(b)
  };
  const inc = (l) => {
    let a = productdata[l].count + 1;
    setproductdata([...productdata, (productdata[l].count = a)]);
    
    let b=productdata[l].id
    addingtocart(b)
  };
  const clickedfirst = (l) => {
    let a = productdata[l].count + 1;
    setproductdata([...productdata, (productdata[l].count = a)]);

    let b=productdata[l].id
    addingtocart(b)
  };

  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="row">
          <div className="col-lg-3">
            <div className="category">
              <div className="category-title">Category</div>

              {category &&
                category.map((i, k) => {
                  return (
                    <div key={k}>
                      <div
                        className="category-item"
                        onClick={() => categoryselection(k)}
                      >
                        {i}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-lg-9">
            <div className="category">
              <div className="products-title">Products</div>
              <div className="subtitle">
                <div className="sublist">
                  <div className="subtitle-item" onClick={dispalyall}>
                    All
                  </div>
                  {selectedcategory.length > 0 &&
                    selectedcategory.length !== 4 && (
                      <div className="subtitle-item sub">
                        {" "}
                        {selectedcategory}
                      </div>
                    )}
                </div>
              </div>
              <div className="products">
                <div className="row">
                  {productdata &&
                    productdata.map((i, k) => {
                      if (`${selectedcategory}`.includes(i.category)) {
                        return (
                          <div className="productscard col-lg-3">
                            <div className="card">
                              <img
                                src={i.image}
                                alt="p"
                                width="200px"
                                height="250px"
                              />
                              <div className="card-body">
                                <div className="title">{i.title}</div>
                                <div className="d-flex justify-content-between">
                                  <div className="">
                                    Rating: {i.rating.rate}
                                  </div>
                                  <div className=""></div>
                                  <div className="">
                                    Count: {i.rating.count}
                                  </div>
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
                                    {/* <div className="addbtn mt-3">
                                      <button
                                        onClick={() => addingtocart(i.id)}
                                        className="btn  btn-sm btn-outline-primary addbtns"
                                      >
                                        ADD{i.count}
                                      </button>
                                    </div> */}
                                    <div
                                      style={{ padding: "20px" }}
                                    >
                                      {i.count === 0 ? (
                                        <>
                                          <button className="btn  btn-sm btn-outline-primary "
                                            onClick={() => clickedfirst(k)}
                                          >
                                            ADD
                                          </button>
                                        </>
                                      ) : (
                                        <>
                                          <button className="btn  btn-sm btn-outline-primary " onClick={() => dec(k)}>
                                            {" "}
                                            -{" "}
                                          </button>
                                          {i.count}
                                          <button className="btn  btn-sm btn-outline-primary " onClick={() => inc(k)}>
                                            {" "}
                                            +{" "}
                                          </button>
                                        </>
                                      )}{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
