import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Styles/home.css";
import img_1 from "./Pics/321111.webp";
import img_2 from "./Pics/15461616.webp";
import img_3 from "./Pics/3299999999.webp";
import img_4 from "./Pics/326666.webp";
import img_5 from "./Pics/327777.webp";
import img_6 from "./Pics/329999.webp";
import img_7 from "./Pics/3255555.webp";
import img_8 from "./Pics/9616166.webp";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import cover from "./Pics/COVER-PIC-2048x1005.png";
import Footer from "./Footer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home() {
  const [showImage, setShowImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setShowImage(imgSrc);
  };

  const handleCloseModal = () => {
    setShowImage(null);
  };

  return (
    <>
      <Navbar />
      <video
        src="https://gsbs.co.in/wp-content/uploads/2024/04/Video-with-venue.mp4"
        autoPlay
        loop
        muted
        className="video"
      />
      <h1>Past Editions Supported By</h1>
      <div className="supporters">
        {[img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8].map(
          (imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Image ${index + 1}`}
              style={{
                width: "150px",
                height: "150px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(imgSrc)}
            />
          )
        )}
      </div>
      {showImage && (
        <Modal
          open={Boolean(showImage)}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              src={showImage}
              alt="Clicked Image"
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </Box>
        </Modal>
      )}
      <div className="content_2_box">
        <div className="content_2">
          <img src={cover} className="cover_img" />
          <span>
            <h3 className="content_head">
              Development, Redevelopment and Regeneration
            </h3>
            <p style={{ fontSize: "25px" }}>
              <b>GSBS (Global Smart Build Summit and Awards – 7th Edition)</b>{" "}
              aims to navigate the dynamic landscape, offering a comprehensive
              overview that encapsulates current market dynamics, regulatory
              shifts, economic influences, and evolving consumer preferences. We
              hope to bring every stakeholder involved in the construction
              industry to a common platform where they can explore the
              regulatory framework governing sustainable development, shedding
              light on government policies and legal considerations that shape
              the industry and participate in advanced innovation driven
              procurement goals laid down in the form of pre-scheduled B2B
              meetings.
            </p>
            <span className="buttons">
              <button className="readmore">Read more</button>
              <button className="download">Download broucher</button>
            </span>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
