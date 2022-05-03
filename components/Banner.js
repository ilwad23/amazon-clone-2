/* eslint-disable @next/next/no-img-element */
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Banner() {
  return (
    <div className="relative  bg-blue-500 ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-[#E5E5E5] to-transparent z-20 bottom-0"></div>

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://links.papareact.com/6ff"
            loading="lazy"
            alt="Banner"
          />
        </div>
        <div>
          <img
            src="https://links.papareact.com/gi1"
            loading="lazy"
            alt="Banner"
          />
        </div>
        <div>
          <img
            src="https://links.papareact.com/7ma"
            loading="lazy"
            alt="Banner"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
