const upload = require("../common");
const { uploadFile, getFileStream } = require("../config/mongo/s3");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const connection = require("../config/mongo/mongodb")

let middleware = upload.single('profile-file');
module.exports.uploadpic = (req, res, next) => {
  let controller = async() => {
    const result = await uploadFile(req.file);
    await unlinkFile(req.file.path);
    res.status(200).json({
      status: "success",
      message: "File uploaded successfully",
      data:result
    });
  };
  middleware(req, res, controller);
}

module.exports.retrieveImg = (req, res) => {
    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res);
}


