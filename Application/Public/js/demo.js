$(function() {
    bindBookTypeDialog();
    $.formValidator.initConfig({
        formID: "sell-book-form",
        theme: "Bull",
        submitOnce: true,
        onError: function(msg, obj, errorlist) {
            $("#errorlist").empty();
            $.map(errorlist, function(msg) {
                $("#errorlist").append("<li>" + msg + "</li>")
            });
            alert(msg);
            enableButton('submit_button');
        },
        ajaxPrompt: '有数据正在异步验证，请稍等...'
    });

    $('#' + bookModelName + '_title').formValidator({
        onShowText: "请输入书名",
        onFocus: ""
    }).inputValidator({
        min: 1,
        onError: "书名不能为空"
    });
    $('#' + bookModelName + '_author').formValidator({
        onShowText: "请输入作者",
        onFocus: ""
    }).inputValidator({
        min: 1,
        onError: "作者不能为空"
    });
    $('#' + bookModelName + '_press').formValidator({
        onShowText: "请输入出版社",
        onFocus: ""
    }).inputValidator({
        min: 1,
        onError: "出版社不能为空"
    });
    $('#' + bookModelName + '_isbn').formValidator({
        onShowText: "填写后可自动补全部分信息",
        onFocus: "8位issn码或13位isbn码"
    }).regexValidator({
        regExp: "^(\\d{8}|\\d{13})$|^$",
        onError: "8位issn码或13位isbn码"
    }).inputValidator({
        min: 1,
        onError: "isbn/issn码不能为空"
    });
    $('#' + bookModelName + '_original_price').formValidator({
        onShowText: "0~999.99之间",
        onFocus: ""
    }).
    inputValidator({
        type: 'number',
        min: 0.0,
        max: 999.99,
        onError: "原价数值错误"
    }).
    inputValidator({
        min: 1,
        onError: "原价不能为空"
    });
    var nowPriceTip = '免费赠送';
    if ('BuyBook' == bookModelName) {
        nowPriceTip = '求赠送';
    }
    $('#' + bookModelName + '_now_price').formValidator({
        onShowText: "0~999.99之间,0为" + nowPriceTip + "哦",
        onFocus: ""
    }).
    inputValidator({
        type: 'number',
        min: 0.0,
        max: 999.99,
        onError: "数值错误"
    }).
    inputValidator({
        min: 1,
        onError: "不能为空"
    });
    $('#' + bookModelName + '_count').formValidator({
        onShowText: "请输入数字",
        onFocus: "请输入数字"
    }).regexValidator({
        regExp: "^\\d*$|^$",
        onError: "请输入数字"
    }).inputValidator({
        min: 1,
        onError: "数量不能为空"
    });
    $('#' + bookModelName + '_quality').formValidator({
        onFocus: ""
    }).inputValidator({
        min: 1,
        onError: "新旧程度不能为空"
    });
    $('#' + bookModelName + '_book_type_id').formValidator({
        onFocus: ""
    }).inputValidator({
        min: 1,
        onError: "书籍分类不能为空"
    });
});

function fillByIsbn(modelName, type) {
    var modelPrefix = 'input#' + modelName;
    var isbn = $(modelPrefix + '_isbn').val();
    var re = /^(\d{8}|\d{13})$/;
    if (!re.test(isbn)) {
        alert('8位issn码或13位isbn码');
        return;
    }
    $.ajax({
        url: g_bookSearchUrl + '?isbn=' + isbn + '&type=' + type,
        type: 'GET',
        timeout: 1000,
        dataType: 'JSON',
        error: function() {
            popupMessage('提示消息', '<span class="notice_fail">很抱歉，没有找到你要的书籍信息，请手工输入!</span>', 600, false);
        },
        success: function(returnInfo) {
            if (returnInfo.errMsg != '') {
                popupMessage('提示消息', '<span class="notice_fail">' + returnInfo.errMsg + '</span>', 600, false);
                $(modelPrefix + '_isbn').val('')
            } else {
                var data = returnInfo.data;
                $(modelPrefix + '_title').val(data.title);
                $(modelPrefix + '_title').blur();
                $(modelPrefix + '_title').removeAttr('style');
                $(modelPrefix + '_author').val(data.author);
                $(modelPrefix + '_author').blur();
                $(modelPrefix + '_author').removeAttr('style');
                $(modelPrefix + '_press').val(data.press);
                $(modelPrefix + '_press').blur();
                $(modelPrefix + '_press').removeAttr('style');
                $(modelPrefix + '_original_price').val(data.original_price);
                $(modelPrefix + '_original_price').blur();
                $(modelPrefix + '_original_price').removeAttr('style');
                $('div#selected_book_img_div').html('<div class="book_pic_border"><img class="book_pic" src="' + data.img_path + '"/></div>');
                $('input.book_pic_path').val(data.img_path);
                $('a#delete_book_img_link').show();
                $(modelPrefix + '_now_price').focus();
                popupMessage('提示消息', '<span class="notice_success">已自动填写书籍的部分信息，请补充其它信息</span>', 600, true);
            }
        }
    });
}

function getBookOriPrice(returnData) {
    if (returnData.price != undefined) {
        var price = returnData.price;
        var re = /\d+(\.\d+)?/;
        var matchResultArr = re.exec(price);
        return matchResultArr[0];
    }
    return '';
}

function getBookAuthor(returnData) {
    if (returnData.translator != undefined && returnData.translator.length > 0) {
        return returnData.translator.join(',');
        $(function() {
            bindBookTypeDialog();
            $.formValidator.initConfig({
                formID: "sell-book-form",
                theme: "Bull",
                submitOnce: true,
                onError: function(msg, obj, errorlist) {
                    $("#errorlist").empty();
                    $.map(errorlist, function(msg) {
                        $("#errorlist").append("<li>" + msg + "</li>")
                    });
                    alert(msg);
                    enableButton('submit_button');
                },
                ajaxPrompt: '有数据正在异步验证，请稍等...'
            });

            $('#' + bookModelName + '_title').formValidator({
                onShowText: "请输入书名",
                onFocus: ""
            }).inputValidator({
                min: 1,
                onError: "书名不能为空"
            });
            $('#' + bookModelName + '_author').formValidator({
                onShowText: "请输入作者",
                onFocus: ""
            }).inputValidator({
                min: 1,
                onError: "作者不能为空"
            });
            $('#' + bookModelName + '_press').formValidator({
                onShowText: "请输入出版社",
                onFocus: ""
            }).inputValidator({
                min: 1,
                onError: "出版社不能为空"
            });
            $('#' + bookModelName + '_isbn').formValidator({
                onShowText: "填写后可自动补全部分信息",
                onFocus: "8位issn码或13位isbn码"
            }).regexValidator({
                regExp: "^(\\d{8}|\\d{13})$|^$",
                onError: "8位issn码或13位isbn码"
            }).inputValidator({
                min: 1,
                onError: "isbn/issn码不能为空"
            });
            $('#' + bookModelName + '_original_price').formValidator({
                onShowText: "0~999.99之间",
                onFocus: ""
            }).
            inputValidator({
                type: 'number',
                min: 0.0,
                max: 999.99,
                onError: "原价数值错误"
            }).
            inputValidator({
                min: 1,
                onError: "原价不能为空"
            });
            var nowPriceTip = '免费赠送';
            if ('BuyBook' == bookModelName) {
                nowPriceTip = '求赠送';
            }
            $('#' + bookModelName + '_now_price').formValidator({
                onShowText: "0~999.99之间,0为" + nowPriceTip + "哦",
                onFocus: ""
            }).
            inputValidator({
                type: 'number',
                min: 0.0,
                max: 999.99,
                onError: "数值错误"
            }).
            inputValidator({
                min: 1,
                onError: "不能为空"
            });
            $('#' + bookModelName + '_count').formValidator({
                onShowText: "请输入数字",
                onFocus: "请输入数字"
            }).regexValidator({
                regExp: "^\\d*$|^$",
                onError: "请输入数字"
            }).inputValidator({
                min: 1,
                onError: "数量不能为空"
            });
            $('#' + bookModelName + '_quality').formValidator({
                onFocus: ""
            }).inputValidator({
                min: 1,
                onError: "新旧程度不能为空"
            });
            $('#' + bookModelName + '_book_type_id').formValidator({
                onFocus: ""
            }).inputValidator({
                min: 1,
                onError: "书籍分类不能为空"
            });
        });

        function fillByIsbn(modelName, type) {
            var modelPrefix = 'input#' + modelName;
            var isbn = $(modelPrefix + '_isbn').val();
            var re = /^(\d{8}|\d{13})$/;
            if (!re.test(isbn)) {
                alert('8位issn码或13位isbn码');
                return;
            }
            $.ajax({
                url: g_bookSearchUrl + '?isbn=' + isbn + '&type=' + type,
                type: 'GET',
                timeout: 1000,
                dataType: 'JSON',
                error: function() {
                    popupMessage('提示消息', '<span class="notice_fail">很抱歉，没有找到你要的书籍信息，请手工输入!</span>', 600, false);
                },
                success: function(returnInfo) {
                    if (returnInfo.errMsg != '') {
                        popupMessage('提示消息', '<span class="notice_fail">' + returnInfo.errMsg + '</span>', 600, false);
                        $(modelPrefix + '_isbn').val('')
                    } else {
                        var data = returnInfo.data;
                        $(modelPrefix + '_title').val(data.title);
                        $(modelPrefix + '_title').blur();
                        $(modelPrefix + '_title').removeAttr('style');
                        $(modelPrefix + '_author').val(data.author);
                        $(modelPrefix + '_author').blur();
                        $(modelPrefix + '_author').removeAttr('style');
                        $(modelPrefix + '_press').val(data.press);
                        $(modelPrefix + '_press').blur();
                        $(modelPrefix + '_press').removeAttr('style');
                        $(modelPrefix + '_original_price').val(data.original_price);
                        $(modelPrefix + '_original_price').blur();
                        $(modelPrefix + '_original_price').removeAttr('style');
                        $('div#selected_book_img_div').html('<div class="book_pic_border"><img class="book_pic" src="' + data.img_path + '"/></div>');
                        $('input.book_pic_path').val(data.img_path);
                        $('a#delete_book_img_link').show();
                        $(modelPrefix + '_now_price').focus();
                        popupMessage('提示消息', '<span class="notice_success">已自动填写书籍的部分信息，请补充其它信息</span>', 600, true);
                    }
                }
            });
        }

        function getBookOriPrice(returnData) {
            if (returnData.price != undefined) {
                var price = returnData.price;
                var re = /\d+(\.\d+)?/;
                var matchResultArr = re.exec(price);
                return matchResultArr[0];
            }
            return '';
        }

        function getBookAuthor(returnData) {
            if (returnData.translator != undefined && returnData.translator.length > 0) {
                return returnData.translator.join(',');
