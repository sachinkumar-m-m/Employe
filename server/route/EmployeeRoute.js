const route = require('express').Router();

const multer = require('multer');

const EmpCtrl = require('../controller/EmpCtrl');

//file stroage
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'public/');
    },
    filename:(req,file,cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null,`image-${Date.now()}.${ext}`);
    },
});

const isImage = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    }else{
        cb(new Error('only Image is Allowed.!!'))
    }
}
const upload = multer({
    storage:storage,
    fileFilter:isImage,
});
const uploadImage = upload.single('photo')


route.get('/readAll', EmpCtrl.readAll);
route.get('/edit/:id',EmpCtrl.edit);
route.post('/create',EmpCtrl.create);
route.post('/update/:id',EmpCtrl.update);
route.delete('/delete/:id',EmpCtrl.delete);

route.post('/upload',uploadImage,EmpCtrl.upload)


module.exports = route;
