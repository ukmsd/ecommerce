import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const goto=useNavigate();
  const [address, setadress] = useState([]);
  const [form, setform] = useState(false);
  const openform = () => {
    setform(true);
  };
  const [fullname, setfullname] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [houseno, sethouseno] = useState("");
  const [area, setarea] = useState("");
  const [landmark, setlandmark] = useState("");
  const [pincode, setpincode] = useState("");
  const [town, settown] = useState("");
  const [state, setstae] = useState("");
  const [addressindex, setaddressindex] = useState(0);

  const fullnamechange = (e) => {
    setfullname(e.target.value);
  };
  const mobilechange = (e) => {
    setmobilenumber(e.target.value);
  };
  const flatchange = (e) => {
    sethouseno(e.target.value);
  };
  const areachange = (e) => {
    setarea(e.target.value);
  };
  const landmarkchange = (e) => {
    setlandmark(e.target.value);
  };
  const pincodechange = (e) => {
    setpincode(e.target.value);
  };
  const townchange = (e) => {
    settown(e.target.value);
  };
  const statechange = (e) => {
    setstae(e.target.value);
  };

  const formsubmitted = (e) => {
    e.preventDefault();
    let a = {
      FULLNAME: fullname,
      MOBILENO: mobilenumber,
      HOUSENO: houseno,
      AREA: area,
      LANDMARK: landmark,
      PINCODE: pincode,
      TOWN: town,
      STATE: state,
    };
    let b = [...address, a];
    sessionStorage.setItem("ADDRESS", b);
    setadress(b);
    setform(false);
    console.log(b);
  };
  //   useEffect(()=>{
  //    if(sessionStorage.getItem("ADDRESS")){
  //     console.log(`${sessionStorage.getItem("ADDRESS")}`)
  //     setadress([`${sessionStorage.getItem("ADDRESS")}`])
  //    }
  //   },[])
  //   alert(addressindex)
  const clicked = () => {
goto("/payment")
    // alert(addressindex);
  };
  return (
    <>
      <div>
        <h1
          style={{
            backgroundColor: "whitesmoke",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Select a delivery address
        </h1>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="row">
              {address &&
                address.map((i, k) => {
                  return (
                    <>
                      <div className=" col-lg-6 ">
                        <div className="d-flex">

                        <div className="m-3">
                          <input
                            type="radio"
                            name="adress"
                            value={k}
                            onChange={(e) => setaddressindex(e.target.value)}
                          />
                        </div>
                        <div>
                          <div>{i.FULLNAME}</div>
                          <div>
                            {i.HOUSENO},{i.AREA}
                          </div>
                          <div>{i.LANDMARK}</div>
                          <div>
                            {i.TOWN},{i.STATE}
                          </div>
                          <div>{i.PINCODE}</div>
                          <div>phone no: {i.MOBILENO}</div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                        {k == addressindex ? (
  <button
    className="btn btn-warning"
    type="button"
    onClick={clicked}
  >
    Deliver to this address
  </button>
) : (
  ""
)}
                        </div>


</div>

                      </div>
                      
                    </>
                  );
                })}
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div style={{ textAlign: "center" }}>
          <hr />
          <button className="btn" onClick={openform}>
            <h4>Add a new address</h4>{" "}
          </button>
          <hr />
        </div>
      </div>
      {form && (
        <div className="formmodel">
          <div className="card">
            <form onSubmit={formsubmitted}>
              <div className="form-group">
                <label>Full name(First and Last name)</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  onChange={fullnamechange}
                />
              </div>
              <div className="form-group">
                <label>Mobile number</label>
                <input
                  className="form-control"
                  required
                  type="tel-number"
                  onChange={mobilechange}
                />
              </div>
              <div className="form-group">
                <label>Flat,House no,Building,Comapny,Apartment</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  onChange={flatchange}
                />
              </div>
              <div className="form-group">
                <label>Area,Street,Sector,Village</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  onChange={areachange}
                />
              </div>
              <div className="form-group">
                <label>Landmrk</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  onChange={landmarkchange}
                />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  className="form-control"
                  required
                  type="number"
                  onChange={pincodechange}
                />
              </div>
              <div className="form-group">
                <label>Town/City</label>
                <input
                  className="form-control"
                  required
                  type="text"
                  onChange={townchange}
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <select className="form-control" onChange={statechange}>
                  <option selected disabled>
                    {" "}
                    Selcet state
                  </option>
                  <option value="telangana">Telangana</option>
                  <option value="andhrapradesh">Andhra Pradesh</option>
                </select>
              </div>
              <div className="form-group mt-2">
                <button className=" form-control btn btn-warning" type="submit">
                  Add this delivery address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
