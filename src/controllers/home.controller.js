const stringValue = require('../config/stringvalue.config');
const CNAME = 'home.controller.js ';
const VNAME = 'home/';
const PageConfigService = require('../services/pageconfig.service');

// const VLAYOUT = 'layouts/main';

const homeController = {
    Index: async (req, res) => {
        try {
            const pc = await  PageConfigService.getAll();  
            // console.log(pc);
            res.render('home', { layout: stringValue.VLAYOUTCLIENT, title: 'home', pc:pc||[] });
        } catch (error) {
            res.render('home', { layout: stringValue.VLAYOUTCLIENT, title: 'home', pc:pc||[] });
        }
    },
};

module.exports = homeController;
