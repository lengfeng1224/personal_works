/**
 * Created by lf on 2016/10/25.
 */
$(document).ready(function () {
    var baiDu={
        init:function () {
            this.baiduSetting();
        },
        //更多产品
        baiduSetting:function () {
            $("#more,#more-product").mouseover(function () {
                $("#more-product").show();
            }).mouseout(function () {
                $("#more-product").hide();
            })
        }
    };
    $(function () {
        baiDu.init();
    });
    // 换肤
    // 热门游戏 字体字体选择及hover背景 蓝色
    $(".s-skin-nav li").each(function () {
        if($(this).text()!="|"){
            $(this).hover(function () {
                $(this).addClass("choose-nav");
            },function () {
                $(".choose-nav").removeClass("choose-nav");
            });
            $(this).click(function () {
                $(".choose-nav1").removeClass("choose-nav1");
                $(this).addClass("choose-nav1");
            })
        }
    });
    // 冒险岛守望 字体选择及hover颜色
    $(".s-skin-twoTabNav li").each(function () {
        $(this).hover(function () {
            $(this).addClass("cur");
        },function () {
            $(".cur").removeClass("cur");
        });
        $(this).click(function () {
            $(".cur1").removeClass("cur1");
            $(this).addClass("cur1");
        })
    });
    // 点击图片，右侧改变and主页背景改变
    //s-skin-preview-content右侧预览   .choose-li选择的小勾

    $(".skin-img-item").each(function () {
        var imgitem=$(this);
        imgitem.hover(function () {
            $(".s-skin-preview-content").children().attr("src",imgitem.children().attr("src"));
            $(".preview-pageUI").css("background-position-x", "0");
         }).click(function () {
            $(".choose-li").removeClass("choose-li");
            imgitem.addClass("choose-li");
            skinAfter(imgitem);
        })
    });

    //取消换肤
    $(".s-skin-close").click(function () {
        skinBefore();
    })

    var skinBefore=function () {
        $(".s-skin-container").css({"background-color":"#fff","background-image":"none"});
        $(".s-top-wrap").css({"background-image":"","border-bottom":"1px solid #ededed"});
        $("nav>a,.s-icons>a,.setting-menu>a").css("color","#555");
        $(".lg").children().attr("src","./img/bd_logo1.png");
        $(".btn_right").children().css({"background-image": "none","background-position":"","color":"#fff"});
        $(".choose-li").removeClass("choose-li");
        $(".s-skin-preview-content").children().attr("src","");
        $(".more").css("color","#fff");
    }

    // 换肤后主页改变状态
    var skinAfter= function (index) {
        $(".s-skin-container").css("background-color","#404040");
        $(".s-skin-container").css("background-image","url("+index.children().attr("src")+")");
        $(".s-top-wrap").css("background-image","-webkit-gradient(linear,left top,left bottom,from(rgba(15,25,50,.3)),to(rgba(15,25,50,.3)))");
        $(".s-top-wrap").css("border-bottom","0");
        $("nav>a,.s-icons>a,.setting-menu>a").css("color","#fff");
        $(".lg").children().attr("src","./img/logo_white.png");
        $(".btn_right").children().css({"background-image": "url(./img/skin_dark_aab96bcc.png)","background-position":"-206px 0","color":"#000"});

    }

    // 鼠标移出左侧图示例
    $(".s-skin-border-content").mouseout(function () {
        var timeOut= function () {
            if($(".choose-li").length>0){
                $(".s-skin-preview-content").children().attr("src",$(".choose-li").children().attr("src"));
                $(".preview-pageUI").css("background-position-x", "0");
            }else {
                $(".s-skin-preview-content").children().removeAttr("src");
                $(".preview-pageUI").css("background-position-x", "-275px");
            }
        }
        setTimeout(timeOut,1000);
    });
    // 收放起换肤面板

    $('.s-icons a:nth-child(2)').click(function (e) {
        $(".s-skin-layer").animate({
            top:'0',
            opacity:'1',
        })
        e.stopPropagation();
    });
    $(".s-skin-up").click(function() {
        $(".s-skin-layer").animate({
            top:'-400px',
            opacity:'0.2',
        })
    });
    $(document).click(function () {
        $(".s-skin-layer").animate({
            top:'-400px',
            opacity:'0.2',
        })
        $(".s-mod-msg").hide();
    });

    $(".s-skin-layer").click(function (e) {
        e.stopPropagation();                //取消冒泡；
    });
    // 消息
    $('.s-icons a:nth-child(3)').click(function (e) {
        $('.s-mod-msg').toggle();
        e.stopPropagation();
    });
    $('.s-mod-msg').click(function (e) {
        e.stopPropagation();
    });
    // 背景透明度滑块
    var isbool=false;
    var x_size;
    $('.bg-alphaBarMoveBtn').mousedown(function (e) {
        var offset = $(this).offset(); //span在页面的位置
        var x =  e.pageX; //获得鼠标指针离span元素左边界的距离
        var _x,y,z;
        y=$('.bg-alphaBarMoveBtn').position().left;//获取小方块的相对位置
        // console.log("e.pagex"+y);
        $(document).bind("mousemove",function (ev) {
             _x =  ev.pageX-x; //获得X轴方向移动的值
            //console.log(_x);
            _x=y+_x;
            // console.log(_x);
            //console.log(ev.pageX+"-"+x);
            if(_x>=0&&_x<=80){
                $('.bg-alphaBarMoveBtn').css({left: _x + "px"});
            }
            z=($('.bg-alphaBarMoveBtn').position().left/80).toFixed(1)*100;
            $('.bg-alphaBarOpacity').html(z+"%");
        });
        $(document).mouseup(function() {

            $(this).unbind("mousemove");
        });
    });
    $('.bg-alphaBar').mousedown(function (e) {
        var x=e.pageX-$(this).offset().left-7;//-7是保证方块中间
        var z;
        //console.log("x"+e.pageX+"  y:"+$(this).offset().left);
        if(x>=0&&x<=80) {
            $('.bg-alphaBarMoveBtn').css({left: x + "px"});
        }

        z=($('.bg-alphaBarMoveBtn').position().left/80).toFixed(1)*100;
        $('.bg-alphaBarOpacity').html(z+"%");
    });

})

