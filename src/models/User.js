const mongoose = require('mongoose');
const slugify = require('slugify');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String, 
    password: String,
    role: {type: String, default: 'user', _id: false},
},
{timestamps: true});

// hash password before save
UserSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
// compare password 
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);