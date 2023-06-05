import React from 'react';
import "./FooterStyle.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div className='web-name'>
                    <h1>SHIPMATE</h1>
                    <p>Stay Home!!</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkdin-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                  <h4>Projects</h4>
                   <a href="/">Changelog</a>
                   <a href="/">Status</a>
                   <a href="/">Licence</a>
                   <a href="/">All Version</a>
                </div>
                <div>
                  <h4>Projects</h4>
                   <a href="/">Changelog</a>
                   <a href="/">Status</a>
                   <a href="/">Licence</a>
                   <a href="/">All Version</a>
                </div>
                <div>
                  <h4>Projects</h4>
                   <a href="/">Changelog</a>
                   <a href="/">Status</a>
                   <a href="/">Licence</a>
                   <a href="/">All Version</a>
                </div>
                <div>
                  <h4>Projects</h4>
                   <a href="/">Changelog</a>
                   <a href="/">Status</a>
                   <a href="/">Licence</a>
                   <a href="/">All Version</a>
                </div>
            </div>
            <div className="last-bottom">
                <hr></hr>
                <h2> @copyright 2023, Addis Ababa, Ethiopia</h2>
            </div>
        </div>
    );
}
export default Footer;