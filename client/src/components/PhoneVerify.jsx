import React from 'react';
import './PhoneVerifyStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

function SenderMobileIdentityForm() {
    const [inputs, setInputs] = useState({
        phoneVerification: "",
    });
    const [err, setError] = useState(null)
    const navigate = useNavigate()
    
    const handleChange = e =>{
    setInputs(prev=>({ ...prev, [e.target.name]: e.target.value}))
    }
    
    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Axios.post("http://localhost:8800/api/sender/mobile/verify", inputs)
      navigate('/account/Identity/sender')
    } catch(err) {
      setError(`${err.response.data.message}`)
    }
    }
  return (
    <div className="Phone-identity-form-container">
    <form className="identity-form">
      <h2>verify your phone number</h2>
      <p>we have sent you verification code on your mobile number</p>
      {err && <p>{err}</p>}
      <input  placeholder="Enter Your code!" type="text" name='phoneVerification' onChange={handleChange} id="phoneVerification"/>
      <Link onClick={handleSubmit} className="formButton">confirm</Link>
    </form>
    </div>
  );
}



function TravellerMobileIdentityForm() {
    const [inputs, setInputs] = useState({
        phoneVerification: "",
    });
    const [err, setError] = useState(null)
    const navigate = useNavigate()
    
    const handleChange = e =>{
    setInputs(prev=>({ ...prev, [e.target.name]: e.target.value}))
    }
    
    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Axios.post("http://localhost:8800/api/traveller/mobile/verify", inputs)
      navigate('/account/Identity/traveller')
    } catch(err) {
      setError(`${err.response.data.message}`)
    }
    }

    return (
      <div className="Phone-identity-form-container">
      <form className="identity-form">
        <h2>Verify Your Phone Number</h2>
        <p>we have sent you verification code on your mobile number</p>
        {err && <p>{err}</p>}
        <input placeholder="Enter You Code!" type="text" id="phoneVerification" name='phoneVerification' onChange={handleChange} />
        <Link onClick={handleSubmit} className="formButton">confirm</Link>
      </form>
      </div>
    );
}

const MobileIdentity = {
  senderPhone: SenderMobileIdentityForm,
  travellerPhone: TravellerMobileIdentityForm
}
export default MobileIdentity;