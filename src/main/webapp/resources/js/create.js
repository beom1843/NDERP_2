$(document).ready(function(){

	$("#project_row_add").on("click",function(e){
		e.preventDefault();

		//project 갯수 세기
		var projectTb = document.getElementById('style2 project')
		var projectCnt = projectTb.tBodies[0].rows.length;
		projectCnt += projectTb.tBodies[1].rows.length;
		console.log("플젝 갯수"+projectCnt);
		
		var project_row = document.getElementById("project_r").innerHTML;
		
		$("#project_R").append(project_row);
		
	})
	
	$("#family_row_add").on("click",function(e){
		
		e.preventDefault();
		
		
		//family 갯수 세기
		var familyTb = document.getElementById('style2 family')
		var familyCnt = familyTb.tBodies[0].rows.length;
		familyCnt += familyTb.tBodies[1].rows.length;
		console.log("가족 인원수"+familyCnt);

		
		//추가할 행의 코드 가져오기
		var family_row = document.getElementById("family_r").innerHTML;
		
		$("#family_R").append(family_row);
		
		$('#family_R [name="family_code"]').attr('name','family_code'+familyCnt);
		$('#family_R #family_name').attr('id','family_name'+familyCnt);
		$('#family_R #family_job').attr('id','family_job'+familyCnt);
		$('#family_R [name="family_birthy"]').attr('name','family_birthy'+familyCnt);
		$('#family_R #family_livew').attr('id','family_livew'+familyCnt);
		
	
		
	})
	
	$("#career_row_add").on("click",function(e){
		
		e.preventDefault();

		//career 갯수 세기
		var careerTb = document.getElementById('style2 career')
		var careerCnt = careerTb.tBodies[0].rows.length;
		careerCnt += careerTb.tBodies[1].rows.length;
		console.log("이력 갯수"+careerCnt);
		
		var career_row = document.getElementById("career_r").innerHTML;
		
		$("#career_R").append(career_row);
	})
	
	
	$("#submit").on("click",function(e){
		e.preventDefault();
		
		console.log("submit!!")
	
		
		//1. 개인정보
		var id = $('#id').val();
		var pw = $('#pw').val();
		var pwchk = $('#pwchk').val();
		
		var name = $('#name').val();
		var jumin = $('#jumin').val();
		var hp = $('#hp').val();
	
		var email = $('#email').val();
		var religion_code= $("select[name='religion_code']").val();
		var military_code= $("select[name='military_code']").val();
		
		var zipcode = $('#zipcode').val();
		var address = $('#address').val();
		
		var hotline_name = $('#hotline_name').val();
		var hotline_code= $("select[name='hotline_code']").val();
		var hotline_hp = $('#hotline_hp').val();
		
		var bank_code= $("select[name='bank_code']").val();
		var bank_no = $('#bank_no').val();

		
			//hotline 객체 정의
		var Hotline = function(hotline_code, hotline_name, hotline_hp){
			this.hotline_code = hotline_code;
			this.hotline_name = hotline_name;
			this.hotline_hp = hotline_hp;
		}
		
		var hotline = new Hotline(hotline_code, hotline_name, hotline_hp);
		console.log(hotline);
		
		
			//Bank 객체 정의
		var Bank = function(bank_code, bank_number){
			this.bank_code= bank_code;
			this.bank_number = bank_number;
		}

		var bank = new Bank(bank_code,bank_no);
	
		
		//2.학력
		var education_1_name = $('#education_1_name').val();
		var edu_1_grad_y= $("select[name='edu_1_grad_y']").val();
		var edu_1_grad_m= $("select[name='edu_1_grad_m']").val();
	
		var education_2_name = $('#education_2_name').val();
		var college_2_code= $("#edu2 select[name='college_code']").val();
		var education_2_major = $('#education_2_major').val();
		var education_2_sub = $('#education_2_sub').val();
		var edu_2_grad_y= $("select[name='edu_2_grad_y']").val();
		var edu_2_grad_m= $("select[name='edu_2_grad_m']").val();
	
		var education_3_name = $('#education_3_name').val();
		var college_3_code= $("#edu3 select[name='college_code']").val();
		var education_3_major = $('#education_3_major').val();
		var education_3_sub = $('#education_3_sub').val();
		var edu_3_grad_y= $("select[name='edu_3_grad_y']").val();
		var edu_3_grad_m= $("select[name='edu_3_grad_m']").val();
	
		var education_4_name = $('#education_4_name').val();
		var college_4_code= $("#edu4 select[name='college_code']").val();
		var education_4_major = $('#education_4_major').val();
		var education_4_sub = $('#education_4_sub').val();
		var edu_4_grad_y= $("select[name='edu_4_grad_y']").val();
		var edu_4_grad_m= $("select[name='edu_4_grad_m']").val();
	
		var education_5_name = $('#education_5_name').val();
		var college_5_code= $("#edu5 select[name='college_code']").val();
		var education_5_major = $('#education_5_major').val();
		var education_5_sub = $('#education_5_sub').val();
		var edu_5_grad_y= $("select[name='edu_5_grad_y']").val();
		var edu_5_grad_m= $("select[name='edu_5_grad_m']").val();
		
		
		if(edu_1_grad_m.length ==1){
			edu_1_grad_m = '0'+edu_1_grad_m;
		}
		if(edu_2_grad_m.length ==1){
			edu_2_grad_m = '0'+edu_2_grad_m;
		}
		if(edu_3_grad_m.length ==1){
			edu_3_grad_m = '0'+edu_3_grad_m;
		}
		if(edu_4_grad_m.length ==1){
			edu_4_grad_m = '0'+edu_4_grad_m;
		}
		if(edu_5_grad_m.length ==1){
			edu_5_grad_m = '0'+edu_5_grad_m;
		}
		
		
			//School 객체 정의
		var School = function(code,name,major,sub,graduateday,edu_code){
			this.college_code = code;
			this.school_name = name;
			this.school_major = major;
			this.school_sub = sub;
			this.school_graduateday = graduateday;
			this.education_code = edu_code
		}
		
		var schoolArr = [];
		
		if(education_1_name&&edu_1_grad_y&&edu_1_grad_m){
			if(education_1_name=='검정고시'){
				var school = new School('',education_1_name,'','',edu_1_grad_y+edu_1_grad_m,0)
				schoolArr.push(school);
			}else{
				school = new School('',education_1_name,'','',edu_1_grad_y+edu_1_grad_m,1)
				schoolArr.push(school);
			}
		}
		if(education_2_name&&edu_2_grad_y&&edu_2_grad_m){
			school = new School('',education_2_name,'','',edu_2_grad_y+edu_2_grad_m,0)
			schoolArr.push(school);
		}
		if(education_3_name&&edu_3_grad_y&&edu_3_grad_m){
			school = new School('',education_3_name,'','',edu_3_grad_y+edu_3_grad_m,0)
			schoolArr.push(school);
		}
		if(education_4_name&&edu_4_grad_y&&edu_4_grad_m){
			school = new School('',education_4_name,'','',edu_4_grad_y+edu_4_grad_m,0)
			schoolArr.push(school);
		}
		if(education_5_name&&edu_5_grad_y&&edu_5_grad_m){
			school = new School('',education_5_name,'','',edu_5_grad_y+edu_5_grad_m,0)
			schoolArr.push(school);
		}
		
		
		
		console.log(schoolArr);
		//3. 가족
		var family_code= $("select[name='family_code']").val();
		var family_name = $('#family_name').val();
		var family_job = $('#family_job').val();
		var family_code= $("select[name='family_birthy']").val();
		
		//family 객체 정의
		var Family = function(family_code,family_name,family_job,family_birthy,family_livew){
			this.family_code = family_code;
			this.family_name = family_name;
			this.family_job = family_job;
			this.family_birthy = family_birthy;
			this.family_livew = family_livew;
		}
		
		//family를 넣을 리스트 정의
		var familyArr = [];
		
		//가족 갯수 구하기
		var familyTb = document.getElementById('style2 family')
		var familyCnt = familyTb.tBodies[0].rows.length;
		familyCnt += familyTb.tBodies[1].rows.length;
		console.log("가족 인원수"+familyCnt);
		
		
		var family_code= $("select[name='family_code']").val();
		var family_name = $('#family_name').val();
		var family_job = $('#family_job').val();
		var family_year= $("select[name='family_birthy']").val();
		var family_livew= $('input[id="family_livew"]:checked').val();
		if(!family_livew){
			family_livew = 0;
		}
		
		if(family_code&&family_name&&family_job&&family_year){
			var pamily = new Family(family_code, family_name, family_job, family_year,family_livew);
			familyArr.push(pamily);
			
			for(var i =1; i<familyCnt; i++){
				var f_code = $("select[name='family_code"+i+"']").val();
				var f_name = $('#family_name'+i).val();
				var f_job = $('#family_job'+i).val();
				var f_year = $("select[name='family_birthy"+i+"']").val();
				var livew = $('input[id="family_livew'+i+'"]:checked').val();
				console.log("동거여부"+livew)
				if(!livew){
					livew =0;
				}

				if(f_code&&f_name&&f_job&&f_year){
					var family = new Family(f_code,f_name,f_job,f_year,livew);
					familyArr.push(family);
				}else{
					alert("가족 사항을 정확하게 입력해주세요 !");
					break;
				}
			}
			
		}else{
			alert("가족 사항을 정확하게 입력해주세요 !");
		}
		console.log(familyArr);
		

			
		var careerTb = document.getElementById('style2 career')
		var careerCnt = careerTb.tBodies[0].rows.length;
		careerCnt += careerTb.tBodies[1].rows.length;
		console.log("경력 수"+careerCnt);
		
		var projectTb = document.getElementById('style2 project')
		var projectCnt = projectTb.tBodies[0].rows.length;
		projectCnt += projectTb.tBodies[1].rows.length;
		console.log("플젝 수"+projectCnt);
		
		

		

		
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
	
