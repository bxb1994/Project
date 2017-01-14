angular.module("routes",["ngRoute"])
    .config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"/tpl/index.html",
            controller:"index"
        }).when("/show/:id",{
            templateUrl:"/tpl/newsCon.html",
            controller:"show"
        }).when("/phone",{
                templateUrl:"/tpl/phone.html",
                controller:"phone"
       }).when("/todo",{
                templateUrl:"/tpl/todo.html",
                controller:"todo"
        }).when("/todo/add",{
            templateUrl:"/tpl/todoadd.html",
            controller:"todoadd"
        }).when("/edit/:id",{
            templateUrl:"/tpl/edit.html",
            controller:"edit"
        }).when("/liaotian",{
            templateUrl:"/tpl/liaotian.html",
            controller:"liaotian"
        }).when("/liao/:id",{
            templateUrl:"/tpl/liao.html",
            controller:"liao"
        })

    }])