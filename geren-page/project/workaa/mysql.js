var mysql = require("mysql");
var fs=require("fs");

fs.stat("flag.txt",function(error,info){
    if(!error){
        console.log("数据库已经存在")
    }else{
        var db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: ''
        });
        db.query(`create database workaa`, function () {
            db.query("use workaa", function () {
                db.query(`create table admin (
        id int(11) primary key auto_increment,
        username varchar(255),
        password varchar(32)
        ) default charset utf8`,function(){
                    db.query(`insert into admin (username,password) values ('张三',MD5('123456'))`,function(){
                        db.query(`create table user (
        id int(11) primary key auto_increment,
        name varchar(255),
        pass varchar(32),
        phone varchar(32),
        en varchar(32)
        ) default charset utf8`,function(){
                            db.query(`create table news (
        id int(11) primary key auto_increment,
        title varchar(255),
        phone varchar(255),
        email varchar(255),
        address varchar(255)
        ) default charset utf8`,function(){
                                fs.writeFile("flag.txt","数据库不能重复创建");
                            })
                        })


                    })
                });
            })

        });
    }
})



