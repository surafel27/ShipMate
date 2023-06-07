import React from 'react';
import TestimonialData from "./TestimonialData";
import "./TestimonialStyle.css";

function Testimonial() {
    return (
        <div className="recent">
            <h1>Handle any amount of bookings with ease</h1>
            <p>Discover your self here!</p>
            <div className="recentcard">
                <TestimonialData 
                heading="Unlimited work opportunity"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                image2 ="https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                />
                 <TestimonialData 
                heading="Unlimited work opportunity"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                image2 ="https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                />
                 <TestimonialData 
                heading="Unlimited work opportunity"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                image2 ="https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                />
            </div>
        </div>
    );
}

export default Testimonial;