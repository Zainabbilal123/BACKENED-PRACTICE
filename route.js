const express = require('express')
const router = express.Router()

// middlewares

const auth =  function (req,res,next) {
    console.log("added into auth middleware")

    req.user = {userId: 1, role:'admin'};

    if(req.user) {
        next();
    }
    else{
        res.json({
            success: false,
            Message: "not a valid user"
        })
    }
    
}

const isadmin =  function (req,res,next) {
    console.log("added into admin middleware")

    
    if(req.user.role === "admin") {
        next();
    }
    else{
        res.json({
            success: false,
            Message: "this route is only for admin"
        })
    }
    
}
const isStudent =  function (req,res,next) {
    console.log("added into student middleware")

    
    if(req.user.role === "student") {
        next();
    }
    else{
        res.json({
            success: false,
            Message: "this route is only for student"
        })
    }
    
}

// routes 

router.get('/student',auth,isStudent,(req,res)=> {
    res.send("student specific route")
})
router.get('/admin',auth,isadmin,(req,res)=> {
    res.send("admin specific route")
})

module.exports = router