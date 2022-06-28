const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');
const imgbbUploader = require("imgbb-uploader");


// imgPath : path where img is temporarily stored in server
// service to upload image(stored currently at uploadPath) to the cloud & get its web url
exports.imgUpload = async (imgName) => {
    try {
        console.error('imgName', imgName);
        const options = {
            apiKey: process.env.IMG_UPLOAD_API_KEY, // MANDATORY
          
            imagePath: `/assets/dpImgs/berlin.jpg`, // OPTIONAL: pass a local file (max 32Mb)
          
            // name: "yourCustomFilename", // OPTIONAL: pass a custom filename to imgBB API
          
            // expiration: 3600
            /* OPTIONAL: pass a numeric value in seconds.
            It must be in the 60-15552000 range.
            Enable this to force your image to be deleted after that time. */
          
            // imageUrl: "https://placekitten.com/500/500", // OPTIONAL: pass an URL to imgBB (max 32Mb)
          
            // base64string:"iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mNcLVNbzwAEjDAGACcSA4kB6ARiAAAAAElFTkSuQmCC",
            // OPTIONAL: pass base64-encoded image (max 32Mb)
        };
        console.error('options',options);
        const response = await imgbbUploader(options)
        console.error('response', response);
        return response.data.url;
    } catch (err) {
        console.error('Error occured while uploading file to cloud', err);
        throw err;
    }
}

/*
sample JSON response 

{
    "data": {
        "id": "2KC2CWj",
        "title": "tst",
        "url_viewer": "https://ibb.co/2KC2CWj",
        "url": "https://i.ibb.co/WKM9MGc/tst.jpg",
        "display_url": "https://i.ibb.co/88f3fNj/tst.jpg",
        "width": "800",
        "height": "800",
        "size": 79719,
        "time": "1652510645",
        "expiration": "0",
        "image": {
            "filename": "tst.jpg",
            "name": "tst",
            "mime": "image/jpeg",
            "extension": "jpg",
            "url": "https://i.ibb.co/WKM9MGc/tst.jpg"
        },
        "thumb": {
            "filename": "tst.jpg",
            "name": "tst",
            "mime": "image/jpeg",
            "extension": "jpg",
            "url": "https://i.ibb.co/2KC2CWj/tst.jpg"
        },
        "medium": {
            "filename": "tst.jpg",
            "name": "tst",
            "mime": "image/jpeg",
            "extension": "jpg",
            "url": "https://i.ibb.co/88f3fNj/tst.jpg"
        },
        "delete_url": "https://ibb.co/2KC2CWj/8f88636ba3351f9e009950d83c933b4c"
    },
    "success": true,
    "status": 200
}

*/