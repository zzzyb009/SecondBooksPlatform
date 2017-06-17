$(function(){
	// 修改联系人资料
 	$('#ChangeContacts').submit(function(event){
 		event.preventDefault();
 		let FormData = $("#ChangeContacts").serializeArray();
 		$.ajax({
 			type:'post',
 			url:"changeContact",
 			data:FormData,
 			dataType:'json',
 			success:function(data){
 				if (data==1) {
 					alert('修改成功！');
 				}else{
 					alert('修改失败！');
 				}
 			},
 			error:function(){
 				alert('修改失败！');
 			},
 		});
 	});
 	// 修改密码
 	$('#changePasswords').submit(function(event) {
 		event.preventDefault();
 		let FormData = $('#changePasswords').serializeArray();
 		$.ajax({
 			type:"post",
 			url:"changePassword",
 			data:FormData,
 			dataType:"json",
 			success:function(msg){
 				if (msg==1) {
 					alert("修改成功！");
 				}else{
 					alert("修改失败！");
 				}
 			},
 			error:function(){
 				alert('修改失败！');
 			},
 		});
 	});
 	// 出售书籍
 	// $("#SellBook").submit(function(event) {
 	// 	// event.preventDefault();
 	// 	let FormData = $("#SellBook").serializeArray();
 	// 	$imgPath = $("#book_pic").val();
 	// 	console.log($imgPath);
 	// 	// console.log(FormData);
 	// 	$.ajax({
 	// 		type:'post',
 	// 		url:"sellBook",
 	// 		data:{ FormData , imgPath: $("#book_pic").val() },
 	// 		dataType:"json",
 	// 		success:function(data){
 	// 			alert(data);
 	// 		},
 	// 		error:function(data){
 	// 			console.log(data)
 	// 			alert("添加失败！");
 	// 		}

 	// 	});
 	// });
});