import React from "react";
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";

function Past_editions() {
  return (
    <>
      <Navbar />
      <div
        className="images_container"
        style={{
          display: "flex",
          marginTop: "150px",
          justifyContent: "center",
        }}
      >
        <div className="images" style={{ width: "1500px" }}>
          <ImageCarousel />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Past_editions;
