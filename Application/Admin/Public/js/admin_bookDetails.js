$(function(){
	$('#contactBtn').click(function() {
		$.ajax({
			type:'post',
			url:url,
			data:{isbn:num,type:type},
			dataType:'json',
			success:function(data){
				if (data==11) {
					location.href=url1;
				}else{
					location.href=url2;
				}
				alert('删除成功！');
			},
			error:function(err){
				alert("删除失败！");
			}
		});
	});
});