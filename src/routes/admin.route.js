const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.controller');
const imageController = require('../controllers/image.controller')();
const imageUploadFx = require('../config/imageUpload');

router.get('/test', adminController.SaveConfig);
router.post('/image/upload',imageUploadFx.single('image') ,imageController.UploadImage);
router.get('/image', imageController.Index);

router.get('/page-config', adminController.PageConfig);
router.post('/page-config', adminController.SaveConfig)
router.get('/dashboard', adminController.Index);

module.exports = router;
