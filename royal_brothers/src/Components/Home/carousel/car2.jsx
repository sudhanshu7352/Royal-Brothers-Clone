import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <img
       
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/money_control-0301bddd4ac901172098f7d0b590e8dbed35e7fa1064d2ced799f9cbc9185d66.png"
        alt="First slide"
      />
    </div>,
    <div className="item" data-value="2">
        <img
       
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/the_better_india-09cca403fbe2fe19974cb1701aaa87fce8e587f32a18bc477ebf28f05e1c1788.png"
        alt="First slide"
      />
    </div>,
    <div className="item" data-value="3">
      <img
        style={{width:"200px",height:"80px" ,marginTop:"-8px"}}
       
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/times%20of%20india.png"
        alt="First slide"
      />
    </div>,
    <div className="item" data-value="4">
         <img
      
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/the_indian_express-e2581d704a7b572ef2d66812e5a264c6ab753e109a200c4da8e249b82e3c9f52.jpg"
        alt="First slide"
      />
    </div>,
    <div className="item" data-value="5">
         <img
        
        style={{width:"200px"}}
        src="https://freepngimg.com/save/68296-business-media-company-inc42-startup-marketing/2000x595"
        alt="First slide"
      />
    </div>,
];

export const Gallery = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);