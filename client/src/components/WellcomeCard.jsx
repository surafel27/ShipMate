import React from 'react';
import "./PostStyle.css";

function NewPostCard () {
    return(
      <div className="container">
        <div className="search-input">
          <form className="search-form">
          <input placeholder="DO YOU " type="text" id="searchPackage" name="searchPackage"/>
        </form>
        </div>
        </div>
    )
} 
export default NewPostCard;