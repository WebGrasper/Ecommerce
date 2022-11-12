import React from 'react';
import playStore from "../../../images/Appstore.png";
import appStore from "../../../images/playstore.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer id='footer'>
        <div className='leftFooter'>
            <h4>
                Download our app
            </h4>
            <p>
                Download our app for mobile and android phones
            </p>
            <img src={playStore} alt="playStore"/>
            <img src={appStore} alt="appStore"/>
        </div>
        <div className='midFooter'>
            <h1>CommerceX</h1>
            <p>
                High Quality is our priority
            </p>
            <p>Copyrights @2021 &copy; TeamCommerceX</p>
        </div>
        <div className='rightFooter'>
            <h4>
                Follow us
            </h4>
            <a href = "www.google.com">Instagram</a>
            <a href = "www.google.com">Facebook</a>
            <a href = "www.google.com">Twitter</a>
        </div>
    </footer>
  );
};

export default Footer;