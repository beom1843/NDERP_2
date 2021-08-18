$(document).ready(function(){
	var religion_Drp =$("#religion_drp");
	var military_Drp =$("#military_drp");
	var hotline_Drp =$("#hotline_drp");
	var bank_Drp =$("#bank_drp");
	var date_ym_Drp =$(".date_ym_drp");
	var college_Drp = $(".college");
	var family_relat_Drp=$("#family_relat_drp");
	var family_y_Drp = $("#family_y_drp");
	var career_Drp = $("#career_drp");
	var career_dept_Drp = $("#career_dept_drp");
	var career_posit_Drp = $("#career_posit_drp");
	var career_hired_Drp = $("#career_hired_drp");
	var career_sal_Drp = $("#career_sal_drp");
	var certification_Chk = $("#certification_chk");
	var foreignlang_read = $("#foreignlang_read");
	var foreignlang_speak = $("#foreignlang_speak");
	var inst_m_Drp = $("#inst_m_drp");
	var inst_ymd_Drp = $("#inst_ymd_drp");
	var inst_stack_Chk = $("#inst_stack_chk");
	var smoking_Drp = $("#smoking_drp");
	var beer_Drp = $("#beer_drp");
	var soju_Drp = $("#soju_drp");
	var interest_Chk = $("#interest_chk");
	var project_server_Drp=$(".project_server_drp");
	var project_os_Drp=$(".project_os_drp");
	var project_language_Drp=$(".project_language_drp");
	var project_framework_Drp=$(".project_framework_drp");
	var project_dbms_Drp=$(".project_dbms_drp");
	var project_devetc_Drp=$(".project_devetc_drp");
	var project_role_Chk = $("#project_role_chk");
	
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
		
		codeInfoService.getMilitary(
		function(list){
			console.log("inside getMilitary");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='military' name='military_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].military_code+"'>"+list[i].military_name+"</option>";
			}
			str +="</select>";
			
			military_Drp.html(str);
		})
		
				codeInfoService.getHotline(
		function(list){
			console.log("inside getHotline");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='hotline' name='hotline_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].hotline_code+"'>"+list[i].hotline_name+"</option>";
			}
			str +="</select>";
			
			hotline_Drp.html(str);
		})
		
		codeInfoService.getBank(
		function(list){
			console.log("inside getBank");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='bank' name='bank_code' >";
			str += "<option value = '' selected disabled hidden>--은행선택--</option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].bank_code+"'>"+list[i].bank_name+"</option>";
			}
			str +="</select>";
			
			bank_Drp.html(str);
		})
		
		codeInfoService.getCollege(
		function(list){
			console.log("inside getCollege");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].college_code+"'>"+list[i].college_name+"</option>";
			}
			
			college_Drp.html(str);
		})
		
		codeInfoService.getFamily(
		function(list){
			console.log("inside getFamily");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='family' name='family_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].family_code+"'>"+list[i].family_name+"</option>";
			}
			str +="</select>";
			
			family_relat_Drp.html(str);
		})
		
		codeInfoService.getCareer(
		function(list){
			console.log("inside getCareer");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='career' name='career_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].career_code+"'>"+list[i].career_name+"</option>";
			}
			str +="</select>";
			
			career_Drp.html(str);
		})
		
		codeInfoService.getPosition(
		function(list){
			console.log("inside getPosition");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='position' name='position_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].position_code+"'>"+list[i].position_name+"</option>";
			}
			str +="</select>";
			
			career_posit_Drp.html(str);
		})
		
		
		codeInfoService.getDepartment(
		function(list){
			console.log("inside getDepartment");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='department' name='department_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].department_code+"'>"+list[i].department_name+"</option>";
			}
			str +="</select>";
			
			career_dept_Drp.html(str);
		})		
		
		codeInfoService.getHired(
		function(list){
			console.log("inside getHired");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='hired' name='hired_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].hired_code+"'>"+list[i].hired_name+"</option>";
			}
			str +="</select>";
			
			career_hired_Drp.html(str);
		})

		codeInfoService.getSmoking(
		function(list){
			console.log("inside getSmoking");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='smoking' name='smoking_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].smoking_code+"'>"+list[i].smoking_name+"</option>";
			}
			str +="</select>";
			
			smoking_Drp.html(str);
		})
		
		codeInfoService.getBeer(
		function(list){
			console.log("inside getBeer");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='beer' name='beer_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].beer_code+"'>"+list[i].beer_name+"</option>";
			}
			str +="</select>";
			
			beer_Drp.html(str);
		})
		
		codeInfoService.getSoju(
		function(list){
			console.log("inside getSoju");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='soju' name='soju_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].soju_code+"'>"+list[i].soju_name+"</option>";
			}
			str +="</select>";
			
			soju_Drp.html(str);
		})
		
		codeInfoService.getServer(
		function(list){
			console.log("inside getServer");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='server' name='server_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].server_code+"'>"+list[i].server_name+"</option>";
			}
			str +="</select>";
			
			project_server_Drp.html(str);
		})

		codeInfoService.getOs(
		function(list){
			console.log("inside getOs");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<select id='os' name='os_code' >";
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].os_code+"'>"+list[i].os_name+"</option>";
			}
			str +="</select>";
			
			project_os_Drp.html(str);
		})
		
		codeInfoService.getLanguage(
		function(list){
			console.log("inside getLanguage");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].language_code+"'>"+list[i].language_name+"</option>";
			}
			
			project_language_Drp.html(str);
		})

		codeInfoService.getFramework(
		function(list){
			console.log("inside getFramework");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].framework_code+"'>"+list[i].framework_name+"</option>";
			}
			
			project_framework_Drp.html(str);
		})

		codeInfoService.getDbms(
		function(list){
			console.log("inside getDbms");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].dbms_code+"'>"+list[i].dbms_name+"</option>";
			}
			
			project_dbms_Drp.html(str);
		})		
		
		codeInfoService.getDevetc(
		function(list){
			console.log("inside getDevetc");
			var str ="";
			
			if(list== null|| list.length ==0){}
			str += "<option value = '' selected disabled hidden></option>";
			for(var i=0, len=list.length||0;i<len;i++){
				str += "<option value='"+list[i].devetc_code+"'>"+list[i].devetc_name+"</option>";
			}
			
			project_devetc_Drp.html(str);
		})
		
		codeInfoService.getCertification(
		function(list){
			var str = "";
			if(list == null || list.length ==0){ }
			for(var i=0, len=list.length||0;i<len;i++){
			str +="<input type='checkbox' id='certification' name='certification' value='"+list[i].certification_code+"' />";
			str += list[i].certification_name;
			}
			certification_Chk.html(str);
				
		})		
		
		codeInfoService.getForeignlang(
		function(list){
			var str = "";
			var str1="";
			if(list == null || list.length ==0){ }
			for(var i=0, len=list.length||0;i<len;i++){
			str +="<input type='checkbox' id='foreignlang' name='foreignlangRead' value='"+list[i].foreignlang_code+"' />";
			str += list[i].foreignlang_name;
			}
			foreignlang_read.html(str);
			for(var i=0, len=list.length||0;i<len;i++){
			str1 +="<input type='checkbox' id='foreignlang' name='foreignlangSpeak' value='"+list[i].foreignlang_code+"' />";
			str1 += list[i].foreignlang_name;
			}
			foreignlang_speak.html(str1);
			
				
		})	
		
		codeInfoService.getInstStack(
		function(list){
			var str = "";
			if(list == null || list.length ==0){ }
			for(var i=0, len=list.length||0;i<len;i++){
			str +="<input type='checkbox' id='inst_stack' name='inst_stack' value='"+list[i].inst_stack_code+"' />";
			str += list[i].inst_stack_name;
			}
			inst_stack_Chk.html(str);
				
		})
		
		codeInfoService.getInterest(
		function(list){
			var str = "";
			if(list == null || list.length ==0){ }
			for(var i=0, len=list.length||0;i<len;i++){
			str +="<input type='checkbox' id='interest' name='interest' value='"+list[i].interest_code+"' />";
			str += list[i].interest_name;
			}
			interest_Chk.html(str);
				
		})
		
		codeInfoService.getRole(
		function(list){
			var str = "";
			if(list == null || list.length ==0){ }
			for(var i=0, len=3||0;i<len;i++){
			str +="<input type='checkbox' id='role' name='role' value='"+list[i].role_code+"' />";
			str += list[i].role_name;
			}
			str+="<br>";
			for(var i=3, len=list.length||0;i<len;i++){
				str +="<input type='checkbox' id='role' name='role' value='"+list[i].role_code+"' />";
				str += list[i].role_name;
				}
			project_role_Chk.html(str);
				
		})
		
	}//getCode끝
	
	setNumBox();
	function setNumBox() {
		var dt = new Date();
		var year = "";
		var com_year = dt.getFullYear();

		// 발행 뿌려주기
		$(".year").append("<option value=''>  </option>");

		// 올해 기준으로 -100년부터 +1년을 보여준다.
		for (var y = (com_year); y >= (com_year - 100); y--) {
			$(".year").append("<option value='" + y + "'>" + y + "</option>");
		}

		// 월 뿌려주기(1월부터 12월)
		var month;
		$(".month").append("<option value=''> </option>");
		for (var i = 1; i <= 12; i++) {
			$(".month").append("<option value='" + i + "'>" + i + "</option>");
		}

		// 일 뿌려주기(1일부터 31일)
		var day;
		$(".day").append("<option value=''> </option>");
		for (var i = 1; i <= 31; i++) {
			$(".day").append("<option value='" + i + "'>" + i + "</option>");
		}
		
		$("#career_salary").append("<option value=''>  </option>");
		for(var i = 1800; i <=10000;i+=200){
			$("#career_salary").append("<option value='"+i+"'>"+i + "</option>");
		}
	}//setNumBox 끝

})