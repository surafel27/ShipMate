import React from 'react';
import './IdentityStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

function SenderIdentityForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
});
const [err, setError] = useState(null)
const navigate = useNavigate()

const handleChange = e =>{
setInputs(prev=>({ ...prev, [e.target.name]: e.target.value}))
}

const handleSubmitt = async (e) => {
e.preventDefault()
try {
  await Axios.post("http://localhost:8800/api/traveller/login", inputs)
  navigate('/user/account/sender/dashboard')
} catch(err) {
    setError(err.response.data)
}
}
  return (
    <div className="identity-form-container">
    <form className="identity-form">
      <h2>Sender Sign In</h2>
      <p>Welcome to Shipmate! Sign in with your email and password below.</p>
      {err && <p>{err}</p>}
      <input placeholder="Email Adress" type="email" id="email" name="email" onChange={handleChange} />
      <input placeholder="Password" type="password" id="password" name="password" onChange={handleChange} />
      <Link onClick={handleSubmitt} className="formButton">Sign In</Link>
      <p>New To Shipmate?<Link to="/account/sender/signupSender" className='crt-link'>Create An Account!</Link></p>
    </form>
    </div>
  );
}
function TravellerIdentityForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
});
const [err, setError] = useState(null)
const navigate = useNavigate()

const handleChange = e =>{
setInputs(prev=>({ ...prev, [e.target.name]: e.target.value}))
}

const handleSubmitt = async (e) => {
e.preventDefault()
try {
  await Axios.post("http://localhost:8800/api/sender/login", inputs)
  navigate('/user/account/traveller/dashboard')
} catch(err) {
    setError(err.response.data)
}
}
  return (
    <div className="identity-form-container">
    <form className="identity-form">
      <h2>Traveller Sign In</h2>
      <p>Welcome to Shipmate! Sign in with your email and password below.</p>
      {err && <p>{err}</p>}
      <input placeholder="Email Adress" type="email" id="email" name="email" onChange={handleChange} />
      <input placeholder="Password" type="password" id="password" name="password" onChange={handleChange} />
      <Link onClick={handleSubmitt} className="formButton">Sign In</Link>
     <p>New To Shipmate?<Link to="/account/traveller/signupTraveller" className='crt-link'>Create An Account!</Link></p>
    </form>
    </div>
  );
}

const IdentityForm = {
  sender: SenderIdentityForm,
  traveller: TravellerIdentityForm
}
export default IdentityForm;