/*var read=require("./read.js");
/read.readArc("http://news.ifeng.com/a/20161227/50482344_0.shtml",function(data){
    console.log(data);
})
read.readList("http://news.ifeng.com/mainland/",function(data){
    console.log(data);
})*/

setInterval(function () {
    process.send("子进程");   // 子进程
},1000);

process.on("message",function (info) {
    setInterval(function () {
        process.send("子进程");   // 子进程
    },info.num);
})