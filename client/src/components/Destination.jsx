import Takeout from "../assets/takeout_boxes.svg"
import Takeout2 from "../assets/destinationTraveller.svg"
import Location2 from "../assets/location_tracking.svg"
import Location from "../assets/orderDelivered.svg"
import React from 'react';
import DestinationData from "./DestinationData";
import "./DestinationStyle.css"
const Destination = () => {
    return (
        <div className="destination">
        <h1>Send And Recive Swiftly!</h1>
        <p> This is Destination </p>
        <DestinationData 
             className="first-des"
             heading = "Why Shipmate?"
             text = 'Connects travelers with people who need to send messages or packages to a destination along the same route, allowing travelers to earn some extra income while providing an affordable and convenient solution for package delivery.'
             img1= {Location}
            img2={Location2}
            />
         <DestinationData 
             className="first-des-reverse"
             heading = "Send and Recive"
             text = "connects travelers with people who need to send messages or packages to a destination along the same route, allowing travelers to earn some extra income while providing an affordable and convenient solution for package delivery."             img1={Takeout}
             img2={Takeout2}
            />
        </div>
    );

};
export default Destination;