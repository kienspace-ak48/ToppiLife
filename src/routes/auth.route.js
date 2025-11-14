const express = require('express');
const router = express.Router();
const UserEntity = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET_JWT;

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // console.log(username, password);
    const user = await UserEntity.findOne({ email: username });
    if (!user) return res.redirect("/admin/auth");// return res.status(400).json({ success: false, mess: 'Email khong ton tai' });
    const isMatch = await user.comparePassword(password);
    if (isMatch && user.role === 'master') {
        const token = jwt.sign({ _id: user._id, username: user.username }, SECRET, { expiresIn: '30m' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 30* 60 * 1000, //1 day 24 * 60 * 60 * 1000
        });
        // res.json({ success: true, mess: 'Dang nhap thanh cong', token });
        res.redirect('/admin/dashboard')
    } else {
        res.redirect('/admin/auth/');
        // res.status(400).json({ success: false, mess: 'Mat khau khong dung' });
    }
    // res.redirect('/')
});
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    // res.json({ message: 'Đã đăng xuất' });
    res.redirect('/')
});
router.get('/', (req, res) => {
    res.render('login', { layout: false, title: 'Login' });
});

module.exports = router;
