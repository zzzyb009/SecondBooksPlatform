/*
 * @Author: bin
 * @Date:   2017-04-05 10:17:09
 * @Last Modified by:   bin
 * @Last Modified time: 2017-04-05 16:10:25
 */

$(function() {
    //侧边栏栏切换
    //获取侧边栏元素
    var ulLis = $('#sidebar ul li');
    var centerBox = $('#center').children();
    // console.log(centerBox);
    // console.log(ulLis);
    ulLis.each(function(i, el) {
        $(this).on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            centerBox.eq(i).show().siblings().hide();
            //判断页面高度是否足够撑起最下尾部盒子
            // console.log($("#center").height())
            if ($("#center").height() < 250) {
                $("#gdin-footer").addClass('fixBottom');
            } else {
                $("#gdin-footer").removeClass('fixBottom');
            }
        });
    });
    //
    //
    //
    //
    //我的出售模块
    //模拟数据
    // var data = [{
    //     // 书名
    //     bookName: '向日葵不开的夏天',
    //     // 作者
    //     author: '于彤彤',
    //     // 出版社
    //     // press: '',
    //     // 封面图
    //     pic: '/Application/Public/images/sell-book-01.jpg',
    //     // 售价
    //     new_price: '20.00',
    // }, {
    //     // 书名
    //     bookName: '斗破苍穹16',
    //     // 作者
    //     author: '天蚕土豆',
    //     // 出版社
    //     // press: '',
    //     // 封面图
    //     pic: '/Application/Public/images/doupocangqiong.jpg',
    //     // 原价
    //     original_price: '756.00',
    //     // 售价
    //     new_price: '158.00',
    //     // 数量
    //     number: '27',
    //     // 新旧程度
    //     quality: '全新',
    //     // 书籍分类
    //     // type_id: ''
    // }, {
    //     // 书名
    //     bookName: '向日葵不开的夏天',
    //     // 作者
    //     author: '于彤彤',
    //     // 出版社
    //     // press: '',
    //     // 封面图
    //     pic: '/Application/Public/images/sell-book-01.jpg',
    //     // 售价
    //     new_price: '20.00',
    // }, {
    //     // 书名
    //     bookName: '斗破苍穹16',
    //     // 作者
    //     author: '天蚕土豆',
    //     // 出版社
    //     // press: '',
    //     // 封面图
    //     pic: '/Application/Public/images/doupocangqiong.jpg',
    //     // 原价
    //     original_price: '756.00',
    //     // 售价
    //     new_price: '158.00',
    //     // 数量
    //     number: '27',
    //     // 新旧程度
    //     quality: '全新',
    //     // 书籍分类
    //     // type_id: ''
    // }, {
    //     // 书名
    //     bookName: '向日葵不开的夏天',
    //     // 作者
    //     author: '于彤彤',
    //     // 出版社
    //     // press: '',
    //     // 封面图
    //     pic: '/Application/Public/images/sell-book-01.jpg',
    //     // 售价
    //     new_price: '20.00',
    // }];



    // var str = '';
    // for (var i = 0; i < data.length; i++) {

    //     str += '<li class="clearfix">';
    //     str += '<div class="picBox">';
    //     str += '<a href="javascript;">';
    //     str += '<img src=' + data[i].pic + ' alt="" />';
    //     str += '</a>';
    //     str += '</div>';
    //     str += '<div class="bookDetails">';
    //     str += '<a href="javascript;"><h3>' + data[i].bookName + '</h3></a>';
    //     str += '<p>作者：' + data[i].author + '</p>';
    //     str += '<p>价格：￥' + data[i].new_price + '</p>';
    //     str += '</div>';
    //     str += '</li>';

    // }
    // $('#mySell .mySellBox ul').html(str);
    //////////
    //求购也在这 //
    //////////
    // $('#myBuy .myBuyBox ul').html(str);
    //////////
    // 收藏在这 //
    //////////
    // $('#myCollection .myCollectionBox ul').html(str);








    ////////////
    //修改密码模块 //
    ////////////
    $('.changePasswordSubmit').on('click', function() {
        var newPassword = $('#newPassword').val();
        var newAgain = $('#newAgain').val();
        checkPassword(newPassword, '#newPassword');

        if (newPassword != newAgain) {
            $('#newAgain').next().html('两次输入密码不一样').css('color', 'red');
        } else {
            checkPassword(newAgain, '#newAgain');
            $('#newAgain').next().html('√').css('color', 'green');
        }
    });

    function checkPassword(str, id) {
        var checked = /(^[a-zA-Z]\w{5,17}$)/
        if (str.match(checked)) {
            $(id).next().html('格式正确').css('color', 'green')
        } else {
            $(id).next().html('以字母开头，不能含有特殊字符，长度在6-18之间').css('color', 'red')
        }
    }


    //
    //
    /////////////////
    // 出售书籍&求购书籍模块 //
    /////////////////
    // 上传图片按钮
    onLoadPic('#gdin-sell-form');
    onLoadPic('#gdin-buy-form');

    function onLoadPic(id) {
        $("" + id + " .load-pic").on("change", "input[type='file']", function() {
            var filePath = $(this).val();
            //不等于-1表示包含该字符串
            if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
                $("" + id + " .fileerrorTip").html("").hide();
                var arr = filePath.split('\\');
                var fileName = arr[arr.length - 1];
                // $(".showFileName").html(fileName);
            } else {
                // $(".showFileName").html("");
                $("" + id + " .fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
                return false
            }
        });
    }
    // 显示缩略图
    showSmallPic('#gdin-sell-form');
    showSmallPic('#gdin-buy-form');

    function showSmallPic(id) {
        $("" + id + " #book_pic").on("change", function() {
            // Get a reference to the fileList
            var files = !!this.files ? this.files : [];
            // If no files were selected, or no FileReader support, return
            if (!files.length || !window.FileReader) return;
            // Only proceed if the selected file is an image
            if (/^image/.test(files[0].type)) {
                // Create a new instance of the FileReader
                var reader = new FileReader();
                // Read the local file as a DataURL
                reader.readAsDataURL(files[0]);
                // When loaded, set image data as background of div
                reader.onloadend = function() {
                    $("" + id + " #uploadPreview").css({
                        'display': 'inline-block',
                        'background-image': 'url(' + this.result + ')'
                    });;
                }
            } else {
                $("" + id + " #uploadPreview").css('background', 'none');;
            }
        });
    }
    // 验证
    // isbn码验证
    checkISBN('#gdin-sell-form');
    checkISBN('#gdin-buy-form');

    function checkISBN(id) {
        $("" + id + " #book_isbn").blur(function(event) {
            var isbn = $(this).val();
            // console.log(isbn);
            if (isbn != null && isbn != '') {
                if (!isNaN(isbn) && isbn > 0) {
                    if (isbn.length == 8 || isbn.length == 13) {
                        $("" + id + " #book_isbn_tips").removeClass('onError').addClass('onCorrect').html('');
                    } else {
                        $("" + id + " #book_isbn_tips").removeClass('onCorrect').addClass('onError').html('请输入正确格式');
                    }
                } else {
                    $("" + id + " #book_isbn_tips").removeClass('onCorrect').addClass('onError').html('ISBN码只能是数字');
                }
            } else {
                $("" + id + " #book_isbn_tips").removeClass('onCorrect').addClass('onError').html('ISBN码不能为空');
                $("" + id + " #book_isbn").focus();
            }
        });
    }
    // 出版社验证
    checkBOOK('#gdin-sell-form #book_press', '出版社');
    checkBOOK('#gdin-buy-form #book_press', '出版社');
    // 书名验证
    checkBOOK('#gdin-sell-form #book_name', '书名');
    checkBOOK('#gdin-buy-form #book_name', '书名');
    // 作者验证
    checkBOOK('#gdin-sell-form #book_author', '作者');
    checkBOOK('#gdin-buy-form #book_author', '作者');

    // 原价验证
    checkBOOK('#gdin-sell-form #book_original_price', '原价', true);
    checkBOOK('#gdin-buy-form #book_original_price', '原价', true);
    // 现价验证
    checkBOOK('#gdin-sell-form #book_new_price', '现价', true);
    checkBOOK('#gdin-buy-form #book_new_price', '现价', true);
    // 数量验证
    checkBOOK('#gdin-sell-form #book_number', '数量', true);
    checkBOOK('#gdin-buy-form #book_number', '数量', true);
    // 新旧程度验证
    checkQuality('#gdin-sell-form');
    checkQuality('#gdin-buy-form');

    function checkQuality(id) {
        $("" + id + " #book_quality").on('blur', function(event) {
            // console.log($(this).val());
            if ($(this).val() == '11') {
                $("" + id + " #book_quality_tips").removeClass('onCorrect').addClass('onError').html('请选择新旧程度');
            } else {
                $("" + id + " #book_quality_tips").removeClass('onError').addClass('onCorrect').html('');
            }
        });
    }
    // 书籍分类验证
    checkType('#gdin-sell-form');
    checkType('#gdin-buy-form');

    function checkType(id) {
        $("" + id + " #book_type_id").on('blur', function(event) {
            // console.log($(this).val());
            if ($(this).val() != '11') {
                $("" + id + " #book_type_id_tips").removeClass('onError').addClass('onCorrect').html('');
            } else {
                $("" + id + " #book_type_id_tips").removeClass('onCorrect').addClass('onError').html('请选择书籍分类');

            }
        });
    }
    // console.log(isTrue);
    // 验证是否未输入值
    function checkBOOK(id, string, flag) {
        $(id).blur(function(event) {
            var bookValue = $(this).val();
            if (bookValue != null && bookValue != '') {
                $('' + id + '_tips').removeClass('onError').addClass('onCorrect').html('');
                if (flag) {
                    // 判断是否为数字
                    $(id).blur(function(event) {
                        var bookValue = $(this).val();
                        if (!isNaN(bookValue) && bookValue > 0) {
                            $('' + id + '_tips').removeClass('onError').addClass('onCorrect').html('');
                        } else {
                            $('' + id + '_tips').removeClass('onCorrect').addClass('onError').html('' + string + '只能是数字');
                            $(id).focus();
                        }
                    });
                }
                // console.log(isTrue);
            } else {
                $('' + id + '_tips').removeClass('onCorrect').addClass('onError').html('' + string + '不能为空');
                $(id).focus();
            }
        });
    };
  // 发布人说字数限制
  checkNum('#gdin-sell-form');
  checkNum('#gdin-buy-form');
    function checkNum(id) {
        $("" + id + " .textinput").blur(function() {
            var textLength = $(this).val().length;
            if (textLength >= 100) {
                $("" + id + " #book_comment_tip").removeClass('onCorrect').addClass('onError').html('请输入小于100个字符');
                $("" + id + " #book_comment").focus();
            } else {
                $("" + id + " #book_comment_tip").removeClass('onError').addClass('onCorrect').html('')
            }
        });
    }


})
