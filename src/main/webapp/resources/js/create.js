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
		
		$('#career_R #career_name').attr('id','career_name'+careerCnt);
		$('#career_R #career_desc').attr('id','career_desc'+careerCnt);
		$('#career_R [name="career_code"]').attr('name','career_code'+careerCnt);
		$('#career_R [name="department_code"]').attr('name','department_code'+careerCnt);
		$('#career_R [name="position_code"]').attr('name','position_code'+careerCnt);
		$('#career_R [name="hired_code"]').attr('name','hired_code'+careerCnt);
		$('#career_R [name="career_salary"]').attr('name','career_salary'+careerCnt);
		$('#career_R [name="career_hireday_y"]').attr('name','career_hireday_y'+careerCnt);
		$('#career_R [name="career_hireday_m"]').attr('name','career_hireday_m'+careerCnt);
		$('#career_R [name="career_retireday_y"]').attr('name','career_retireday_y'+careerCnt);
		$('#career_R [name="career_retireday_y"]').attr('name','career_retireday_m'+careerCnt);

	})
	
	
	$("#submit").on("click",function(e){
		e.preventDefault();
		
		console.log("submit!!")
		var allIsOk =0;
		/*var message = "[입력사항을 다시 확인하세요!]\n";*/
		
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
		var hotline;
		if(hotline_code&&hotline_name&&hotline_hp){
			hotline = new Hotline(hotline_code, hotline_name, hotline_hp);
			console.log(hotline);
		}
		
			//Bank 객체 정의
		var Bank = function(bank_code, bank_number){
			this.bank_code= bank_code;
			this.bank_number = bank_number;
		}
		var bank;
		if(bank_code&&bank_no){
			bank = new Bank(bank_code,bank_no);
		}

		if(!(id&&pw&&pwchk&&name&&jumin&&hp&&email&&religion_code&&military_code&&zipcode&&address&&hotline&&bank)){
			/*message +="1. 개인정보 \n"
			message +=" - "*/
			alert("개인정보를 정확하게 입력하세요!");
			allIsOk+=1;
		}
		/*if(!id){
			message+="아이디, ";
		} if(!pw){
			message+="암호, ";
		} if(!pwchk){
			message+="암호확인, ";
		} if(!name){
			message+="이름, ";
		} if(!jumin){
			message+="주민번호, "
		} if(!hp){
			message+="핸드폰 번호, "
		} if(!email){
			message +="이메일, "
		} if(!religion_code){
			message +="종교, "
		} if(!military_code){
			message +="병역, "
		} if(!zipcode){
			message += "우편번호, "
		} if(!address){
			message += "주소, "
		} if(!hotline_name){
			message += "긴급 연락처 이름, "; 
		} if(!hotline_code){
			message +="긴급 연락처 관계, "
		} if(!hotline_hp){
			message+="긴급 연락처 전화번호, "
		} if(!bank_code){
			message += "월급통장 은행, ";
		} if(!bank_no){
			message +="월급통장 번호, "
		}*/
		
		
		
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
		else if(education_2_name&&edu_2_grad_y&&edu_2_grad_m){
			school = new School('',education_2_name,'','',edu_2_grad_y+edu_2_grad_m,0)
			schoolArr.push(school);
		}
		else if(education_3_name&&edu_3_grad_y&&edu_3_grad_m){
			school = new School('',education_3_name,'','',edu_3_grad_y+edu_3_grad_m,0)
			schoolArr.push(school);
		}
		else if(education_4_name&&edu_4_grad_y&&edu_4_grad_m){
			school = new School('',education_4_name,'','',edu_4_grad_y+edu_4_grad_m,0)
			schoolArr.push(school);
		}
		else if(education_5_name&&edu_5_grad_y&&edu_5_grad_m){
			school = new School('',education_5_name,'','',edu_5_grad_y+edu_5_grad_m,0)
			schoolArr.push(school);
		}		
		else{
			alert("학력사항을 정확하게 입력하세요!");
			allIsOk +=1;
		}
		
		
		
		console.log(schoolArr);
		//3. 가족
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
		
			//가족 객체에 넣기
		var f_code= $("select[name='family_code']").val();
		var f_name = $('#family_name').val();
		var f_job = $('#family_job').val();
		var f_year= $("select[name='family_birthy']").val();
		var f_livew= $('input[id="family_livew"]:checked').val();
		if(!f_livew){
			f_livew = 0;
		}
		
		if(f_code&&f_name&&f_job&&f_year){
			var family = new Family(f_code, f_name, f_job, f_year,f_livew);
			familyArr.push(family);
			
			for(var i =1; i<familyCnt; i++){
				f_code = $("select[name='family_code"+i+"']").val();
				f_name = $('#family_name'+i).val();
				f_job = $('#family_job'+i).val();
				f_year = $("select[name='family_birthy"+i+"']").val();
				livew = $('input[id="family_livew'+i+'"]:checked').val();
				console.log("동거여부"+livew)
				if(!livew){
					livew =0;
				}

				if(f_code&&f_name&&f_job&&f_year){
					family = new Family(f_code,f_name,f_job,f_year,livew);
					familyArr.push(family);
				}else{
					alert("가족 사항을 정확하게 입력하세요 !");
					allIsOk +=1;
					break;
				}
			}
			
		}else{
			alert("가족 사항을 정확하게 입력하세요 !");
			allIsOk +=1;
		}
		console.log(familyArr);
		

		//4. 회사경력	
			//Career 객체 정의
		var Career = function(career_name, career_desc, career_code, career_department, career_position, career_hired, career_salary, career_hireday, career_retireday){
			this.career_name = career_name;
			this.career_desc = career_desc;
			this.career_code = career_code;
			this.career_department = career_department;
			this.career_position = career_position;
			this.career_hired = career_hired;
			this.career_salary = career_salary;
			this.career_hireday = career_hireday;
			this.career_retireday = career.retireday;
		}
		
			//career를 넣을 리스트 정의
		var careerArr =[];
		
			//career 갯수
		var careerTb = document.getElementById('style2 career')
		var careerCnt = careerTb.tBodies[0].rows.length;
		careerCnt += careerTb.tBodies[1].rows.length;
		console.log("경력 수"+careerCnt);
		
			//경력 객체에 넣기
		var c_name = $("#career_name").val();
		var c_desc = $("#career_desc").val();
		var c_code = $("select[name='career_code'").val();
		var c_department = $("select[name='deapartment_code']").val();
		var c_position = $("select[name='position_code']").val();
		var c_hired = $("select[name='hired_code']").val();
		var c_salary = $("select[name='career_salary']").val();
		var c_h_y = $("select[name='career_hireday_y']").val();
		var c_h_m = $("select[name='career_hireday_m']").val();
		var c_r_y = $("select[name='career_retireday_y']").val();
		var c_r_m = $("select[name='career_retireday_m']").val();
		
		if(c_h_m.length ==1){
			c_h_m="0"+c_h_m;
		}
		if(c_r_m.length ==1){
			c_r_m="0"+c_r_m;
		}
		var c_retireday= c_r_y + c_r_m;
		var c_hireday = c_h_y + c_h_m;
		
		if(c_name&&c_desc&&c_code&&c_department&&c_position&&c_hired&&c_salary&&c_hireday&&c_retireday){
			var career = new Career(c_name,c_desc,c_code,c_department,c_position,c_hired,c_salary,c_hireday,c_retireday);
			careerArr.push(career);
			
			for(var i = 1; i<careerCnt;i++){
				c_name = $("#career_name"+i).val();
				c_desc = $("#career_desc"+i).val();
				c_code = $("select[name='career_code"+i+"'").val();
				c_department = $("select[name='deapartment_code"+i+"']").val();
				c_position = $("select[name='position_code"+i+"']").val();
				c_hired = $("select[name='hired_code"+i+"']").val();
				c_salary = $("select[name='career_salary"+i+"']").val();
				c_h_y = $("select[name='career_hireday_y"+i+"']").val();
				c_h_m = $("select[name='career_hireday_m"+i+"']").val();
				c_r_y = $("select[name='career_retireday_y"+i+"']").val();
				c_r_d = $("select[name='career_retireday_m"+i+"']").val();
				
				if(c_h_m.length ==1){
					c_h_m="0"+c_h_m;
				}
				if(c_r_m.length ==1){
					c_r_m="0"+c_r_m;
				}
				c_retireday= c_r_y + c_r_m;
				c_hireday = c_h_y + c_y_m;
				
				if(c_name&&c_desc&&c_code&&c_department&&c_position&&c_hired&&c_salary&&c_hireday&&c_retireday){
					career = new Career(c_name,c_desc,c_code,c_department,c_position,c_hired,c_salary,c_hireday,c_retireday);
					careerArr.push(career);
				}else{
					alert("경력사항을 정확하게 입력하세요!");
					allIsOk +=1;
					break;
				}
			}
		}else{
			alert("경력사항을 정확하게 입력하세요!");
			allIsOk +=1;
		}
		
		//5. 자격증
		
		
		
		
		var projectTb = document.getElementById('style2 project')
		var projectCnt = projectTb.tBodies[0].rows.length;
		projectCnt += projectTb.tBodies[1].rows.length;
		console.log("플젝 수"+projectCnt);
		
		
		if(allIsOk==0){
		}
		
			
		})
	
	
})
	
