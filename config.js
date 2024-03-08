const multer = require('multer');

const storage = multer.diskStorage({ 
    destination: function(req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function(req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, file.fieldname + Date.now()+ext)
    }
});
const upload = multer({storage:storage});

module.exports = upload