import React, { useState } from 'react';
import "./NewPostCardStyle.css";
import { useNavigate } from 'react-router-dom';

const NewPostCard = ({ onClose }) => {
  const [inputs, setInputs] = useState({
    packageFrom: "",
    packageTo: "",
    packageDesc: "",
    packageWight: "",
    packagePrice: "",
    packageDeliveryDate: "",
});
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };
const [err, setError] = useState(null)
const navigate = useNavigate

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
    return(
      <div className="container-post">
    <div className="package-request">
    <form onSubmit={handleSubmitt}  className="request-form">
      <input placeholder="Package From" type="text" id="packageFrom" name="packageFrom" onChange={handleChange} />
      <input placeholder="Package To" type="text" id="packageTo" name="packageTo" onChange={handleChange} />
      <textarea placeholder="Please tell us the detail about the package and the last destination." type="text" id="packageDesc" name="packageDesc" onChange={handleChange}/>
      <input placeholder="Package wight" type="number" id="packageWight" name="packageWight" onChange={handleChange} />
      <input placeholder="Price for delivery" type="number" id="packagePrice" name="packagePrice" onChange={handleChange} />
      <input placeholder="Date of Delivery" type="date" id="packageDeliveryDate" name="packageDeliveryDate" onChange={handleChange} />
      <div className='btn-collection'>
      <button type="submit">Submit Post</button>
      <button className='close' onClick={onClose}>Cancel</button>
      </div>
    </form>
    </div>
        </div>
    )
} 
export default NewPostCard;