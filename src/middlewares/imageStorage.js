const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'archivos')
    },
    filename: (req, file, callback)=>{
        const extension = file.originalname.split('.').pop();
        let nombre = `${req.user._id}-${new Date().getTime()}.${ extension}`;
        callback(null, nombre)
    }
});

function filter(req, file, callback){
    const isValid = file.mimetype == 'pdf'
    callback(null, isValid)
}

const upload = multer({storage, fileFilter: filter })

module.exports = {upload}