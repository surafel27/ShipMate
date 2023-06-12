import React, { Component } from 'react';
import '../../components/Index.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Indextraveller = () => {
    const items = [
        {
            className:"first-des-reverse",
            heading : "Are You Planning To Travell?",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
           img1:"https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
           img2:"https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",

        },
        {
            className: "first-des",
            heading : "Shipmate - Earn While You Travel!",
            text : "Turn your travels into rewarding opportunities with Shipmate. As a traveller, you can make money by delivering packages for others who need them transported to your destination. Connect with senders looking for reliable travellers and earn extra income along your journey. Shipmate provides a safe and convenient way to monetize your trips while helping people get their packages delivered efficiently.",
            img1:"https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
           img2:"https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",

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

      }
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
            <img alt="image1" src={item.img1}></img>
            <img alt="image1" src={item.img2}></img>
          </div>
        </div>
    ))}
    </div> 
    <div class="maincontainer">
    {cardItems.map((cardItem, index) => (
      <div className="thecard-t">
        <div className="thefront"><h1>{cardItem.heading1}</h1><p>{cardItem.text1}</p></div>
        <div className="theback"><h1>{cardItem.heading2}</h1><p>{cardItem.text2}</p></div>
        <div className='mg-bt'></div>
      </div>
        ))}
      </div>
      <div className='mg-bt'><p></p></div>
      <Footer />
    </>
    );
}
export default Indextraveller;