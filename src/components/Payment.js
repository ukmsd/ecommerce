import React from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    const goto=useNavigate();
    const confirm=()=>{
        goto("/confirm")
    }
  return (
    <div>
      <div>
        <div className='' style={{backgroundColor: "whitesmoke",
            textAlign: "center",
            padding: "20px",}}> Payment method</div>
        <div className='card d-flex' style={{padding:"10px"}}>
<div>
<input type='radio' value="COD" name='paymenttype'/> 
    </div>  
    <div>
        <h5>Cash on Delivery(Cash/ Card,UPI)</h5>
        <p>Cash,UPI accepted</p>
        </div>      

        </div>
        <div className='' style={{backgroundColor:"yellow", textAlign: "center",
            padding: "10px"}}><button className='btn' type='button' onClick={confirm}>Continue</button></div>
      </div>
    </div>
  )
}

export default Payment
