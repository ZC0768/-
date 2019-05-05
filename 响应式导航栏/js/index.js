$(document).ready(function () {
    var windowInnerHeight = window.innerHeight
    var windowInnerWidth = window.innerWidth
    var scale = 1
    if (windowInnerWidth >= 960) {
        scale = parseFloat(windowInnerWidth / 1920)
    } else if (windowInnerWidth > 750) {
        scale = 0.5
    } else {
        scale = parseFloat(windowInnerWidth /750)
    }

    $(document).ready(function () {
        //初始化宽度
        $('#header').width($(window).width());

        //当文档窗口发生改变时 触发
        $(window).resize(function () {
            $('#header').width($(window).width());
        })
    })

    $('.menu-btn').click(function () {
        var menuHeight = $('.menu-bar').innerHeight();
        if ($('#header').hasClass('open')) {
            $('#header').css('height', menuHeight).removeClass('open')
        } else {
            $('#header').css('height', parseFloat(100 / scale).toFixed(4) + '%').addClass('open')
        }



    })




})