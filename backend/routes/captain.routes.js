const captainController = require('../controllers/captain.controller');
const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require("../middlewares/auth.middleware");

router.post('/register', [
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('name too short'),
    body('password').isLength({ min: 6}).withMessage('password too short'),
    body('vehicle.color').isLength({min: 3}).withMessage('color too short'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate too short'),
    body('vehicle.capacity').isLength({min: 1}).withMessage('capacity too short'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('invalid vehicle'),
], captainController.registerCaptain)

router.post('/login', [
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({ min: 6}).withMessage('password too short'),
] , captainController.loginCaptain)

router.get('/profile', authMiddleware.authCaptain , captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain , captainController.logoutCaptain)
module.exports = router;