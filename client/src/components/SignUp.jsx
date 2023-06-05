
import React from 'react';
import './SignUpStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';


function SignupSenderForm() {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
});
const [err, setError] = useState(null)
const navigate = useNavigate()

const handleChange = e =>{
setInputs(prev=>({ ...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async (e) => {
e.preventDefault()
try {
  await Axios.post("http://localhost:8800/api/sender/register", inputs)
  navigate('/account/Identity/sender')
} catch(err) {
    setError(`${err.response.data.message}`)
}
}

  return (
    <>
    <div className="signup-form-container-sender">
    <div className="signup-form-info">
      <h2>Sign up is FREE. Delivery is easy!</h2>
      <ul>
        <li>Save time by creating deliveries</li>
        <li>SEND YOUR ITEMS SWIFTLY AND SAFELY.</li>
        <li>Track your package.</li>
        <li>Join for FREE with zero obligation</li>
      </ul>
    </div>
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Create Sender Account!<br></br>Post deliveries in minutes.</h2>
      {err && <p className='err'>{err}</p>}
      <input placeholder="Full Name" type="text" id="fullName" name="fullName" onChange={handleChange}/>
      <input placeholder="E-mail" type="email" id="email" name="email" onChange={handleChange} />
      <input placeholder="+2519********" type="text" id="phoneNumber" name="phoneNumber" onChange={handleChange}/>
      <input placeholder="password" type="password" id="password" name="password" onChange={handleChange}/>
      <button type="submit">Create Account</button>
      <Link to="/account/Identity/sender" className="link-button">I already have an account.</Link>
    </form>
    </div>
    </>
  );
}


function SignupTravellerForm() {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
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
  await Axios.post("http://localhost:8800/api/traveller/register", inputs)
  navigate('/account/Identity/traveller')
} catch(err) {
  setError(`${err.response.data.message}`)
}
}
  return (
    <div className="signup-form-container-traveller">
    <form onSubmit={handleSubmitt} className="signup-form">
      <h2>Create Traveller Account!<br></br>Make money on the way.</h2>
      {err && <p className='err'>{err}</p>}
      <input placeholder="Full Name" type="text" id="fullName" name="fullName" onChange={handleChange} />
      <input placeholder="E-mail" type="email" id="email" name="email" onChange={handleChange} />
      <input placeholder="+2519********" type="text" id="phoneNumber" name="phoneNumber" onChange={handleChange}/>
      <input placeholder="password" type="password" id="password" name="password" onChange={handleChange} />
      <button type="submit">Create Account</button>
      <Link to="/account/Identity/traveller" className="link-button">I already have an account.</Link>
    </form>
    </div>
  );
}

const signUp = {
  sender: SignupSenderForm,
  traveller: SignupTravellerForm
};
export default signUp;