const cloudinary = require("cloudinary").v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.Name,
    api_key: process.env.API_key,
    api_secret: process.env.API_secret
});

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
};

module.exports = (image) => { //image => base 64
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image, opts, (error, result) =>{
            if (result && result.secure_url) {
                console.log(result.secure_url);
                return resolve(result.secure_url);
            }
            console.log(error.message);
            return reject({message: error.message});
        });
    });
};