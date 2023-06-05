import React from 'react';
import "./TestimonialStyle.css";

function TestimonialData(props) {
    return(
        <div className="r-card">
            <div className="r-image">
                <img alt="recent" src={props.image2} ></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <div className='r-card-btn'>
                <button>Learn More</button>
            </div>
            
        </div>
    );
}

export default TestimonialData;