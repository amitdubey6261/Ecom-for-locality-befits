import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:Amitdubey6261@gmail.com@gmail.com">
        <Button>Contact: Amitdubey6261@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
