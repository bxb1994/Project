var http=require("http");
var fs=require("fs");
var mysql=require("./mysql");
var read=require("./read.js");
var async=require("async");
var path=require("path");

module.exports.writeCategory=function(url,callback){
    var newdata;
    if(data.aimg!=="") {
        var imgarr = data.aimg.split(";");
        async.each(imgarr, function (url, cb){
            if( /\.(jpg|png|gif|jpeg)/.test(url)){
                http.get(url, function (res) {
                    var basename = path.basename(url);
                    res.pipe(fs.createWriteStream("./public/img/" + basename));
                    cb();
                })
            }
        }, function () {
            callback(newdata);
        })
    }
}


module.exports.writeArc=function(url,callback){
    //1. 放图片 2. 放内容->cid
    var newdata;
    read.readArc(url,function(data){
        newdata=data;
        if(data.aimg!=="") {
            var imgarr = data.aimg.split(";");
            async.each(imgarr, function (url, cb){
                if( /\.(jpg|png|gif|jpeg)/.test(url)){
                    http.get(url, function (res) {
                        var basename = path.basename(url);
                        res.pipe(fs.createWriteStream("./public/img/" + basename));
                        cb();
                    })
                }
            }, function () {
                callback(newdata);
            })
        }

    })

}

