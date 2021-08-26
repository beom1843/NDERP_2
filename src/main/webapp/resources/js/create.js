$(document).ready(function(){

	for(var i = 2 ; i<=6;i++){
		$("#language"+i).on("click",function(e){
			if(!($("select[name'language"+(i-1)+"']").val())){
				alert("사용 언어를 순서대로 채우세요!")
			}
		})
	}
		$("#framework2").on("click",function(e){
			if(!($("select[name'framework"+(i-1)+"']").val())){
				alert("사용 프레임워크를 순서대로 채우세요!")
			}
		})
	for(var i = 2 ; i<=3;i++){
		$("#dbms"+i).on("click",function(e){
			if(!($("select[name'dbms"+(i-1)+"']").val())){
				alert("사용 DBMS를 순서대로 채우세요!")
			}
		})
	}
	for(var i = 2 ; i<=6;i++){
		$("#devetc"+i).on("click",function(e){
			if(!($("select[name'devetc"+(i-1)+"']").val())){
				alert("사용한 기타 기술스택을 순서대로 채우세요!")
			}
		})
	}
	
	
	$("#project_row_add").on("click",function(e){
		e.preventDefault();

		//project 갯수 세기
		var projectTb = document.getElementById('style2 project')
		var projectCnt = projectTb.tBodies[0].rows.length;
		projectCnt += projectTb.tBodies[1].rows.length;
		console.log("플젝 갯수"+projectCnt);
		
		var project_row = document.getElementById("project_r").innerHTML;
		
		$("#project_R").append(project_row);
		
		$('#project_R #project_name').attr('id','project_name'+projectCnt);
		$('#project_R [name="project_start_y"]').attr('name','project_start_y'+projectCnt);
		$('#project_R [name="project_start_m"]').attr('name','project_start_m'+projectCnt);
		$('#project_R [name="project_end_y"]').attr('name','project_end_y'+projectCnt);
		$('#project_R [name="project_end_m"]').attr('name','project_end_m'+projectCnt);
		$('#project_R #project_customer').attr('id','project_customer'+projectCnt);
		$('#project_R #project_company').attr('id','project_company'+projectCnt);
		$('#project_R #role').attr('id','role'+projectCnt);
		$('#project_R [name="server_code"]').attr('name','server_code'+projectCnt);
		$('#project_R [name="os_code"]').attr('name','os_code'+projectCnt);
		$('#project_R [name="language1"]').attr('name','language1'+projectCnt);
		$('#project_R [name="language2"]').attr('name','language2'+projectCnt);
		$('#project_R [name="language3"]').attr('name','language3'+projectCnt);
		$('#project_R [name="language4"]').attr('name','language4'+projectCnt);
		$('#project_R [name="language5"]').attr('name','language5'+projectCnt);
		$('#project_R [name="language6"]').attr('name','language6'+projectCnt);
		$('#project_R [name="framework1"]').attr('name','framework1'+projectCnt);
		$('#project_R [name="framework2"]').attr('name','framework2'+projectCnt);
		$('#project_R [name="dbms1"]').attr('name','dbms1'+projectCnt);
		$('#project_R [name="dbms2"]').attr('name','dbms2'+projectCnt);
		$('#project_R [name="dbms3"]').attr('name','dbms3'+projectCnt);
		$('#project_R [name="devetc1"]').attr('name','devetc1'+projectCnt);
		$('#project_R [name="devetc2"]').attr('name','devetc2'+projectCnt);
		$('#project_R [name="devetc3"]').attr('name','devetc3'+projectCnt);
		$('#project_R [name="devetc4"]').attr('name','devetc4'+projectCnt);
		
	})
	
	$("#project_row_delete").on("click",function(e){
		e.preventDefault();
		var projectTb = document.getElementById('style2 project')
		if(projectTb.rows.length<2) return;
		projectTb.deleteRow(projectTb.rows.length-1);
		
		
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
	
	$("#family_row_delete").on("click",function(e){
		e.preventDefault();
		var familyTb = document.getElementById('style2 family')
		if(familyTb.rows.length<2) return;
		familyTb.deleteRow(familyTb.rows.length-1);
		
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
	
	$("#career_row_delete").on("click",function(e){
		e.preventDefault();
		var careerTb = document.getElementById('style2 career')
		if(careerTb.rows.length<2) return;
		careerTb.deleteRow(careerTb.rows.length-1);
		
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
		
		if(!(pw==pwchk)){
			allIsOk+=1;
			alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!")
		}
		
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
			var message="[1] 개인정보를 정확하게 입력하세요!";
			allIsOk+=1;
			
			var j_OK= (/\d{6}\[1-4]\d{6}/g).test(jumin);
			var hp_OK=(/^\d{3}-\d{3,4}-\d{4}$/).test(hp);
			
			if(!id){
				message+="아이디, ";
			} if(!pw){
				message+="암호, ";
			} if(!pwchk){
				message+="암호확인, ";
			} if(!name){
				message+="이름, ";
			} if(!jumin||!j_OK){
				message+="주민번호, "
			} if(!hp||!hp_OK){
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
			}
			
		}
		
		//2.학력
		var education_1_name = $('#education_1_name').val();
		var edu_1_grad_y= $("select[name='edu_1_grad_y']").val();
		var edu_1_grad_m= $("select[name='edu_1_grad_m']").val();
	
		var education_2_name = $('#education_2_name').val();
		var college_2_code= $("select[name='edu2']").val();
		var education_2_major = $('#education_2_major').val();
		var education_2_sub = $('#education_2_sub').val();
		var edu_2_grad_y= $("select[name='edu_2_grad_y']").val();
		var edu_2_grad_m= $("select[name='edu_2_grad_m']").val();
	
		var education_3_name = $('#education_3_name').val();
		var college_3_code= $("select[name='edu3']").val();
		var education_3_major = $('#education_3_major').val();
		var education_3_sub = $('#education_3_sub').val();
		var edu_3_grad_y= $("select[name='edu_3_grad_y']").val();
		var edu_3_grad_m= $("select[name='edu_3_grad_m']").val();
	
		var education_4_name = $('#education_4_name').val();
		var college_4_code= $("select[name='edu4']").val();
		var education_4_major = $('#education_4_major').val();
		var education_4_sub = $('#education_4_sub').val();
		var edu_4_grad_y= $("select[name='edu_4_grad_y']").val();
		var edu_4_grad_m= $("select[name='edu_4_grad_m']").val();
	
		var education_5_name = $('#education_5_name').val();
		var college_5_code= $("select[name='edu5']").val();
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
		
		console.log("시험"+college_3_code)
		
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
		var schoolCount = 0;
		
		if(education_1_name&&edu_1_grad_y&&edu_1_grad_m){
			if(education_1_name=='검정고시'){
				var school = new School('',education_1_name,'','',edu_1_grad_y+edu_1_grad_m,0)
				schoolArr.push(school);
				schoolCount+=1;
			}else{
				school = new School('',education_1_name,'','',edu_1_grad_y+edu_1_grad_m,1)
				schoolArr.push(school);
				schoolCount+=1;
			}
		}
		if(college_2_code&&education_2_name&&edu_2_grad_y&&edu_2_grad_m&&education_2_major&&education_2_sub){
			school = new School(college_2_code,education_2_name,education_2_major,education_2_sub,edu_2_grad_y+edu_2_grad_m,2)
			schoolArr.push(school);
			schoolCount+=1;
		}
		if(college_3_code&&education_3_name&&edu_3_grad_y&&edu_3_grad_m&&education_3_major&&education_3_sub){
			school = new School(college_3_code,education_3_name,education_3_major,education_3_sub,edu_3_grad_y+edu_3_grad_m,3)
			schoolArr.push(school);
			schoolCount+=1;
		}
		if(college_4_code&&education_4_name&&edu_4_grad_y&&edu_4_grad_m&&education_4_major&&education_4_sub){
			school = new School(college_4_code,education_4_name,education_4_major,education_4_sub,edu_4_grad_y+edu_4_grad_m,4)
			schoolArr.push(school);
			schoolCount+=1;
		}
		if(college_5_code&&education_5_name&&edu_5_grad_y&&edu_5_grad_m&&education_5_major&&education_5_sub){
			school = new School(college_5_code,education_5_name,education_5_major,education_5_sub,edu_5_grad_y+edu_5_grad_m,5)
			schoolArr.push(school);
			schoolCount+=1;
		}		
		if(schoolCount==0){
			alert("[2] 학력사항을 정확하게 입력하세요!");
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
					alert("[3] 가족 사항을 정확하게 입력하세요 !");
					allIsOk +=1;
					break;
				}
			}
			
		}else{
			alert("[3] 가족 사항을 정확하게 입력하세요 !");
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
			this.career_retireday = career_retireday;
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
		var c_department = $("select[name='department_code']").val();
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
		
		console.log("c1"+c_name);
		console.log("c2"+c_code);
		console.log("c3"+c_department);
		console.log("c4"+c_position);
		console.log("c5"+c_hired);
		console.log("c6"+c_salary);
		console.log("c7"+c_hireday);
		console.log("c8"+c_retireday);
		
		if(c_name&&c_desc&&c_code&&c_department&&c_position&&c_hired&&c_salary&&c_hireday&&c_retireday){
			var career = new Career(c_name,c_desc,c_code,c_department,c_position,c_hired,c_salary,c_hireday,c_retireday);
			careerArr.push(career);
			
			for(var i = 1; i<careerCnt;i++){
				c_name = $("#career_name"+i).val();
				c_desc = $("#career_desc"+i).val();
				c_code = $("select[name='career_code"+i+"'").val();
				c_department = $("select[name='department_code"+i+"']").val();
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
				c_hireday = c_h_y + c_h_m;
				
				
				if(c_name&&c_desc&&c_code&&c_department&&c_position&&c_hired&&c_salary&&c_hireday&&c_retireday){
					career = new Career(c_name,c_desc,c_code,c_department,c_position,c_hired,c_salary,c_hireday,c_retireday);
					careerArr.push(career);
				}else{
					alert("[4] 경력사항을 정확하게 입력하세요!");
					allIsOk +=1;
					break;
				}
			}
		}else{
			alert("[4] 경력사항을 정확하게 입력하세요!");
			allIsOk +=1;
		}
		
		//5. 자격증
		
		var certificationArr=[];

		
		if(!($('input[name="certification"]:checked').val())){
			alert("[5] 자격증 정보를 정확하게 입력하세요!");
			allIsOk +=1;
		}else{
			$('input[name="certification"]:checked').each(function(i){
				certificationArr.push($(this).val());
			})
		}
		
		//6. 외국어
		var foreignlangArr = [];
		var Foreignlang = function(foreignlang_code,foreignlang_type){
			this.foreignlang_code = foreignlang_code;
			this.foreignlang_type = foreignlang_type;
		}
		

		
		if(!($("input[name='foreignlangRead']:checked").val()&&$("input[name='foreignlangSpeak']:checked").val())){
			alert("[6] 외국어 능력을 정확하게 입력하세요!");
			allIsOk +=1;}else{
			$("input[name='foreignlangRead']:checked").each(function(i){
				var foreignlang = new Foreignlang($(this).val(),1);
				foreignlangArr.push(foreignlang);
			})
			
			$("input[name='foreignlangSpeak']:checked").each(function(i){
				foreignlang = new Foreignlang($(this).val(),2);
				foreignlangArr.push(foreignlang);
			})
		}
		console.log(foreignlangArr);
		
		
		
		//7. IT 교육센터
		var Institution = function(institution_name, institution_period, institution_grad, inst_stack_code){
			this.institution_name = institution_name;
			this.institution_period = institution_period;
			this.institution_grad = institution_grad;
			this.inst_stack_code = inst_stack_code;
		}
	
		
		
		var i_name = $("#institution_name").val();
		var i_period = $("select[name='institution_period'").val();
		var i_grad_y = $("select[name='institution_grad_y'").val();
		var i_grad_m = $("select[name='institution_grad_m'").val();
		var i_grad_d = $("select[name='institution_grad_d'").val();
		var inst_stackArr = [];
		
		$("input[name='inst_stack']:checked").each(function(i){
			inst_stackArr.push($(this).val());
		})

		console.log("i1"+i_name);
		console.log("i2"+i_period);
		console.log("i3"+i_grad_y);
		console.log("i4"+i_grad_m);
		console.log("i5"+i_grad_d);
		console.log("i6"+i+inst_stackArr);

		
		if(!(i_name&&i_period&&i_grad_y&&i_grad_m&&i_grad_d)||inst_stackArr.length==0){
			alert("[7] IT 교육수료 내역을 정확하게 입력하세요!");
			allIsOk +=1;
		}else{
			if(i_grad_m.length ==1){
				i_grad_m="0"+i_grad_m;
			}
			if(i_grad_d.length ==1){
				i_grad_d="0"+i_grad_d;
			}
			i_grad = i_grad_y+i_grad_m+i_grad_d;
			
			var institution = new Institution(i_name, i_period, i_grad, inst_stackArr);
		}
		
		//8. 기호
		var Taste = function(smoking_code, beer_code, soju_code, interest){
		this.smoking_code = smoking_code;
		this.beer_code = beer_code;
		this.soju_code = soju_code;
		this.interest = interest;
		}
		var t_smoking = $("select[name='smoking_code'").val();
		var t_soju = $("select[name='soju_code'").val();
		var t_beer = $("select[name='beer_code'").val();
		var interestArr = [];
		
		if(!(t_smoking&&t_soju&&t_beer&&$("input[name='interest']:checked").val())){
			alert("[8] 기호 내용을 정확하게 입력하세요!");
			allIsOk +=1;
		}else{
			
			$("input[name='interest']:checked").each(function(i){
				interestArr.push($(this).val());
			})
			console.log(interestArr);
			
			var taste = new Taste(t_smoking, t_beer, t_soju, interestArr);
		}
		
		//9. 취미
		var hobby1 = $("#hobby1").val();
		var hobby2 = $("#hobby2").val();
		var hobby3 = $("#hobby3").val();
		var hobbyArr = [];
		
		if(hobby1){
			hobbyArr.push(hobby1);
		}else if(!hobby1){
			alert("[9] 취미를 정확하게 입력하세요!");
			allIsOk +=1;
		}
		if(hobby2){
			hobbyArr.push(hobby2);
		}
		if(hobby3){
			hobbyArr.push(hobby3);
		}
		
		
		
		//10. 개발 경력
		var Project = function(project_name, project_startday, project_endday, project_customer, project_company, project_role, project_server, project_os, project_language, project_framework,project_dbms,project_devetc){
			this.project_name = project_name;
			this.project_startday = project_startday;
			this.project_endday = project_endday;
			this.project_customer = project_customer;
			this.project_company = project_company;
			this.project_role = project_role;
			this.project_server = project_server;
			this.project_os = project_os;
			this.project_language = project_language;
			this.project_framework = project_framework;
			this.project_dbms = project_dbms;
			this.project_devetc = project_devetc;
		}
		
		var projectArr = [];
		
		var projectTb = document.getElementById('style2 project')
		var projectCnt = projectTb.tBodies[0].rows.length;
		projectCnt += projectTb.tBodies[1].rows.length;
		console.log("플젝 수"+projectCnt);
		
		var p_name = $("#project_name").val();
		var p_s_y = $("select[name ='project_start_y']").val();
		var p_s_m = $("select[name ='project_start_m']").val();
		var p_e_y = $("select[name ='project_end_y']").val();
		var p_e_m = $("select[name ='project_end_m']").val();
		
		if(p_s_m&&p_s_y){
			if(p_s_m.length ==1){
				p_s_m="0"+p_s_m;
			}
			var p_start= p_s_y+p_s_m;
		}

		if(p_e_m&&p_e_y){
			if(p_e_m.length ==1){
				p_e_m="0"+p_e_m;
			}
			var p_end= p_e_y+p_e_m;
		}
		
		var cust = $("#project_customer").val();
		var comp = $("#project_company").val();
		var roleArr =[];
		
		$("input[name='role']:checked").each(function(i){
			roleArr.push($(this).val());
		});
		
		var server = $("select[name ='server_code']").val();
		var os = $("select[name ='os_code']").val();
		
		var langArr=[];
		var frameworkArr=[];
		var dbmsArr=[];
		var devetcArr=[];
		
		for(var i = 1 ; i<=6;i++){
			var lang=$("select[name='language"+i+"']").val()
			if(lang){
				langArr.push(lang);	
			}
		}
		for(var i = 1 ; i<=2;i++){
			var frmwrk = $("select[name='framework"+i+"']").val()
			if(frmwrk){
			frameworkArr.push(frmwrk);	
			}
		}
		for(var i = 1 ; i<=3;i++){
			var db = $("select[name='dbms"+i+"']").val()
			if(db){
			dbmsArr.push(db);	
			}
		}
		for(var i = 1 ; i<=4;i++){
			var dvtc = $("select[name='devetc"+i+"']").val()
			if(dvtc){
			devetcArr.push(dvtc);	
			}
		}
		
		if(p_name&&p_start&&p_end&&cust&&comp&&roleArr&&server&&os&&langArr&&frameworkArr&&dbmsArr&&devetcArr){
			var project = new Project(p_name,p_start,p_end,cust,comp,roleArr,server,os,langArr,frameworkArr,dbmsArr,devetcArr);
			projectArr.push(project);
			
			for(var m = 1;m<projectCnt;m++){
				p_name = $("#project_name"+m).val();
				p_s_y = $("select[name ='project_start_y"+m+"']").val();
				p_s_m = $("select[name ='project_start_m"+m+"']").val();
				p_e_y = $("select[name ='project_end_y"+m+"']").val();
				p_e_m = $("select[name ='project_end_m"+m+"']").val();
				
				console.log("m출력"+m);
				
				if(p_s_m&&p_s_y){
					if(p_s_m.length ==1){
						p_s_m="0"+p_s_m;
					}
					var p_start= p_s_y+p_s_m;
				}

				if(p_e_m&&p_e_y){
					if(p_e_m.length ==1){
						p_e_m="0"+p_e_m;
					}
					var p_end= p_e_y+p_e_m;
				}
				
				var cust = $("#project_customer"+m).val();
				var comp = $("#project_company"+m).val();
				var roleArr =[];
				
				$("input[name='role"+m+"']:checked").each(function(i){
					roleArr.push($(this).val());
				});
				
				var server = $("select[name ='server_code"+m+"']").val();
				var os = $("select[name ='os_code"+m+"']").val();
				
				var langArr=[];
				var frameworkArr=[];
				var dbmsArr=[];
				var devetcArr=[];
				
				for(var i = 1 ; i<=6;i++){
					var lang=$("select[name='language"+i+""+m+"']").val()
					console.log("i"+i+"m"+m+"개발언어"+lang);
					if(lang){
						langArr.push(lang);	
					}
				}
				for(var i = 1 ; i<=2;i++){
					var frmwrk = $("select[name='framework"+i+""+m+"']").val()
					if(frmwrk){
					frameworkArr.push(frmwrk);	
					}
				}
				for(var i = 1 ; i<=3;i++){
					var db = $("select[name='dbms"+i+""+m+"']").val()
					if(db){
					dbmsArr.push(db);	
					}
				}
				for(var i = 1 ; i<=4;i++){
					var dvtc = $("select[name='devetc"+i+""+m+"']").val()
					if(dvtc){
					devetcArr.push(dvtc);	
					}
				}
				if(p_name&&p_start&&p_end&&cust&&comp&&roleArr&&server&&os&&langArr&&frameworkArr&&dbmsArr&&devetcArr){
					var project = new Project(p_name,p_start,p_end,cust,comp,roleArr,server,os,langArr,frameworkArr,dbmsArr,devetcArr);
					console.log("프로젝트"+project);
					projectArr.push(project);
				}else{			
				allIsOk +=1;
				alert("[10] 프로젝트 내역을 정확하게 입력하세요!");
				}
				
				
			}
		}else{
			allIsOk +=1;
			alert("[10] 프로젝트 내역을 정확하게 입력하세요!");
		}

		
		if(allIsOk==0){
			staffInfoService.create({
				staff_id:id,
				staff_pw:pw,
				staff_name:name,
				staff_id_no:jumin,
				staff_hp:hp,
				staff_email:email,
				staff_religion:religion_code,
				staff_military:military_code,
				staff_address:address,
				staff_zipcode:zipcode,
				hotline:hotline,
				bank:bank,
				schoolArr:schoolArr,
				familyArr:familyArr,
				careerArr:careerArr,
				certificationArr:certificationArr,
				foreignlangArr:foreignlangArr,
				institution:institution,
				taste:taste,
				hobbyArr:hobbyArr,
				projectArr:projectArr
			}, function(result){
				alert(result+"등록되었습니다!")
			})
			
		}
		
			
		})
	
	
})