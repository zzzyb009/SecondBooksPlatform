$(function(){
	//登录
	$("#Form").submit(function(event){
		event.preventDefault();
		let myFormData = $("#Form").serializeArray();
		$.ajax({
 			type:'post',
 			url:url,
 			data:myFormData,
 			dataType:'json',
 			success:function(data){
 				if(data == 1){
 					location.href = url1;
 				}else if (data == 2){
 					alert('用户不存在！');
 				}else{
 					alert('用户名或密码错误！');
 				}
 			},
 			error:function(err){
 				alert('error');
 				console.log(err);
 			}
 		});
 	});
});