var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: "dzbxuwfvw", // add your cloud_name
    api_key: "351462193458257", // add your api_key
    api_secret: "kQzkxHuJYFroQ-FFiwGQCa1FiM0", // add your api_secret
    secure: true
   });
   
   cloudinary.v2.search.expression(
    'folder:xx/*' // add your folder
    ).sort_by('public_id','desc').max_results(30).execute().then(result=>console.log(result));