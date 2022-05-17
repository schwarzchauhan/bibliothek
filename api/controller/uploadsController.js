const path = require('path');
const fs = require('fs');
const imgUploadService = require('../service/imgUploadService')

exports.imgUpload = async (req, res, next) => {
    try {
        console.error(req.files.image);
         // The name of the input field (i.e. "image") is used to retrieve the uploaded file
        const { image } =  req.files ; 

        // handle here image is undefined

        const uploadPath = path.resolve(__dirname, '../../public/assets/dpImgs/', image.name);
        console.error('uploadPath~~', uploadPath, 45);
        
        // A function to move the file elsewhere on your server. Can take a callback or return a promise
        // error(if occurs) is catched by catch block
        await image.mv(uploadPath);

        const imgUrl = await imgUploadService.imgUpload(uploadPath);
        console.error(imgUrl);
        return res.send(imgUrl);
    } catch (err) {
        // TODO :
        // handle err.code === 'ENOENT'
        console.error('problem',err);
        next(err);
    }
}