var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: "dzbxuwfvw", // add your cloud_name
    api_key: "351462193458257", // add your api_key
    api_secret: "kQzkxHuJYFroQ-FFiwGQCa1FiM0", // add your api_secret
    secure: true
   });
 module.exports = cloudinary