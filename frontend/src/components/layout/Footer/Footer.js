import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./footer.css"
const Footer = ()=>{
    return (
        <footer id ="footer">
            <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
        </div>
        <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Terex_abhi</p>
      </div>
      
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://twitter.com/abhitrivediee04">Twitter</a>
        <a href="https://github.com/abhishek1901ee04">Github</a>
        <a href="https://twitter.com/abhitrivediee04">Instagram</a>
        <a href="https://twitter.com/abhitrivediee04">Youtube</a>
        <a href="https://twitter.com/abhitrivediee04">Facebook</a>
      </div>
        </footer>
    );
};
export default Footer;