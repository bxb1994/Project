$(function () {
    var flag=true;
    //不起作用
    $(".addliuyan")[0].addEventListener("WebkitTransitionEnd",function () {
        if(flag){
            $(".liuyanBtn").css("display","block");
        }else{
            $(".liuyanBtn").css("display","none");
        }
    })

    $(".liuyanBtn").click(function () {
        flag=false;
        $(".addliuyan").css("animation","addliuyanopen 1s linear forwards");
        $(".but").css("display","block");
    })
    $(".quxiao").click(function () {   //取消留言
        flag=true;
        $(".addliuyan").css("animation","addliuyanclose 1s linear forwards");
        $(".but").css("display","none");
    })
    $(".submit").click(function () {   //点击提交
        var that=this;
        var aid=location.pathname.slice(location.pathname.lastIndexOf("/")+1);
        $.ajax({
            url:"/liuyan/ajax",
            data:{  //con aid username time
                con:$("textarea").val(),
                aid:aid
            },
            success:function (e) {
                console.log(e);
                if(e=="no"){
                    $(".notice").css("display","block");
                }else if(e=="yes"){
                    var username=$(that).attr("attr");
                    var data=new Date();
                    var year=data.getFullYear();
                    var month=data.getMonth();
                    var date=data.getDate();
                    var hours=data.getHours();
                    var min=data.getMinutes();
                    var sec=data.getSeconds();
                    var time=year+"-"+month+"-"+date+"&nbsp;"+hours+":"+min+":"+sec;

                    $(".done").css("display","block");
                    $(`<div class="list-group">
                            <a href="#" class="list-group-item active">
                                <h4 class="list-group-item-heading">${$("textarea").val()}</h4>
                                <p class="list-group-item-text">
                                    用户名：<span>${username}</span>
                                    发表时间: <span>${time}</span>                                    
                                </p>
                            </a>
                        </div>`).prependTo(".liuyan");
                    setTimeout(function(){
                        $(".done").css("display","none");
                    },2000)
                }
            }
        })
    })
    $(".nologin").click(function () {   //不登录
        $(".notice").css("display","none");
    })
})