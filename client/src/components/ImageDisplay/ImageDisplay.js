// 1. Import classes
// ==================
import React, { useState, Component } from "react";
import axios from "axios";
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import {Cloudinary} from "@cloudinary/url-gen";
import { render } from 'react-dom';
// import cloudinary from "https://res.cloudinary.com/<your_cloud_name>/<resource_type>/list/<tag>.json"

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";

const ImageDisplay = () => {


  // 2. Set your cloud name
  //========================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dzbxuwfvw'
    }
  });
  // 3. Get your image
  //===================
  const [state, setState] = useState({});
   
  axios.get('https://res.cloudinary.com/dzbxuwfvw/image/Assets.json')
  .then(res => {
      console.log(res.data.resources);
      setState({gallery: res.data.resources});
  });

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('cld-sample'); 
  
console.log(state);
  // 4. Transform your image
  //=========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));


  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
    return (
    <div className="main">
                <h1>Galleria</h1>
                <div className="gallery">
                    <CloudinaryContext cloudName="cloud_name">
                        {
                            state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <a target="_blank" href={`https://res.cloudinary.com/dzbxuwfvw/image/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                            </a>
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>

  )

  };

export default ImageDisplay;


// cloudinary.url("logo.json", {type: "list"})
// console.log(cloudinary.url("logo.json", {type: "list"}));