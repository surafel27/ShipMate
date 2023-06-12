import React from 'react';
import "./HeroStyle.css"
import HeroImg from "../assets/hero.svg"
import { Link } from 'react-router-dom';
const  Hero = (props) => {
    return(
        <>
        <div className="background"></div>
        <div className="background-texture"></div>
        <header className="header">
            <div className="left-content">
                <p className="stay-home">Stay Home!!!</p>
                <h2>Send your items swiftly and safely</h2>
                <p></p>
                <p className="para">
                    That's what we need right now. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Aliquam, corporis.
                </p>
            <Link to="/account/login">
                <button className="hero-btn">Get Started</button>
            </Link>
            </div>
            <div className='right-content'>
                <img src={HeroImg} alt="" />
            </div>
        </header>
        </>
    );
}
export default Hero;