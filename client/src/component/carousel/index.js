import React from "react";
import { Carousel } from "react-materialize";

let imagesProps=[
  "/assets/images/main_slider_1.png",
  "/assets/images/main_slider_2.png",
  "/assets/images/main_slider_3.png",
  "/assets/images/main_slider_4.png",
  "/assets/images/main_slider_5.png"
]

function Jumbo() {
  return (
    <div>
      <Carousel
        carouselId="Carousel-2"
        // images={[
        //   "/assets/images/main_slider_1.png",
        //   "/assets/images/main_slider_2.png",
        //   "/assets/images/main_slider_3.png",
        //   "/assets/images/main_slider_4.png",
        //   "/assets/images/main_slider_5.png"
        // ]}
        images={imagesProps}
        options={{
          fullWidth: true,
          indicators: true,
        }}
      />
    </div>
  );
}

export default Jumbo;
