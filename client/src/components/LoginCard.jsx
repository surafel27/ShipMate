//import React from 'react';
import LoginData from "./LoginData";
import delivery_truck from "../assets/delivery_truck.svg"
import sender_mode from "../assets/sender_mode.svg"
import "./LoginStyle.css";

function LoginCard() {
    return (
        <div className="login">
            <h1>Wellcome to shipmate.</h1>
            <p>The first on-the-way delivery service</p>
            <div className="logincard">
                <LoginData 
                heading="SENDER"
                text="Create a delivery request, track a delivery and manage you'r account."
                //image2 ="https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                image2 ={sender_mode}
                link = "/account/sender/signupSender"
                
                />
                <div className="card-space" />
                 <LoginData 
                heading="Traveller"
                text = "View any request to your route, then accept the request and manage you'r account."
               //image2 ="https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                image2 ={delivery_truck}
                link = "/account/traveller/signupTraveller"
                />
            </div>
        </div>
    );
}

export default LoginCard;