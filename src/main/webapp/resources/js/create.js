$(document).ready(function(){

	$("#project_row_add").on("click",function(e){
		e.preventDefault();
		console.log("맞아");
		var project_row = document.getElementById("project_r").innerHTML;
		
		$("#project_R").append(project_row);
	})
	
	$("#family_row_add").on("click",function(e){
		e.preventDefault();
		console.log("맞아");
		var family_row = document.getElementById("family_r").innerHTML;
		
		$("#family_R").append(family_row);
	})
	
	$("#career_row_add").on("click",function(e){
		e.preventDefault();
		console.log("맞아");
		var career_row = document.getElementById("career_r").innerHTML;
		
		$("#career_R").append(career_row);
	})
	$("#submit").on("click",function(e){
		e.preventDefault();
		
		//tbodies[0]도 합산할 것인가 ?
		var familyTb = document.getElementById('style2 family')
		var familyCnt = familyTb.tBodies[0].rows.length;
		familyCnt += familyTb.tBodies[1].rows.length;
		console.log("가족 인원수"+familyCnt);
		
		var careerTb = document.getElementById('style2 career')
		var careerCnt = careerTb.tBodies[0].rows.length;
		careerCnt += careerTb.tBodies[1].rows.length;
		console.log("경력 수"+careerCnt);
		
		var projectTb = document.getElementById('style2 project')
		var projectCnt = projectTb.tBodies[0].rows.length;
		projectCnt += projectTb.tBodies[1].rows.length;
		console.log("플젝 수"+projectCnt);
		
		
		
		console.log("submit!!")
		var id = $('#id').val();
		var pw = $('#pw').val();
		var name = $('#name').val();
		var jumin = $('#jumin').val();
		var hp = $('#hp').val();
		var email = $('#email').val();
		var hotline_name = $('#hotline_name').val();
		var hotline_hp = $('#hotline_hp').val();
		var bank_no = $('#bank_no').val();
		var education_1_name = $('#education_1_name').val();
		var education_2_name = $('#education_2_name').val();
		var education_3_name = $('#education_3_name').val();
		var education_4_name = $('#education_4_name').val();
		var education_5_name = $('#education_5_name').val();
		var education_2_major = $('#education_2_major').val();
		var education_3_major = $('#education_3_major').val();
		var education_4_major = $('#education_4_major').val();
		var education_5_major = $('#education_5_major').val();
		var education_2_sub = $('#education_2_sub').val();
		var education_3_sub = $('#education_3_sub').val();
		var education_4_sub = $('#education_4_sub').val();
		var education_5_sub = $('#education_5_sub').val();
		
		
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
	
