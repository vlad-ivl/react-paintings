import React from "react";
import "./Footer.css";
import Nav from "../Nav/Nav";
import phoneIcon from "../UI/phone.svg";
import adressIcon from "../UI/adress.svg";

function Footer() {
  return (
    <div className="footer ">
      <div className="container">
        <div className="footer-wrapper">
          <Nav />
          <div className="footer-contact-block">
            <div className="footer-flex">
              <img className="icon icon-phone" src={phoneIcon} />
              <a className="footer-contact" href="tel:+380 (99) 999-99-99">
                +380 (99) 999-99-99
              </a>
            </div>
            <div className="footer-flex">
              <img className="icon icon-adress" src={adressIcon} />
              <div className="footer-adress">
                г. Харьков, ул. Академика Павлова., 24
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
