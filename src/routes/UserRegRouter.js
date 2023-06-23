const express = require('express')
const UserRegistrationRouter = express.Router()
UserRegistrationRouter.post('/userReg',function(req,res){
    const data={
        name:req.body.name,
        DOB:req.body.dob,
        Address:req.body.address,
        Gender:req.body.gender,
        Username:req.body.username,
        Password:req.body.password,
        conformPassword:req.body.conformPassword,
        mob:req.body.mob
    }
    console.log(data);
})
UserRegistrationRouter.post('/artistReg',function(req,res){
    const data={
        name:req.body.name,
        DOB:req.body.dob,
        Address:req.body.address,
        Gender:req.body.gender,
        Username:req.body.username,
        Password:req.body.password,
        conformPassword:req.body.conformPassword,
        mob:req.body.mob,
        category:req.body.category,
        email:req.body.email
    }
    console.log(data);
})

module.exports=UserRegistrationRouter
