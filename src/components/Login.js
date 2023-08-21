import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import validator from "validator";
const Login = () => {
    const goto=useNavigate()
  const [signindata, setsignindata] = useState([{ email: "abc@gmail.com" }])
  const [emailval, setemailval] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [passwordval, setpasswordval] = useState("");
  const [passworderr, setpassworderr] = useState("");
  const emailhan = (e) => {
    if (e.target.name == "email") {
      setemailval(e.target.value) 
      if (e.target.value == "") {
        setemailerr("email is required");
      }
      else if (e.target.value.length > 0) {
        setemailerr("")
      }
    }
  }
  const emailcheck = (e) => {
    // if(e.target.name=="email"){
    setemailval(e.target.value)
    if (emailval == signindata[0].email) {
      alert("success")
    }
    // }
  }
  // const passwordvalidation=(passwordval)=>{

  // }
  // const paswordblur=()=>{
  //   passwordvalidation(passwordval)
  // }
  const passwordhand = (e) => {
    setpasswordval(e.target.value)
    if (e.target.value == "") {
      setpassworderr("password is required")
    }
    else if (e.target.value.length > 0) {
      // var password = e.target.value
      if ((e.target.value)) {
        setpassworderr("")
      }
      else {
        setpassworderr("password must contain atleast one capital ,one small,one special symbol two numeric ")
      }
    }
  }
  const submithandle = (e) => {
    e.preventDefault();
    // passwordvalidation(passwordval)
  }
  const gotohome=()=>{
    goto("/")
  }
  return (
    <>
      <div className="sign">
        <div className="row">
          <div className="col-lg-12" style={{ width: "500px" }}>
            <div className="card">
              <div className="signup">
                <div className="row">
                  <div className="col-1" onClick={gotohome}>
                    <span
                      style={{ cursor: "pointer" }}
                      class="material-symbols-outlined"
                    >
                      arrow_back
                    </span>
                  </div>
                </div>
                <div className="col-11">
                  <h1 style={{ marginBottom: "30px" }}>Login</h1>
                </div>
                <div className="form">
                  {/* {passwordval} */}
                  <form onSubmit={submithandle}>
                    {/* <button type='button' onClick={emailcheck}>Click me</button> */}
                    <div className="">
                      <div className="form-group mb-3">
                        <label style={{ marginRight: "350px" }}>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={emailval}
                          onChange={emailhan}
                          // required
                          placeholder="Enter Email"
                          className="form-control"
                        />
                        <span style={{ color: "red", position: "absolute", left: "30px" }}>{emailerr}</span>
                        <span className="email">
                          {/* {emailerr} */}
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="form-group mb-3">
                        <label style={{ marginRight: "350px" }}>
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={passwordhand}
                          // required
                          // onBlur={paswordblur}
                          placeholder="Enter Password"
                          className="form-control"
                        />
                        <span className="password">
                          {/* {passworderr} */}
                        </span>
                      </div>
                      <span style={{ color: "red", position: "absolute", left: "30px" }}>{passworderr}</span>
                    </div>
                    {/* <button type='button' onClick={clicked}>click</button> */}
                    <div>
                      <button
                        onClick={emailcheck}
                        className="btn btn-primary m-4"
                        type='submit'
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div>
          <p> I dont have an account <Link to="/signin">SignIn</Link></p>
        </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
export default Login


















































