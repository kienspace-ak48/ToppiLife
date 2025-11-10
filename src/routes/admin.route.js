const express = require('express');
const router = express.Router();

const uploadVideoFx = require('../config/videoUpload');
const imageUploadFx = require('../config/imageUpload');

const adminController = require('../controllers/admin.controller');
const imageController = require('../controllers/image.controller')();
const videoController = require('../controllers/video.controller')();

// Routes
router.delete('/video/delete/:path', videoController.Delete);
router.post('/video/upload', uploadVideoFx.single('video'), videoController.Upload);
router.get('/video', videoController.Index);
router.get('/test', adminController.SaveConfig);
router.get('/image/delete/:name', imageController.DeleteImage);
router.post('/image/upload',imageUploadFx.single('image') ,imageController.UploadImage);
router.get('/image', imageController.Index);

router.get('/page-config', adminController.PageConfig);
router.post('/page-config', adminController.SaveConfig)
router.get('/dashboard', adminController.Index);

module.exports = router;
