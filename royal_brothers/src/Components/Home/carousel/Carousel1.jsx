// import React from 'react';
// import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "flat-carousel";

import "./carousel1.css";

export const Caro1 =()=> {
  const images = [
    {
      text:"#Ready to serve in 40+ cities",
      text2:"Think of a city we are almost there.The next time you plan on exploring a city transport is sorted with royalbrothers.",
      src:
      "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg"
    },
    {
      text:"Bikes Maintained So Good.",
      text2:"We obsess on giving you the best possible experience.That is why we have well bikes 24/7.",
        src:"https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg"
    },
    {
      text:"We’re socially celebrated",
      text2:"Our customer centric approch has got us  amazing reviews. Be it any platform, you will see many users recommending our service",
      src:
      "https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg"
    }
  ];
  return (
    <Carousel>
      {images.map((image, index) => (
        <div
          key={index}
          className="demo-item"
          
          style={{ backgroundImage: "url(" + image.src + ")"}}
          
        >
          <div className="carousel_text">
          <h3>{image.text}</h3>
          <p >{image.text2}</p>
          </div>
        </div>
        
      ))}
    </Carousel>
  );
}


