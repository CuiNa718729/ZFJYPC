//新闻 无缝滚动
$(function () {
    var i = 0;
    var timer = null;
    // 复制第一张图片
    var firstimg = $('.banner>li').eq(0).clone();
    // 复制第二张图片
    var secondimg = $('.banner>li').eq(1).clone();
    // 复制第三张图片
    var thirdimg = $('.banner>li').eq(2).clone();
    // 将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
    $('.banner').append(firstimg);
    $('.banner').append(secondimg);
    $('.banner').append(thirdimg).width(($('.banner>li').length + 1) * ($('.banner img').width()));

    var imgWidth=$('.banner img').width();
    // 下一个按钮
    $('.next').click(function () {
        i++;
        if (i == $('.banner>li').length-2) {
            i = 1; // 这里不是i=0
            // 保证无缝轮播，设置left值
            $('.banner').css({left: 0});
        }
        $('.banner').stop().animate({left: -i * imgWidth}, 300);
    });
    // 上一个按钮
    $('.prev').click(function () {
        i--;
        if (i == -1) {
            i = $('.banner>li').length - 3;
            $('.banner').css({left: -($('.banner>li').length - 1) * imgWidth});
        }
        $('.banner').stop().animate({left: -i * imgWidth}, 300);
    });
    // 定时器自动播放
    timer = setInterval(function () {
        i++;
        if (i == $('.banner>li').length - 2) {
            i = 1;
            $('.banner').css({left: 0});
        }
        $('.banner').stop().animate({left: -i * imgWidth},300);
    }, 5000);
    // 鼠标移入，暂停自动播放，移出，开始自动播放
    $('.container').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            i++;
            if (i == $('.banner>li').length - 2) {
                i = 1;
                $('.banner').css({left: 0});
            }
            $('.banner').stop().animate({left: -i * imgWidth}, 300);
        }, 5000);
    });
});
//项目中心 无缝滚动
$(function () {
    var i = 0;
    var timer = null;
    // 复制第一张图片
    var firstimg = $('.business-banner>li').eq(0).clone();
    // 复制第二张图片
    var secondimg = $('.business-banner>li').eq(1).clone();
    // 复制第三张图片
    var thirdimg = $('.business-banner>li').eq(2).clone();
    //复制第四张图片
    var fourimg = $('.business-banner>li').eq(3).clone();
    // 将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
    $('.business-banner').append(firstimg);
    $('.business-banner').append(secondimg);
    $('.business-banner').append(thirdimg);
    $('.business-banner').append(fourimg).width(($('.business-banner>li').length + 1) * ($('.business-banner>li').width()));

    var liWidth=$('.business-banner>li').width();
    // 下一个按钮
    $('.business-next').click(function () {
        i++;
        if (i == $('.business-banner>li').length-3) {
            i = 1; // 这里不是i=0
            // 保证无缝轮播，设置left值
            $('.business-banner').css({left: 0});
        }
        $('.business-banner').stop().animate({left: -i * liWidth}, 300);
    });
    // 上一个按钮
    $('.business-prev').click(function () {
        i--;
        if (i == -1) {
            i = $('.business-banner>li').length - 4;
            $('.business-banner').css({left: -($('.business-banner>li').length - 1) * liWidth});
        }
        $('.business-banner').stop().animate({left: -i * liWidth}, 300);
    });
    // 定时器自动播放
    timer = setInterval(function () {
        i++;
        console.log(i);
        if (i == $('.business-banner>li').length - 3) {
            i = 1;
            $('.business-banner').css({left: 0});
        }
        $('.business-banner').stop().animate({left: -i * liWidth},300);
    }, 5000);
    // 鼠标移入，暂停自动播放，移出，开始自动播放
    $('.mainBusiness').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            i++;
            if (i == $('.business-banner>li').length - 3) {
                i = 1;
                $('.business-banner').css({left: 0});
            }
            $('.business-banner').stop().animate({left: -i * liWidth}, 300);
        }, 5000);
    });
});

// 获得浏览器的可视高度
var height = $(window).height();
$('body').css('height', height);
$('.content').css('height', height);
$('.father').css('height', height);
if (height <= 800) {
    $('.footer').removeClass('fixed');
    $(".wordsImg").css({"marginTop":"175px"})
}

//标签页切换
$(".olympicTabList li").click(function(e){
    e.preventDefault();
    var i=$(this).index();
    $(".olympicTabList li").removeClass("active").eq(i).addClass("active");
    $(".olympicContent>div").addClass("invisible").eq(i).removeClass("invisible");
});
$(".frameWorkTabList li").click(function(e){
    e.preventDefault();
    var i=$(this).index();
    $(".frameWorkTabList li").removeClass("active").eq(i).addClass("active");
    $(".frameWorkContent>div").addClass("invisible").eq(i).removeClass("invisible");
});
$(".recruitTabList li").click(function(e){
    e.preventDefault();
    var i=$(this).index();
    $(".recruitTabList li").removeClass("active").eq(i).addClass("active");
    $(".recruitContent>div").addClass("invisible").eq(i).removeClass("invisible");
});
$(".significanceTabList li").click(function(e){
    e.preventDefault();
    var i=$(this).index();
    $(".significanceTabList li").removeClass("active").eq(i).addClass("active");
    $(".significanceContent>div").addClass("invisible").eq(i).removeClass("invisible");
});
