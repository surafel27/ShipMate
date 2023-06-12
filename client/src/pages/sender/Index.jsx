import React, { Component } from 'react';
import '../../components/Index.css'
import Navbar from '../../components/Navbar';
import Traveller from '../../assets/traveler.svg'
import Traveller2 from '../../assets/traveller2.svg'

const Indexsender = () => {
    const items = [
        {
            className: "first-des",
            heading : "Lorem Ipsum",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
            className:"first-des-reverse",
            heading : "Lorem Ipsum",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },

    ];
    const cardItems = [
      {
        heading1:"Front of Card",
        heading2:"Back of Card",
        text1:"This is the front of the card. It contains important information. Please see overleaf for more details.",
        text2:"Your use of this site is subject to the terms and conditions governing this and all transactions."
      },
      {
        heading1:"Front of card",
        heading2:"Back of Card",
        text1:"This is the front of the card. It contains important information. Please see overleaf for more details.",
        text2:"Your use of this site is subject to the terms and conditions governing this and all transactions."

      },
      {
        heading1:"Front of card",
        heading2:"Back of Card",
        text1:"This is the front of the card. It contains important information. Please see overleaf for more details.",
        text2:"Your use of this site is subject to the terms and conditions governing this and all transactions."

      },
      {
        heading1:"Front of card",
        heading2:"Back of Card",
        text1:"This is the front of the card. It contains important information. Please see overleaf for more details.",
        text2:"Your use of this site is subject to the terms and conditions governing this and all transactions."

      },
    ];
    return (
        <>
        <Navbar />
        <div className="destination-st">  
        {items.map((item, index) => (
         <div className={item.className}>
            <div className="des-text">
            <h2> {item.heading}</h2>
            <p>{item.text}</p>
            </div>
          <div className="image1">
            <img alt="image1" src={Traveller}></img>
            <img alt="image1" src={Traveller2}></img>
          </div>
        </div>
    ))}
    </div> 
    <div class="maincontainer">
    {cardItems.map((cardItem, index) => (
      <div className="thecard">
        <div className="thefront"><h1>{cardItem.heading1}</h1><p>{cardItem.text1}</p></div>
        <div className="theback"><h1>{cardItem.heading1}</h1><p>{cardItem.text2}</p></div>
      </div>
        ))}
      </div>
    </>
    );
}
export default Indexsender;