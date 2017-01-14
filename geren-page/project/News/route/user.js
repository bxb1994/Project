var express=require("express");
var mysql=require("../mysql");
var router=express.Router();
router.use("/reg",function (req,res,next) {
    res.cookie("comming","yes",{signed:true});
    res.render("reg");
})
//检查注册
router.use("/regCheck",function (req,res,next) {
    //两种情况  1.不成功退出  2.成功写入信息  3.君子协议
    if(req.signedCookies.comming=="yes"){
        var username=req.body.username;
        var password=req.body.password;
        if(username==""||password==""){  //没有写用户名或密码就跳转到message页面
            res.redirect("/empty");
        }else{
            mysql.query("select * from user",function (error,rows) {
                var flag=true;   //控制
                for(var i=0;i<rows.length;i++){
                    if(rows[i].username==username){  //注册的用户名已存在
                        flag=false;
                        res.redirect("/error");
                        break;
                    }
                }
                if(flag){
                    mysql.query(`insert into user (username,password) values ('${username}','${password}')`,function (error) {
                        if(error){
                            res.redirect("/mysqlerror");
                        }else{   //注册成功
                            res.redirect("/regSuccess");
                        }
                    });
                }

            })
        }
    }else{
        res.redirect("/");   //重定向
    }
})

router.use("/login",function (req,res,next) {
    if(req.signedCookies.login){
        res.redirect("/errorLogin2");
    }else{
        res.render("login");
    }
})
//检查登录
router.use("/loginCheck",function (req,res,next) {
    if(req.signedCookies.login){
        res.redirect("/errorLogin2");
    }
    var username=req.body.username;
    var password=req.body.password;
    if(username==""||password==""){  //没有写用户名或密码就跳转到message页面
        res.redirect("/error");
    }else{
        mysql.query("select * from user",function (error,rows) {
            var flag=true;
            for(var i=0;i<rows.length;i++){
                if(rows[i].username==username){  //注册的用户名存在
                    if(rows[i].password==password){
                        flag=false;
                        res.cookie("login","yes",{signed:true});
                        res.cookie("username",username,{signed:true});
                        res.redirect("/");
                        break;
                    }
                }
            }
            if(flag){
                res.redirect("/loginerror");
            }
        })
    }
})
//退出登录
router.use("/logout",function (req,res,next) {
    res.clearCookie("login");   //清空登录
    res.redirect("/");
})

module.exports=router;