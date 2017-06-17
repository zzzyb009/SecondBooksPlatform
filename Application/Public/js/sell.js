$(function() {
    var data = [{
        // 书名
        bookName: '向日葵不开的夏天',
        // 作者
        author: '于彤彤',
        // 出版社
        // press: '',
        // 封面图
        pic: '/Application/Public/images/sell-book-01.jpg',
        // 原价
        original_price: '28.00',
        // 售价
        new_price: '20.00',
        // 数量
        number: '1',
        // 新旧程度
        quality: '九成新',
        // 书籍分类
        // type_id: ''
    }, {
        // 书名
        bookName: '斗破苍穹16',
        // 作者
        author: '天蚕土豆',
        // 出版社
        // press: '',
        // 封面图
        pic: '/Application/Public/images/doupocangqiong.jpg',
        // 原价
        original_price: '756.00',
        // 售价
        new_price: '158.00',
        // 数量
        number: '27',
        // 新旧程度
        quality: '全新',
        // 书籍分类
        // type_id: ''
    }];
    // 定义此字符段，应放在循环外面，不然会被覆盖而不是添加
    var str = '';
    for (var i = 0; i < data.length; i++) {
        //定义折扣计算公式 .toFixed(n)四舍五入保留N位小数
        var zhekou = (data[i].new_price / data[i].original_price * 10).toFixed(1);

        str += '<div class="sell-body clearfix">';
        str += '<div class="book-pic pull-left">';
        str += '<a href="javascript;"> <img src="' + data[i].pic + '" alt="" /></a>';
        str += '</div>';
        str += '<div class="book-info pull-left">';
        str += '<div class="info-title"><a href="javascript;">' + data[i].bookName + '</a></div>';
        str += '<div class="info-detail">';
        str += '<p>作者: ' + data[i].author + '</p>';
        str += '<p>新旧: ' + data[i].quality + '</p>';
        str += '<p class="new-price">售价: <span>&yen;' + data[i].new_price + '</span></p>';
        str += '<p class="original-price">原价: <span>&yen;' + data[i].original_price + '</span></p>';
        str += '<p>折扣: ' + zhekou + '折</p>';
        str += '<p>数量: ' + data[i].number + '</p>';
        str += '</div>';
        str += '<div class="info-bottom"><a href="#" type="button" class="btn btn-default">';
        str += '查看联系方式</a></div>';
        str += '</div>';
        str += '</div>';

    }
    var sellBox = $('.sellbody-box');
    // console.log(str);
    sellBox.html(str);


});
