import React from "react";
import footerlogo from "./Pics/GSBS-logo-final-green-2048x1640.png";
import "./Styles/footer.css";
function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footerdiv">
          <div className="logo_div">
            <img src={footerlogo} style={{ width: "300px" }} />
            <div>
              <p>
                India the 2nd most populous country in the world, is currently
                trending in the higher investment markets, climbing upwards
                towards becoming one of the biggest economies in the world. The
                current policies are massively uplifting the infrastructure &
                real estate market in the region.
              </p>
            </div>
          </div>
          <div className="nav_div">
            <h2>Navigation Links</h2>
            <div className="footer_nav">
              <span>Home</span>
              <span>Past Edition</span>
              <span>Awards</span>
            </div>
            <div className="footer_nav">
              <span>Nomination</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="contact_div">
            <h2>Contact for Marketing & Branding</h2>
            <h5>NIKITA SHAHI</h5>
            <h5>080 4157 4773</h5>
            <h5>nitika@summentorpro.com</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
