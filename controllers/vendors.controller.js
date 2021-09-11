
const {validationResult}= require('express-validator');

const signUpVendors= (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.status(200).send("vendors signed up successfully");

    
}
module.exports=signUpVendors;