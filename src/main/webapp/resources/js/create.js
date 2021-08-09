$(document).ready(function(){

	$("#submit").on("click",function(e){
		e.preventDefault();
		
		console.log("submit!!")
		var id = $("#id").val();
		console.log(id);
	
		var message = "";
		var isAllOk =0;
		
		if(!id){
			message+="**[미입력사항]** \n";
		}	
		if(!id){
			message +=" - 아이디 \n";
			isAllOk +=1;
		}
		if(isAllOk !==0){
			alert(message);
		}
			
		})
	
	
})
	
