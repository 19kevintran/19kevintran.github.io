import "./FooterStyles.css";
import React from "react";
import { BsGithub, BsGitlab } from "react-icons/bs";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaSnapchat,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              ADDRESS
            </h4>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              626-716-2929
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              19kevintran@ou.edu
            </h4>
          </div>
          
        </div>

        <div className="right">
          <h4>About the me</h4>
          <p>My name is Kevin Tran. I am making a portfolio</p>
          <div className="social">
            <h4>
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              kevin._.tran
            </h4>
            <h4>
              <FaSnapchat
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              kevin_tran1
            </h4>
            <h4>
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              kevin-tran-ra9
            </h4>
            <div className="github">
            <h4>
              <BsGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              19kevintran
            </h4>
          </div>
          <div className="gitlab">
            <h4>
              <BsGitlab
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              19kevintran
            </h4>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
