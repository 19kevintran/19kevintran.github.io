import "./CardStyles.css";
import { Link } from "react-router-dom";
import React from "react";

const Card = () => {
  return (
    <div className="card-main">
      <div className="card-container">
        <div className="card">
          <h3>-Basic-</h3>
          <span className="bar"></span>
          <p className="info">INFO 1</p>
          <p> Info 1</p>
          <p> Info 2</p>
          <p> Info 3</p>
          <p> Info 4</p>
          <Link to="/contact" className="btn2">
            BUTTON
          </Link>
        </div>
        <div className="card">
          <h3>-Basic-</h3>
          <span className="bar"></span>
          <p className="info">INFO 2</p>
          <p> Info 1</p>
          <p> Info 2</p>
          <p> Info 3</p>
          <p> Info 4</p>
          <Link to="/contact" className="btn2">
            BUTTON
          </Link>
        </div>
        <div className="card">
          <h3>-Basic-</h3>
          <span className="bar"></span>
          <p className="info">INFO 3</p>
          <p> Info 1</p>
          <p> Info 2</p>
          <p> Info 3</p>
          <p> Info 4</p>
          <Link to="/contact" className="btn2">
            BUTTON
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
