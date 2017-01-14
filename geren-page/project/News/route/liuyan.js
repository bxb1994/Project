var express=require("express");
var mysql=require("../mysql");
var router=express.Router();
router.use("/ajax",function (req,res,next) {
    if(req.signedCookies.login){  //判断是否登录
        var con=req.query.con;
        var aid=req.query.aid;
        var time=new Date().getTime();
        var username=req.signedCookies.username;
        mysql.query(`insert into liuyan (con,aid,time,username) values ('${con}','${aid}','${time}','${username}')`,function (error,result) {
            if(error){
                res.redirct("/mysqlerror");
            }else{
                res.send("yes");
            }
        });
    }else{   //没有登录
        res.send("no");
    }
})
router.use("/more/:id",function (req,res,next) {
    var id=req.params.id;
    mysql.query("select * from liuyan where aid="+id,function (error,rows) {
        res.render("liuyanlist",{rows:rows})
    })

})
module.exports=router;