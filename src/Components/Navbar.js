import React from "react";
import "./Styles/navbar.css";
import logo from "./Pics/Logo-website-header.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handlePastedition = () => {
    navigate("past_editions");
  };
  const handleAwards = () => {
    navigate("/awards");
  };
  const handleNomination = () => {
    navigate("/nomination");
  };
  const handleBlog = () => {
    navigate("/blog");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <img className="logo_1" src={logo} alt="Image not found" />
        </div>
        <div className="nav">
          <span onClick={handleHome}>Home</span>
          <span onClick={handlePastedition}>Past Editions</span>
          <span onClick={handleAwards}>Awards</span>
          <span onClick={handleNomination}>Nomination</span>
          <span onClick={handleBlog}>Blog</span>
          <span onClick={handleContact}>Contact</span>
        </div>
        <div className="contact">
          <button
            type="button"
            class="btn btn-success"
            style={{
              width: "300px",
              height: "80px",
              fontSize: "30px",
            }}
          >
            Enquire Now
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
