const express = require('express');
const app = express();
const path = require('path');
const expressEjsLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
// =================
const myPathConfig = require('./config/mypath.config');
const route = require('./routes');
const dbConnection = require('./config/dbConnection.config');
const UserEntity = require('./models/User');
//midleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// use static files
app.use(express.static(path.join(myPathConfig.root, 'public')));
// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(myPathConfig.root, 'src', 'views'));
app.use(expressEjsLayouts);
app.set('layout', 'layouts/main');
// ==========TEST AREA========//
// comon
app.get('/test', (req, res) => {
    res.send({ title: 'Hello world', status: 'OK', mess: 'Hi', project: 'ToppiLife business' });
});
// api
const product=[{id: "SP001", name: "Pepsi"}, {id: "SP002", name: "Banh mi"}]
app.get('/api/product', (req, res)=>{
    const p = product;
    res.json(p);
});
// login with hard code
app.post('/api/register',async (req, res)=>{
    const user = new UserEntity({
        username: 'kienvu',
        email: 'admin@gmail.com',
        password: '12345',
        role: 'master',
    });
    const exit = await UserEntity.findOne({email: user.email});
    if(exit){
        return res.status(400).json({success: false, mess: 'Email da ton tai'});
    }
    await user.save();
    res.json({success: true, mess: 'Dang ky thanh cong'});
})

// ===========END TEST========//
route(app);
dbConnection();

module.exports = app;
