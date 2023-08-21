import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";
const Sign = () => {
  const goto=useNavigate()
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [nameerr, setnameerr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [passworderr, setpassworderr] = useState("");
  const [confirmpassworderr, setconfirmpassworderr] = useState("");

  const namechange = (e) => {
    setname(e.target.value);
    namehan2(e.target.value);
  };
  const namehan1 = () => {
    namehan2(name);
  };
  const namehan2 = (name) => {
    if (!name) {
      setnameerr("Name is Required");
    } else if (name.length < 3) {
      setnameerr("Name Should Contain Atleast 3 Characters");
    } else {
      setnameerr("");
    }
  };

  const emailchange = (e) => {
    setemail(e.target.value);
    emailhan2(e.target.value);
  };
  const emailhan1 = () => {
    emailhan2(email);
  };

  const emailhan2 = (email) => {
    if (!email) {
      setemailerr("Email is Required");
    } else if (!email.includes("@")) {
      setemailerr("Enter Valid Email Format");
    } else {
      setemailerr("");
    }
  };
  const passwordchange = (e) => {
    setpassword(e.target.value);
    passwordhand2(e.target.value);
  };
  const passwordhand1 = () => {
    passwordhand2(password);
  };
  const passwordhand2 = (password) => {
    if (!password) {
      setpassworderr("Password is Required");
    } else if (password.length < 6) {
      setpassworderr("Password Must Be Atleast 6 Characters Minimum");
    } else {
      setpassworderr("");
    }
  };
  const cpchange = (e) => {
    setconfirmpassword(e.target.value);
    cphan2(e.target.value);
  };
  const cphan1 = (e) => {
    cphan2(confirmpassword);
  };
  const cphan2 = (confirmpassword) => {
    if (!confirmpassword.length > 0) {
      setconfirmpassworderr("Password is required");
    } else if (password !== confirmpassword) {
      setconfirmpassworderr("Password Does Not Match");
    } else {
      setconfirmpassworderr("Password Matched");
    }
    // } else {
    //   setpassworderr("First Fill Password To Proceed Further");
    // }
  };
  const submithan = (e) => {
    console.log({ Name: name, Email: email, Password: password });
    sessionStorage.setItem("SIGNEMAIL",[{ Name: name, Email: email, Password: password }])
    namehan1(name);
    emailhan2(email);
    passwordhand2(password);
    cphan2(confirmpassword);
  };
  const gotologin=()=>{
    goto("/login")
  }
  return (
    <>
      <div className="sign">
        <div className="row">
          <div className="col-lg-12" style={{ width: "500px" }}>
            <div className="card">
              <div className="signup">
                <div className="row">
                  <div className="col-1">
                    <Link to="/">
                      <span
                        style={{ cursor: "pointer", color: "black" }}
                        class="material-symbols-outlined"
                      >
                        arrow_back
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-11">
                  <h1 style={{ marginBottom: "30px" }}>Sign Up</h1>
                </div>
                <div className="form">
                  <div>
                    <div className="form-group mb-4">
                      <label style={{ marginRight: "350px" }}>Name</label>
                      <input
                        type="text"
                        required
                        onChange={namechange}
                        onBlur={namehan1}
                        placeholder="Enter Name"
                        className="form-control"
                      />
                      <span
                        className="name"
                        style={{ position: "absolute", left: "30px" }}
                      >
                        {nameerr}
                      </span>
                    </div>

                    <div className="">
                      <div className="form-group mb-4">
                        <label style={{ marginRight: "350px" }}>Email</label>
                        <input
                          type="email"
                          onChange={emailchange}
                          onBlur={emailhan1}
                          required
                          placeholder="Enter Email"
                          className="form-control"
                        />
                        <span
                          className="email"
                          style={{ position: "absolute", left: "30px" }}
                        >
                          {emailerr}
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="form-group mb-4">
                        <label style={{ marginRight: "350px" }}>Password</label>
                        <input
                          type="password"
                          onChange={passwordchange}
                          onBlur={passwordhand1}
                          required
                          placeholder="Enter Password"
                          className="form-control"
                        />
                        <span
                          className="password"
                          style={{ position: "absolute", left: "30px" }}
                        >
                          {passworderr}
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="form-group mb-4">
                        <label style={{ marginRight: "280px" }}>
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          onChange={cpchange}
                          onBlur={cphan1}
                          required
                          placeholder="Enter Confirm Password"
                          className="form-control"
                        />
                        <span
                          className="cp"
                          style={{ position: "absolute", left: "30px" }}
                        >
                          {confirmpassworderr}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        onClick={submithan}
                        className="btn btn-primary m-4"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div>
          <p>Already have an account <Link to="/login">Login</Link></p>
        </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </>
  );
};
export default Sign;
