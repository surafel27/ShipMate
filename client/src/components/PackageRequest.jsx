import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PackageRequestStyles.css";
import Axios from 'axios';

function PackageRequestForm() {
    const [from, setPackageFrom] = useState("");
    const [to, setPackageTo] = useState("");
    const [history, setHistory] = useState("");
    const [weight, setPackageWeight] = useState("");
    const [packageDate, setPackageDate] = useState("");
    const [packagePrice, setPackagePrice] = useState("");
    const [error, setError] = useState('');
    
    const handlePackageRequest = async (e) => {
      e.preventDefault();
  
      try {
        const response = await Axios.post('http://localhost:4001/api/createSender/signup', {
          from,
          to,
          history,
          weight,
          packageDate,
          packagePrice,
        });
  
        console.log(response.data); // Handle success response
  
        // Clear the form
        setPackageFrom('');
        setPackageTo('');
        setHistory('');
        setPackageWeight('');
        setPackageDate('');
        setPackagePrice('');
        setError('');
      } catch (err) {
        console.error(err);
        setError('Error Posting Package'); // Handle error response
      }
    };
  
    return (
      <>
      <div className="signup-form-container-sender">
      <form onSubmit={handlePackageRequest} className="signup-form">
        <h2>Post deliveries in minutes.</h2>
        {error && <p>{error}</p>}
        <input placeholder="FROM" type="text" id="from" 
        value={from}
        onChange={(e) => setPackageFrom(e.target.value)}/>

        <input placeholder="to" type="text" id="to" 
        value={to}
        onChange={(e) => setPackageTo(e.target.value)}/>
         <textarea placeholder='Tell us about the package' type="text" id="history"
          value={history}
          onChange={(e) => setHistory(e.target.value)}/>

        <input placeholder="wight in kg" type="number" id="weight" 
         value={weight}
         onChange={(e) => setPackageWeight(e.target.value)}/>
         <input type="date" id="packageDate" 
         value={packageDate}
         onChange={(e) => setPackageDate(e.target.value)}/>
         <input placeholder='Please set the package price' type="text" id="packageprice" 
         value={packagePrice}
         onChange={(e) => setPackagePrice(e.target.value)}/>
        <button type="submit">Create Account</button>
        <Link to="/senderIdentity" className="link-button">I already have an account.</Link>
      </form>
      </div>
      </>
    );
  }
  export default PackageRequestForm;