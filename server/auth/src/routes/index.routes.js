const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json({'status':'auth Connected!'})
})

module.exports = router;