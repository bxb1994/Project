var express=require("express");
var mysql=require("./mysql");
var app=express();
var body=require("body-parser");
var child=require("child_process");
var request=require("request");
var http=require("http");
var cheerio=require("cheerio");
var cookie=require("cookie-parser");
var crypto=require("crypto");   //加密包
child.fork("pachong.js");     //fork 建立分支（子进程）
app.use(cookie("xiaobai"));  //设置中间键的秘钥
//中间键  判断是否登录
app.use(function (req,res,next) {
    res.locals.login=req.signedCookies.login;  //判断login是否存在，并赋值
    next();
})
var CronJob =  require('cron').CronJob;   //定时执行程序

app.listen(8989);

app.set("views","./views");
app.set("view engine","ejs");
app.use('/static',express.static('public'));
app.use(body.urlencoded({ extended: true }));

//中间键
app.use(function (req,res,next) {  //a:req   b:res   next:ck()
    mysql.query("select * from category",function(error,rows){
        if(!error) {
            res.locals.categorys = rows;
        }
        next();
    })
})
app.get("/",function(req,res){
    res.render("index");
})

/*app.get("/",function(req,res){
    mysql.query("select * from category",function(error,rows){
        res.render("index");
    })
});*/

app.get("/list/:id",function(req,res){
    var cid=req.params.id;
    mysql.query("select * from arc where cid="+cid+" limit 0,10",function(error,rows){
        if(!error){
            res.render("list",{lists:rows})
        }
    })

})
app.get("/show/:id",function(req,res){
    var id=req.params.id;
    mysql.query("select * from arc where id="+id,function(error,rows,fields) {
        if (!error) {
            mysql.query("select * from liuyan where aid=" + id + " limit 0,2", function (error, rows1) {
                res.render("show", {shows: rows, liuyan: rows1, username: req.signedCookies.username, id: id});
            })
        }
    })
})

//上拉刷新
app.post("/ajax",function (req,res) {
    var num=req.body.num*5;
    var cid=req.body.cid;
    setTimeout(function () {
        mysql.query("select * from arc where cid="+cid+" limit "+num+",5",function(error,rows){
            if(!error){
                res.send(rows);
            }
        })
    },1000)

})

//跨域
app.get("/demo",function (req,res) {
    console.log("guo");
    var fn=req.query.callback;
    mysql.query("select * from category",function(error,rows){
        if(!error){
            res.send(fn+"("+JSON.stringify(rows)+")");
        }
    })
})

//代理
app.post("/express",function (req,res) {
    var url=req.body.url;
    request.get(url,function (error,head,body) {
        var $=cheerio.load(body);
        var arr=[];
        $("#navmenu > li").each(function () {
            var a=$(this).find("a").html();
            arr+=a+"|";
        })
        res.send(arr.slice(0,-1));
    })
})

//路由配置
var user=require("./route/user.js");
var message=require("./route/message.js");
var liuyan=require("./route/liuyan.js");
app.use("/user",user);
app.use(message);
app.use("/liuyan",liuyan);




