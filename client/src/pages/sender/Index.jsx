import React, { Component } from 'react';
import '../../components/Index.css'
import Navbar from '../../components/Navbar';
import Traveller from '../../assets/traveler.svg'
import Traveller2 from '../../assets/traveller2.svg'

const Indexsender = () => {
    const items = [
        {
            className: "first-des",
            heading : "Shipmate - Ship Your Packages with Ease!",
            text : " Send your packages securely and conveniently with Shipmate. Our platform connects you with trusted travellers who are heading to your desired destination. Simply create a package request, specify the delivery details, and choose a traveller who can deliver it for you. Shipmate ensures reliable and cost-effective package delivery, making it hassle-free for senders like you."
          },
        {
            className:"first-des-reverse",
            heading : "Shipmate - Ship Your Package with Swiftly!",
            text : "Send your packages securely and conveniently with Shipmate. Our platform connects you with trusted travellers who are heading to your desired destination. Simply create a package request, specify the delivery details, and choose a traveller who can deliver it for you. Shipmate ensures reliable and cost-effective package delivery, making it hassle-free for senders like you."
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
        <div className='mg-bt'></div>
      </div>
        ))}
      </div>
    </>
    );
}
export default Indexsender;