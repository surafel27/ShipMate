//import React from 'react';
import "./LoginStyle.css";
import { Link } from "react-router-dom";

function LoginData(props) {
    return(
        
        <div className="l-card">
            <div className="l-image">
                <img alt="login" src={props.image2} ></img>
            </div>
            
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <Link to={props.link}>
            <button>Get Started</button>
            </Link>
        </div>
    );

}

export default LoginData;