import React from "react";
import Navbar from "./Navbar";
import awards from "./Pics/256549116.jpg";
import Footer from "./Footer";

function Awards() {
  return (
    <>
      <Navbar />
      <img src={awards} alt="Image Not Found" style={{ width: "100%" }} />
      <Footer />
    </>
  );
}

export default Awards;
