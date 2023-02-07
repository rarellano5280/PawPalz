// 1. Import classes
// ==================

import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";

const cloudIMG = () => {


  // 2. Set your cloud name
  //========================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dzbxuwfvw',
    
    }
  });


  // 3. Get your image
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('cld-sample'); 


  // 4. Transform your image
  //=========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));


  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
    <div className="App-body">
      <h1>React Quick Start</h1>
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    </div>
  )

};

export default cloudIMG;
