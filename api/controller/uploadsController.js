const path = require('path');
const fs = require('fs');
const User = require('../models/user')
const imgUploadService = require('../service/imgUploadService')
const KnownError = require('../utils/knownError')


exports.imgUpload = async (req, res, next) => {
    try {
         // The name of the input field (i.e. "image") is used to retrieve the uploaded file
        if(!req.files) {
            throw new KnownError("Image required", 422, "uploadsController imgUpload");
        }
        const { image } =  req.files ; 
        if(!image) {
            throw new KnownError("Image required", 422, "uploadsController imgUpload");
        }

        // handle here image is undefined

        const uploadPath = path.resolve(__dirname, '../../public/assets/dpImgs/', image.name);
        console.error('uploadPath~~', uploadPath, 45);
        
        // A function to move the file elsewhere on your server. Can take a callback or return a promise
        // error(if occurs) is catched by catch block
        await image.mv(uploadPath);
        console.error('after image.mv');

        const imgUrl = await imgUploadService.imgUpload(image.name);
        console.error(imgUrl);
        await User.updateAField(req.user.userId, 'imgUrl', imgUrl)
        return res.send(imgUrl);
    } catch (err) {
        // TODO :
        // handle err.code === 'ENOENT'
        console.error('problem',err);
        next(err);
    }
}