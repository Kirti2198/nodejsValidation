const express= require('express');
const { body, validationResult } = require('express-validator');
const router= express.Router();

const signUpVendors=require("../controllers/vendors.controller");
const Vendors = require('../util/database');

router.post("/signup", body('username').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 5 }), signUpVendors);

module.exports=router;