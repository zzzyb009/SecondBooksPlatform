$(function(){
	// cahgne password
	$('#ChangeForm').submit(function(event){
		event.preventDefault();
		let CFormData = $('#ChangeForm').serializeArray();
		$.ajax({
			type:'post',
			url:url,
			data:CFormData,
			dataType:'json',
			success:function(data){
				if (data !== 0) {
					console.log(data);
					alert('修改成功！');
				}else{
					alert("修改失败！");
				}
				document.getElementById("ChangeForm").reset();
			},
			error:function(err){
				console.log(err);
				alert('修改失败！');
				document.getElementById("ChangeForm").reset();
			}
		});
	});
});