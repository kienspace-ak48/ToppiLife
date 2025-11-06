const ImageEntity = require('../models/Image');

class ImageService {
    constructor(parameters) {
        console.log('initial image service')
    }
    async GetAll(){
        const result = await ImageEntity.find({}).lean();
        return result; 
    }
}

module.exports = new ImageService(); //export instance singleton