var express=require("express");
var router=express.Router();
router.use("/empty",function (req,res,next) {
    res.render("error",{title:"注册失败",con:"用户名或密码为空",url:"/user/reg"});
})
router.use("/error",function (req,res,next) {
    res.render("error",{title:"注册失败",con:"用户名已存在",url:"/user/reg"});
})
router.use("/mysqlerror",function (req,res,next) {
    res.render("error",{title:"注册失败",con:"数据库数据处理错误",url:"/user/reg"});
})
router.use("/regSuccess",function (req,res,next) {
    res.render("error",{title:"注册成功",con:"请登录",url:"user/login"});
})
router.use("/loginerror",function (req,res,next) {
    res.render("error",{title:"登录失败",con:"请重新登录",url:"/user/login"});
})
router.use("/errorLogin2",function (req,res,next) {
    res.render("error",{title:"已经登录",con:"返回首页",url:"/"});
})

module.exports=router;