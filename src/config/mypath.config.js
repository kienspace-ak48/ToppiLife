const path = require('path');
const myPath = require('./mypath.config')
const myPathConfig = {
    root: path.join(__dirname, '../../'),
    upload: path.join(__dirname, '../../public/uploads/imgs')
}

module.exports = myPathConfig;