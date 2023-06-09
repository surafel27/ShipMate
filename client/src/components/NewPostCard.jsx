import React, { useEffect, useState } from 'react';
import "./NewPostCardStyle.css";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import Post from './Post';

const NewPostCard = ({ isOpen, togglePopup }) => {
  const reloadPg = Post.reloadPg
  const [inputs, setInputs] = useState({
    packageFrom: "",
    packageTo: "",
    packageDesc: "",
    packageWeight: "",
    packageCat: "",
    packagePrice: "",
    packageDeliveryDate: "",
});
const navigate = useNavigate();
const [showAlert, setShowAlert] = useState(false);
const [isLoading, setIsLoading] = useState(false);


const handleChange = e =>{
setInputs(prev=>({ ...prev, [e.target.name]: e.target.value}))
}

const handleSubmitt = async (e) => {
e.preventDefault()
try {
  await Axios.post("http://localhost:8800/api/package/addPackage", inputs, {
    withCredentials: true,});
    setShowAlert(true);
    togglePopup(!isOpen)
  navigate('/user/account/sender/dashboard');
  reloadPg();
} catch(err) {
  console.log(err);
}
}
useEffect (() => {
  let timeout;
  if (showAlert) {
    timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }
  return () => clearTimeout(timeout);
}, [showAlert]);
    return(
      <>
      {isOpen && (
      <div className="container-post">  
    <div className="package-request">
    <form onSubmit={handleSubmitt}  className="request-form">
    {showAlert && (
        <div className="alert">
          <p>Posted successfully!</p>
        </div>
      )}
      <input placeholder="Package From" type="text" id="packageFrom" name="packageFrom" onChange={handleChange} />
      <input placeholder="Package To" type="text" id="packageTo" name="packageTo" onChange={handleChange} />
      <input placeholder="Package wight" type="number" id="packageWeight" name="packageWeight" onChange={handleChange} />
      <select name="packageCat" onChange={handleChange}>
        <option value="">Select an option</option>
        <option name="food" value="food">Food</option>
        <option name="post" value="post">Post</option>
        <option name="cloth" value="cloth">Cloth</option>
        <option name="electronics" value="electronics">Electronics</option>
        <option name="animal" value="animal">Animal</option>
        <option name="other" value="other">Other</option>
      </select>
      <input placeholder="Price for delivery" type="number" id="packagePrice" name="packagePrice" onChange={handleChange} />
      <input placeholder="Date of Delivery" type="date" id="packageDeliveryDate" name="packageDeliveryDate" onChange={handleChange} />
      <textarea placeholder="Please tell us the detail about the package and the last destination." type="text" id="packageDesc" name="packageDesc" onChange={handleChange}/>
      <div className='btn-collection'>
      <button className='close' onClick={togglePopup}>Cancel</button>
      <button type="submit">Post</button>
      </div>
    </form>
    </div>
        </div>
    )}
    
        </>
    )
} 
export default NewPostCard;