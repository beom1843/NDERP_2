$(document).ready(function(){
	var religion_Drp =$("#religion_drp");
	
	getCode();
	function getCode(){
		codeInfoService.getReligion(
		function(list){
			console.log("inside getReligion");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='religion' name='religion_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].religion_code+"'>"+list[i].religion_name+"</option>";
			}
			str +="</select>";
			
			religion_Drp.html(str);
		})
	}

})