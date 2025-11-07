const clientRoute = require('./client.route');
const adminRoute = require('./admin.route');
const authRoute = require('./auth.route');
const authMiddleware = require('../middlewares/auth');
function route(app) {

    app.use('/admin/auth', authRoute);
    app.use('/admin', authMiddleware, adminRoute);
    app.use('/', clientRoute);
    // catch error
    app.use((req, res, next) => {
        res.status(404).render('404', { layout: false, title: 'Not found' });
    });
}

module.exports = route;
