$(document).ready(function(){
	
	
	$("#create_btn").on("click",function(e){
		e.preventDefault(e);
		var url="create";
		var name="정규직 입력";
		var option="height=100";
		window.open(url,name,option);
	})
	
	var resultPlace=$("#result");
	
	$("#reset_btn").on("click",function(e){
		e.preventDefault(e);
		staffInfoService.search({
		},
			function(list){
			var str="<table id='style3'><tr> <th>번호</th><th>이름</th><th>성별</th><th>출생년도</th><th>나이</th><th>핸드폰</th>";
			str+="<th>이메일</th><th>주민번호</th><th>거주지</th><th>최종학력</th><th>최종학력 졸업일</th><th>개발년차</th><th>종합 소유 기술</th><th>자격증</th></tr>"
			if(list==null || list.length ==0){}
			for(var i =0, len=list.length||0 ;i<len;i++){
			str +="<tr><td>"+list[i].rownum+"</td><td>"+list[i].staff_name+"</td><td>"+list[i].sex+"</td><td>"+list[i].birthy+"</td><td>"+list[i].age;
			str +="</td><td>"+list[i].staff_hp+"</td><td>"+list[i].staff_email+"</td><td>"+list[i].staff_id_no+"</td><td>"+list[i].staff_address+"</td><td>"+list[i].staff_education;
			str +="</td><td>"+list[i].staff_grad_y+"</td><td>"+list[i].staff_dev_year+"</td><td>"+list[i].staff_total_skill+"</td><td>"+list[i].staff_certification
			str +="</td></tr>"	
			}
				
			resultPlace.html(str);	
		})
	})
	$("#search_btn").on("click",function(e){
		e.preventDefault(e);
		var type="";
		var keyword1=$("#keyword1").val();
		var keyword2=$("#keyword2").val();
		var dev_y1=$("select[name='devCareer1']").val();
		var dev_y2=$("select[name='devCareer2']").val();
		var project_language;
		var project_framework;
		var project_dbms;
		var project_devetc;
		var edu;
		var certi;
		var role;
		var projectStartDay1;
		var projectStartDay2;
		var projectEndDay1;
		var projectEndDay2;
		var college;
		var graduateDay1;
		var graduateDay2;
		var sex;
		var birthDay1;
		var birthDay2;
		var age1;
		var age2;
		var career;
		var career1;
		var career2;
		var foreignRead;
		var foreignSpeak;
		var soju1;
		var soju2;
		var beer1;
		var beer2;
		
		if(dev_y1&dev_y2){
			type +="a"
		}
		console.log(dev_y1);
		console.log(type);
		console.log("클릭");
		staffInfoService.search({
			pageNum:0,
			amount:0,
			
			type:type,

			keyword1:0,
			keyword2:0,
			
			dev1:dev_y1,
			dev2:dev_y2,
			
			project_language:0,
			project_framework:0,
			project_dbms:0,
			project_devetc:0,
			
			edu:0,
			certi:0,
			role:0,
			
			projectStartDay1:0,
			projectStartDay2:0,
			projectEndDay1:0,
			projectEndDay2:0,
			
			college:0,
			
			graduateDay1:0,
			graduateDay2:0,
			
			sex:0,
			
			birthDay1:0,
			birthDay2:0,
			age1:0,
			age2:0,
			career:0,
			career1:0,
			career2:0,
			foreignRead:0,
			foreignSpeak:0,
			soju1:0,
			soju2:0,
			beer1:0,
			beer2:0,
			
			military:0
		},
			function(list){
			var str="<table id='style3'><tr> <th>번호</th><th>이름</th><th>성별</th><th>출생년도</th><th>나이</th><th>핸드폰</th>";
			str+="<th>이메일</th><th>주민번호</th><th>거주지</th><th>최종학력</th><th>최종학력 졸업일</th><th>개발년차</th><th style='width:300px'>종합 소유 기술</th><th>자격증</th></tr>"
			if(list==null || list.length ==0){}
			for(var i =0, len=list.length||0 ;i<len;i++){
			str +="<tr><td>"+list[i].rownum+"</td><td>"+list[i].staff_name+"</td><td>"+list[i].sex+"</td><td>"+list[i].birthy+"</td><td>"+list[i].age;
			str +="</td><td>"+list[i].staff_hp+"</td><td>"+list[i].staff_email+"</td><td>"+list[i].staff_id_no+"</td><td>"+list[i].staff_address+"</td><td>"+list[i].staff_education;
			str +="</td><td>"+list[i].staff_grad_y+"</td><td>"+list[i].staff_dev_year+"</td><td>"+list[i].staff_total_skill+"</td><td>"+list[i].staff_certification
			str +="</td></tr>"	
			}
				
			resultPlace.html(str);	
		})
	})
})