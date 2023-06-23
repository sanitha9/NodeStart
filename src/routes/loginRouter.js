const express = require('express')
const loginRouter = express.Router()
loginRouter.post('/login',function(req,res){
    const data={
        name:req.body.Username,
        password:req.body.Password
    }
    console.log(data);
})
module.exports=loginRouter