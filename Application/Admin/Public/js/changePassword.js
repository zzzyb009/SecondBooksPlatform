$(function(){
	console.log(url);
	$("#freshPassword").submit(function(e){
		e.preventDefault();
		let freshPasswordForm = $('#freshPassword').serializeArray();
		$.ajax({
			type:'post',
			url:url,
			data:freshPasswordForm,
			dataType:'json',
			success:function(data){
				console.log(data)
				if (data==1) {
					alert('success')
				}else if(data == 0){
					alert("failed")
				}else{
					alert('failed')
				}
			},
			error:function(err){
				console.log(err)
				alert('0')
			}
		});
	});
});