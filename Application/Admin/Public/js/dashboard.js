$(function(){
	$('#SendInfoForm').submit(function(event){
		event.preventDefault();
		let SendInfoFormData = $('#SendInfoForm').serializeArray();
		$.ajax({
			type:'post',
			url:url,
			data:SendInfoFormData,
			dataType:'json',
			success:function(data){
				if (data !== 0) {
					console.log(data);
					alert("发布成功!");
				}else{
					alert("发布失败!");
				}
			},
			error:function(err){
				console.log(err);
				alert("发布失败!");
			}
		});
	});
});