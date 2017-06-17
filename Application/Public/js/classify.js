$(function() {
    // 导航栏鼠标点击切换active
    var navList = $('#gdin-nav .navbar-nav').children('li');
    // console.log(navList);
    navList.on('click', function(e) {
        $(this).each(function(i, el) {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });
    // 侧边栏鼠标经过弹出子类
    var wrapperUl = $('#wrapper_first_ul');
    // 导航栏的分类菜单
    var menu = $('#nav_menu')

    // 鼠标经过导航栏的分类菜单
    menu.on('mouseenter', function() {
            wrapperUl.css('display', 'block').on('mouseenter', function() {
                $(this).css('display', 'block').on('mouseleave', function() {
                    $(this).css('display', 'none');
                });
            });
        })
        // 鼠标离开导航栏的分类菜单
    menu.on('mouseleave', function() {
            wrapperUl.css('display', 'none');
        })
        // 鼠标经过分类父盒子
    wrapperUl.children('li').on('mouseenter', function() {
        $(this).each(function(i, el) {
            $(this).addClass('active').children('.secmenu').css('display', 'block').end().siblings().removeClass('active').children('.secmenu').css('display', 'none');
            // $(this).;
            // $(this).siblings();
        });
    });
    // 鼠标离开分类父盒子
    wrapperUl.children('li').on('mouseleave', function() {
        $(this).removeClass('active').children('.secmenu').css('display', 'none')
    });
});
