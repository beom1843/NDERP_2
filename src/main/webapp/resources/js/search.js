$(document).ready(function(){
	
	
	$("#create_btn").on("click",function(e){
		e.preventDefault(e);
		var url="create";
		var name="정규직 입력";
		var option="height=100";
		window.open(url,name,option);
	})
	
})