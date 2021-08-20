$(document).ready(function(){
	
	/*비움*/
	var tdTag=$("td");
	var codeDelete="<div id='delete' style='display: inline-block;'><a href='#'>[비움]</a></div>";
	
	tdTag.append(codeDelete);
	
	
	getCode();
	function getCode(){
		/*숫자 드롭다운*/
		var dt = new Date();
		var com_year = dt.getFullYear();

		// 발행 뿌려주기
		$(".year").append("<option value=''>  </option>");

		// 올해 기준으로 -100년부터 +1년을 보여준다.
		for (var y = (com_year); y >= (com_year - 100); y--) {
			$(".year").append("<option value='" + y + "'>" + y + "</option>");
		}

		// 월 뿌려주기(1월부터 12월)
		$(".month").append("<option value=''> </option>");
		for (var i = 1; i <= 12; i++) {
			$(".month").append("<option value='" + i + "'>" + i + "</option>");
		}

		// 일 뿌려주기(1일부터 31일)
		$(".day").append("<option value=''> </option>");
		for (var i = 1; i <= 31; i++) {
			$(".day").append("<option value='" + i + "'>" + i + "</option>");
		}
		
		$(".number").append("<option value=''>  </option>");
		for(var i = 0; i <=20;i++){
			$(".number").append("<option value='"+i+"'>"+i + "</option>");
		}
		
		$(".age").append("<option value=''>  </option>");
		for(var i = 19; i <=60;i++){
			$(".age").append("<option value='"+i+"'>"+i + "</option>");
		}
		
		$(".soju").append("<option value=''>  </option>");
		for(var i = 0 ; i<=2;i+=0.5){
			$(".soju").append("<option value='"+i+"'>"+i+"</option>");
		}
		$(".beer").append("<option value=''>  </option>");
		for(var i = 0 ; i<=6;i++){
			$(".beer").append("<option value='"+i+"'>"+i+"</option>");
		}
		
		
		/*기술 드롭다운*/
		
		/*자격증 체크박스*/
		var certiChk = $("#certiChk");
		
		codeInfoService.getCertification(
			function(list){
				var str = "";
				if(list == null || list.length ==0){ }
				for(var i=0, len=list.length||0;i<len;i++){
				str +="<input type='checkbox' id='certification' name='certification' value='"+list[i].certification_code+"' />";
				str += list[i].certification_name;
				}
				certiChk.html(str);
					
			})	
		
		
		/*역할 체크박스*/
		
		var roleChk = $("#roleChk");
		codeInfoService.getRole(
			function(list){
				var str = "";
				if(list == null || list.length ==0){ }
				for(var i=0, len=list.length||0;i<len;i++){
				str +="<input type='checkbox' id='role' name='role' value='"+list[i].role_code+"' />";
				str += list[i].role_name;
				}
				
				roleChk.html(str);
					
			})
		
		/*학부 체크박스*/
		var	collegeChk = $("#collegeChk");
		codeInfoService.getCollege(
			function(list){
				var str ="";
				if(list== null|| list.length ==0){}
				for(var i=0, len=list.length-1||0;i<len;i++){
					str += "<input type='checkbox' id='role' name='role' value='"+list[i].college_code+"'/>";
					str += list[i].college_name;
				}
				collegeChk.html(str);
			})	
			
		var careerChk = $("#careerChk");
		codeInfoService.getCareer(
				function(list){
					var str ="";
					if(list== null|| list.length ==0){}
					for(var i=0, len=list.length-1||0;i<len;i++){
						str += "<input type='checkbox' id='role' name='role' value='"+list[i].career_code+"'/>";
						str += list[i].career_name;
					}
					careerChk.html(str);
				})	
			
		var	foreignlangRead = $("#foreignlangRead")
		var	foreignlangSpeak = $("#foreignlangSpeak")
			
		codeInfoService.getForeignlang(
				function(list){
					var str = "";
					var str1="";
					if(list == null || list.length ==0){ }
					for(var i=0, len=list.length||0;i<len;i++){
					str +="<input type='checkbox' id='foreignlang' name='foreignlangRead' value='"+list[i].foreignlang_code+"' />";
					str += list[i].foreignlang_name;
					}
					foreignlangRead.html(str);
					for(var i=0, len=list.length||0;i<len;i++){
					str1 +="<input type='checkbox' id='foreignlang' name='foreignlangSpeak' value='"+list[i].foreignlang_code+"' />";
					str1 += list[i].foreignlang_name;
					}
					foreignlangSpeak.html(str1);
				})	
				
		var militaryChk = $("#militaryChk");
		codeInfoService.getMilitary(
				function(list){
					var str ="";
					if(list== null|| list.length ==0){}
					for(var i=0, len=list.length-1||0;i<len;i++){
						str += "<input type='checkbox' id='role' name='role' value='"+list[i].military_code+"'/>";
						str += list[i].military_name;
					}
					militaryChk.html(str);
				})	
			
	}
})