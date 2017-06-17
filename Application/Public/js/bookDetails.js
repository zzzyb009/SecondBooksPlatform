$(function() {
  var btn = $("#contactBtn");
  btn.click(function(event) {
    $.ajax({
      type:"post",
      url:$url,
      data:$msg,
      dateType:"json",
      success:function(data){
        btn.html(data);
      },
      error:function(data){
        alert("系统错误！");
      },
    });
  });

  $('#collectionBtn').click(function(){
    $.ajax({
      type:"post",
      url:url1,
      data:$msg,
      dateType:"json",
      success:function(data){
        if (data == 1) {
          alert("已经收藏");
        }else{
          alert('收藏成功');
        }
      },
      error:function(data){
        alert("系统错误！");
      },
    });
  });
})
