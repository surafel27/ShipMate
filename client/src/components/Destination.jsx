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
             heading = "Lorem Ipsum"
             text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            img1= {Location}
            img2={Location2}
            />
         <DestinationData 
             className="first-des-reverse"
             heading = "Lorem Ipsum"
             text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum!"
             img1={Takeout}
             img2={Takeout2}

            />
        </div>
    );

};
export default Destination;