const clientRoute = require('./client.route');
const adminRoute = require('./admin.route');
function route(app) {

    app.use('/admin', adminRoute);
    app.use('/', clientRoute);
    // catch error
    app.use((req, res, next) => {
        res.status(404).render('404', { layout: false, title: 'Not found' });
    });
}

module.exports = route;
