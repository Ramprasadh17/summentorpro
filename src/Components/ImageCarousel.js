import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "./Pics/anjum.png";
import image2 from "./Pics/sanjay.jpg";
import image3 from "./Pics/fgytty.jpg";
import image4 from "./Pics/gjfui.jpg";
import image5 from "./Pics/sds.jpg";
import image6 from "./Pics/jiij.png";
import image7 from "./Pics/hr.jpg";

const ImageCarousel = () => {
  // Define your carousel items with image URLs and names
  const items = [
    { id: 1, imageUrl: image1, name: "Anjum" },
    { id: 2, imageUrl: image2, name: "Sanjay" },
    { id: 3, imageUrl: image3, name: "Fgytty" },
    { id: 4, imageUrl: image4, name: "Gjfui" },
    { id: 5, imageUrl: image5, name: "Sds" },
    { id: 6, imageUrl: image6, name: "Jiij" },
    { id: 7, imageUrl: image7, name: "Hr" },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        //   showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {items.map((item) => (
          <div key={item.id}>
            <img
              src={item.imageUrl}
              alt={`Image ${item.id}`}
              style={{ width: "300px" }}
            />
            <p style={{ marginTop: "30px", fontSize: "25px" }}>{item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
