const stringValue = require('../config/stringvalue.config')
const CNAME = 'home.controller.js ';
const VNAME = 'home/';
// const VLAYOUT = 'layouts/main';

const homeController = {
    Index: (req, res) => {
        try {
            res.render('home', {layout: stringValue.VLAYOUTCLIENT, title: 'home'});
        } catch (error) {
            res.render('home', {layout: stringValue.VLAYOUTCLIENT, title: 'home'})
        }
    },
};


module.exports = homeController;
