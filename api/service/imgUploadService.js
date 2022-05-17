const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');


// imgPath : path where img is temporarily stored in server
// service to upload image(stored currently at uploadPath) to the cloud & get its web url
exports.imgUpload = async (imgPath) => {
    try {
        var data = new FormData();
        data.append('image', fs.createReadStream(imgPath));
        
        var config = {
            method: 'post',
            url: `https://api.imgbb.com/1/upload?key=${process.env.IMG_UPLOAD_API_KEY}`,
            headers: { 
                ...data.getHeaders()
            },
            data : data
        };
    
        // TODO : safety check for valid url/undefined case
        // upload img to api.imgbb.com & get web url for image
        const response = await axios(config);
        const imgData = response.data;
        console.error('File successfully uploaded to the cloud', imgData.data, imgData.data.url);
        return imgData.data.url;
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