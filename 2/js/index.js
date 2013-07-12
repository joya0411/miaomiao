$(function() {
    var Slide = $('.slide').switchable({
        putTriggers: 'appendTo',
        panels: 'li',
        initIndex: 0,
        // 初始在第几张焦点图
        effect: 'scrollLeft',
        // taking effect when autoplay == true
        easing: 'cubic-bezier(.455, .03, .515, .955)',
        // equal to 'easeInOutQuad'
        end2end: true,
        // if set to true, loop == true
        loop: false,
        // not taking effect, because end2end == true
        autoplay: true,
        interval: 1.5,
        //间隔速度
        api: true // if set to true, Switchable returns API
    }).play(); //自动播放，若不需要自动播放则是.pause()

 //tab选项卡:商家认领和商家公告切换
    //初始状态
    $(".tab1 .head ul li:eq(0)").addClass("active");
    $(".tab1 .head ul li:eq(0)").children().addClass("active");
    $(".tab1 .main ul:eq(1)").hide();

    $(".tab1 .head ul li").hover(function(){
        //头部切换
        $(this).addClass("active").siblings().removeClass("active");

        var index=$(".tab1 .head ul li").index(this);
        $(".tab1 .head ul li a")
            .eq(index).addClass("active")
            .parent().siblings().children().removeClass("active");
        //文本切换 
        $(".tab1 .main ul").eq(index).show().siblings().hide();

    })
   //tab选项卡:亲子教育
   $(".tab .main:eq(1)").hide();
   $(".tab .head ul li").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(".tab .head ul li").index(this);
        $(".tab .main").eq(index).show()
            .siblings(".main").hide();
   })
});