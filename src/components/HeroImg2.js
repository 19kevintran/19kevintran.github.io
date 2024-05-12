import "./HeroImg2Styles.css";
// import component 
import React, {Component} from "react";

// class component
class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          {/* props from Project.js */}
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
