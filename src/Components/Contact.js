import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-item location">
        <roomicon classname="icon">
          <h4>Location</h4>
          <p>
            S No-46 K No-43/7 J K Halli Anandapura main road, <br />
            Post Krishnarajapura, Bengaluru, Karnataka 560036
          </p>
          <a href="https://goo.gl/maps/Xs7YZ7zo2wmzeVGW7" target="_blank">
            {" "}
            View on Google Maps
          </a>
        </roomicon>
      </div>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0740849817666!2d77.66653201435415!3d13.030954117099993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f597bb915d%3A0x2d4457acb0196b24!2sCloudZ%20Technology!5e0!3m2!1sen!2sin!4v1624981535417!5m2!1sen!2sin"
          allowFullScreen
          className="map"
        />
      </div>
    </>
  );
}

export default Contact;
