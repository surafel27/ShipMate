import React, { useState } from 'react';
import "./NewPostCardStyle.css";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

const NewPostCard = ({ isOpen, togglePopup }) => {
  const [inputs, setInputs] = useState({
    packageFrom: "",
    packageTo: "",
    packageDesc: "",
    packageWight: "",
    packageCat: "",
    packagePrice: "",
    packageDeliveryDate: "",
});

const [err, setError] = useState(null)
const navigate = useNavigate

const handleChange = e =>{
setInputs(prev=>({ ...prev, [e.target.name]: e.target.value}))
}

const handleSubmitt = async (e) => {
e.preventDefault()
try {
  await Axios.post("http://localhost:8800/api/package/addPackage", inputs)
  navigate('/user/account/traveller/dashboard')
} catch(err) {
  setError(`${err.response.data.message}`)
}
}
    return(
      <>
      {isOpen && (
      <div className="container-post">  
    <div className="package-request">
    <form onSubmit={handleSubmitt}  className="request-form">
      <input placeholder="Package From" type="text" id="packageFrom" name="packageFrom" onChange={handleChange} />
      <input placeholder="Package To" type="text" id="packageTo" name="packageTo" onChange={handleChange} />
      <input placeholder="Package wight" type="number" id="packageWight" name="packageWight" onChange={handleChange} />
      <select name="packageCat" onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="food">Food</option>
        <option value="post">Post</option>
        <option value="cloth">Cloth</option>
        <option value="electronics">Electronics</option>
        <option value="animal">Animal</option>
        <option value="other">Other</option>
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