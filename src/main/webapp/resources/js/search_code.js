$(document).ready(function(){
	/*검색갯수, n행 보기*/
	var criteriaCode="[검색 결과]: <div id='total'></div> "
		criteriaCode+="<select name='rowCount'>"
		criteriaCode+="<option value=''>5행 보기</option>";
		criteriaCode+="<option value='1'>1행 보기</option>"
		criteriaCode+="<option value='2'>2행 보기</option>"
		criteriaCode+="<option value='3'>3행 보기</option>"
		criteriaCode+="</select>"	
	$("#criteria").append(criteriaCode);
	
	
	/*비움*/
	var codeDelete="<a href='#'>[비움]</a>";
	$(".delete").append(codeDelete);
	
	
	
	/*양식입력*/
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
		$(".project_language").append("<option value=''>개발 언어</option>");
		codeInfoService.getLanguage(
			function(list){
				var str="";
				if(list== null|| list.length ==0){}
					for(var i=0, len=list.length||0;i<len;i++){
						str += "<option value='"+list[i].language_code+"'>"+list[i].language_name+"</option>";
					}
					$(".project_language").append(str);
			})
		$(".project_framework").append("<option value=''>개발 프레임워크</option>");
		codeInfoService.getFramework(
			function(list){
				var str="";
				if(list== null|| list.length ==0){}
					for(var i=0, len=list.length||0;i<len;i++){
						str += "<option value='"+list[i].framework_code+"'>"+list[i].framework_name+"</option>";
					}
					$(".project_framework").append(str);
			})
		$(".project_dbms").append("<option value=''>개발 DBMS</option>");
		codeInfoService.getDbms(
			function(list){
				var str="";
				if(list== null|| list.length ==0){}
					for(var i=0, len=list.length||0;i<len;i++){
						str += "<option value='"+list[i].dbms_code+"'>"+list[i].dbms_name+"</option>";
					}
					$(".project_dbms").append(str);
			})
			
		$(".project_devetc").append("<option value=''>개발 기타 스택</option>");
		codeInfoService.getDevetc(
			function(list){
				var str="";
				if(list== null|| list.length ==0){}
					for(var i=0, len=list.length||0;i<len;i++){
						str += "<option value='"+list[i].devetc_code+"'>"+list[i].devetc_name+"</option>";
					}
					$(".project_devetc").append(str);
			})
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
					str += "<input type='checkbox' id='college' name='college' value='"+list[i].college_code+"'/>";
					str += list[i].college_name;
				}
				collegeChk.html(str);
			})	
			
		var careerChk = $("#careerChk");
		codeInfoService.getCareer(
				function(list){
					var str ="";
					if(list== null|| list.length ==0){}
					for(var i=0, len=list.length||0;i<len;i++){
						str += "<input type='checkbox' id='career' name='career' value='"+list[i].career_code+"'/>";
						str += list[i].career_name;
					}
					careerChk.html(str);
				})	
			
		var	foreignlangRead = $("#foreignlangReadChk")
		var	foreignlangSpeak = $("#foreignlangSpeakChk")
			
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
					for(var i=0, len=list.length||0;i<len;i++){
						str += "<input type='checkbox' id='military' name='military' value='"+list[i].military_code+"'/>";
						str += list[i].military_name;
					}
					militaryChk.html(str);
				})	
			
	}
})