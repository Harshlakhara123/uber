const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3 , 'First name should be atleast 3 chars'],
        },
        lastname: {
            type: String,
            minlength: [3 , 'lastname should be atleast 3 chars'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [ /^\S+@\S+\.\S+$/,'please enter a valid email']
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        defaut: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3 , 'color must be atleast 3 chars']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3 , 'plate must be atleast 3 chars']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1 , 'capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle','auto'],
        }
    },
    location: {
        lat: {
            type: Number,
        },
        long: {
            type: Number,
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password , this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;