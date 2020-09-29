import React from "react";
import { Carousel } from "react-materialize";

function Jumbo() {
  return (
    <div>
      <Carousel
        carouselId="Carousel-2"
        images={[
          "/assets/images/main_image_slider.png",
          "/assets/images/main_image_slider-2.jpg",
          "/assets/images/main_image_slider-3.jpg"
        ]}
        options={{
          fullWidth: true,
          indicators: true
        }}
      />
    </div>
  );
}

export default Jumbo;
