$(function() {
    // 导航栏鼠标点击切换active
    var navList = $('#gdin-nav .navbar-nav').children('li');
    // console.log(navList);
    navList.on('click', function(e) {
        $(this).each(function(i, el) {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });
    // navList.each(function(index, el) {
    //     $(this).on('mouseenter', function() {
    //         alert('message')
    //         $(this).addClass('active').siblings().removeClass('active');
    //     })
    // });
    // 侧边栏鼠标经过弹出子类
    var wrapperUl = $('#wrapper_first_ul');
    // 鼠标经过
    wrapperUl.children('li').on('mouseenter', function() {
        $(this).each(function(i, el) {
            $(this).addClass('active').children('.secmenu').css('display', 'block').end().siblings().removeClass('active').children('.secmenu').css('display', 'none');
            // $(this).;
            // $(this).siblings();
        });
    });
    // 鼠标离开
    wrapperUl.children('li').on('mouseleave', function() {
        $(this).removeClass('active').children('.secmenu').css('display', 'none')
    });

    // 文字滚动
    function ScrollTextLeft() {
    var speed = 50;
    var scroll_begin = document.getElementById("scroll_begin");
    var scroll_end = document.getElementById("scroll_end");
    var scroll_div = document.getElementById("scroll_div");
    scroll_end.innerHTML = scroll_begin.innerHTML;

    function Marquee() {
      if (scroll_end.offsetWidth - scroll_div.scrollLeft <= 0)
        scroll_div.scrollLeft -= scroll_begin.offsetWidth;
      else
        scroll_div.scrollLeft++;
    }
    var MyMar = setInterval(Marquee, speed);
    scroll_div.onmouseover = function() {
      clearInterval(MyMar);
    }
    scroll_div.onmouseout = function() {
      MyMar = setInterval(Marquee, speed);
    }
  }
  ScrollTextLeft();
})
