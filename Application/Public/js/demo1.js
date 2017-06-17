$(function() {
    // 上传图片按钮
    var loadPic = $('.gdin-sell-form .load-pic');
    loadPic.on("change", "input[type='file']", function() {
        var filePath = $(this).val();
        //不等于-1表示包含该字符串
        if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
            $(".fileerrorTip").html("").hide();
            var arr = filePath.split('\\');
            var fileName = arr[arr.length - 1];
            // $(".showFileName").html(fileName);
        } else {
            // $(".showFileName").html("");
            $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
            return false
        }
    });
    // 显示缩略图
    $(".gdin-sell-form #book_pic").on("change", function() {
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

                $(".gdin-sell-form #uploadPreview").css({
                    'display': 'inline-block',
                    'background-image': 'url(' + this.result + ')'
                });;

            }

        } else {
            $(".gdin-sell-form #uploadPreview").css('background', 'none');;
        }
    });
    // 验证
    // isbn码验证
    $('.gdin-sell-form #book_isbn').blur(function(event) {
        var isbn = $(this).val();
        console.log(isbn);
        if (isbn != null && isbn != '') {
            if (!isNaN(isbn) && isbn > 0) {
                if (isbn.length == 8 || isbn.length == 13) {
                    $('.gdin-sell-form #book_isbn_tips').removeClass('onError').addClass('onCorrect').html('');
                } else {
                    $('.gdin-sell-form #book_isbn_tips').removeClass('onCorrect').addClass('onError').html('请输入正确格式');
                }
            } else {
                $('.gdin-sell-form #book_isbn_tips').removeClass('onCorrect').addClass('onError').html('ISBN码只能是数字');
            }
        } else {
            $('.gdin-sell-form #book_isbn_tips').removeClass('onCorrect').addClass('onError').html('ISBN码不能为空');
            $('.gdin-sell-form #book_isbn').focus();
        }
    });
    // 出版社验证
    checkBOOK('.gdin-sell-form #book_press', '出版社');
    // 书名验证
    checkBOOK('.gdin-sell-form #book_name', '书名');
    // 作者验证
    checkBOOK('.gdin-sell-form #book_author', '作者');

    // 原价验证
    checkBOOK('.gdin-sell-form #book_original_price', '原价', true);
    // 现价验证
    checkBOOK('.gdin-sell-form #book_new_price', '现价', true);
    // 数量验证
    checkBOOK('.gdin-sell-form #book_number', '数量', true);
    // 新旧程度验证
    $('.gdin-sell-form #book_quality').on('blur', function(event) {
        // console.log($(this).val());
        if ($(this).val() == '11') {
            $('.gdin-sell-form #book_quality_tips').removeClass('onCorrect').addClass('onError').html('请选择新旧程度');
        } else {
            $('.gdin-sell-form #book_quality_tips').removeClass('onError').addClass('onCorrect').html('');
        }
    });
    // 书籍分类验证
    $('.gdin-sell-form #book_type_id').on('blur', function(event) {
        console.log($(this).val());
        if ($(this).val() != '11') {
            $('.gdin-sell-form #book_type_id_tips').removeClass('onError').addClass('onCorrect').html('');
        } else {
            $('.gdin-sell-form #book_type_id_tips').removeClass('onCorrect').addClass('onError').html('请选择书籍分类');

        }
    });
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
});

// var isTrue = false;

// 验证是否是数字
// function bookIsNaN(id, numName) {
//     $(id).blur(function(event) {
//         var bookValue = $(this).val();
//         if (!isNaN(bookValue) && bookValue > 0) {
//             $('' + id + '_tips').removeClass('onError').addClass('onCorrect').html('');
//         } else {
//             $('' + id + '_tips').removeClass('onCorrect').addClass('onError').html('' + numName + '只能是数字');
//             $(id).focus();
//         }
//     });

// };
