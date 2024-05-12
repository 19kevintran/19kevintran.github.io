import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="name"></input>
        <label>Email: </label>
        <input type="email"></input>
        <label>Subject: </label>
        <input type="subject"></input>
        <label>Message: </label>
        <textarea rows="6" placeholder="Type your message here..."></textarea>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
