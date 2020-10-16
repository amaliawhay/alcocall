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
          autoPlay: true,
          fullWidth: true,
          indicators: true,
          interval: 400
        }}
      />
    </div>
  );
}

export default Jumbo;
