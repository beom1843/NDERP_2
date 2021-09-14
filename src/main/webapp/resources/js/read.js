$(document).ready(function(){
	
	console.log("read.js Running~~s")
	
	var staff_no = 	$('#staff_no').val();
	
	
		
		staffInfoService.read({
			staff_no:staff_no
		},function(staff){
			
		console.log("staffInfoService Running~~s")
			
			//1. 개인정보
		$('#id').val(staff.staff_id);
		$('#pw').val(staff.staff_pw)
		$('#pwchk').val(staff.staff_pw);
		
		$('#name').val(staff.staff_name);
		$('#jumin').val(staff.staff_id_no);
		$('#hp').val(staff.staff_hp);
	
		$('#email').val(staff.staff_email);
		$("select[name='religion_code']").val(staff.staff_religion);
		$("select[name='military_code']").val(staff.staff_military);
		
		$('#zipcode').val(staff.staff_zipcode);
		$('#address').val(staff.staff_address);
		
		$('#hotline_name').val(staff.hotline.hotline_name);
		$("select[name='hotline_code']").val(staff.hotline.hotline_code);
		$('#hotline_hp').val(staff.hotline.hotline_hp);
		
		$("select[name='bank_code']").val(staff.bank.bank_code);
		$('#bank_no').val(staff.bank.bank_number);
		
			//2. 학력
		for(var i =0 ; i<staff.schoolArr.length;i++){
			switch(staff.schoolArr[i].education_code){
			case 1:
				$('#education_1_name').val(staff.schoolArr[i].school_name);
				$("select[name='edu_1_grad_y']").val(staff.schoolArr[i].school_graduateday.substr(0,4));
				$("select[name='edu_1_grad_m']").val(staff.schoolArr[i].school_graduateday.substr(5,2));
				break;
			case 2:
				$('#education_2_name').val(staff.schoolArr[i].school_name);
				$("select[name='edu2']").val(staff.schoolArr[i].college_code);
				$('#education_2_major').val(staff.schoolArr[i].school_major);
				$('#education_2_sub').val(staff.schoolArr[i].school_sub);
				$("select[name='edu_2_grad_y']").val(staff.schoolArr[i].school_graduateday.substr(0,4));
				$("select[name='edu_2_grad_m']").val(staff.schoolArr[i].school_graduateday.substr(5,2));
				break;
			case 3:
				$('#education_3_name').val(staff.schoolArr[i].school_name);
				$("select[name='edu3']").val(staff.schoolArr[i].college_code);
				$('#education_3_major').val(staff.schoolArr[i].school_major);
				$('#education_3_sub').val(staff.schoolArr[i].school_sub);
				$("select[name='edu_3_grad_y']").val(staff.schoolArr[i].school_graduateday.substr(0,4));
				$("select[name='edu_3_grad_m']").val(staff.schoolArr[i].school_graduateday.substr(5,3));
				break;
			case 4:
				$('#education_4_name').val(staff.schoolArr[i].school_name);
				$("select[name='edu4']").val(staff.schoolArr[i].college_code);
				$('#education_4_major').val(staff.schoolArr[i].school_major);
				$('#education_4_sub').val(staff.schoolArr[i].school_sub);
				$("select[name='edu_4_grad_y']").val(staff.schoolArr[i].school_graduateday.substr(0,4));
				$("select[name='edu_4_grad_m']").val(staff.schoolArr[i].school_graduateday.substr(5,3));
				break;
			case 5:
				$('#education_5_name').val(staff.schoolArr[i].school_name);
				$("select[name='edu5']").val(staff.schoolArr[i].college_code);
				$('#education_5_major').val(staff.schoolArr[i].school_major);
				$('#education_5_sub').val(staff.schoolArr[i].school_sub);
				$("select[name='edu_5_grad_y']").val(staff.schoolArr[i].school_graduateday.substr(0,4));
				$("select[name='edu_5_grad_m']").val(staff.schoolArr[i].school_graduateday.substr(5,3));
				break;
			case 0:
				$('#education_1_name').val(staff.schoolArr[i].school_name);
				$("select[name='edu_1_grad_y']").val(staff.schoolArr[i].school_graduateday.substr(0,4));
				$("select[name='edu_1_grad_m']").val(staff.schoolArr[i].school_graduateday.substr(5,2));
			}
		}
		
		
		//3. 가족
		var familySize= staff.familyArr.length;
		
		$("#family_r select[name='family_code']").val(staff.familyArr[0].family_code);
		$('#family_r #family_name').val(staff.familyArr[0].family_name);
		$('#family_r #family_job').val(staff.familyArr[0].family_job);
		$("#family_r select[name='family_birthy']").val(staff.familyArr[0].family_birthy);
		
		if(staff.familyArr[0].family_livew===1){
			$('#family_r input[id="family_livew"]').attr("checked",true)
		}
		
		//추가할 행의 코드 가져오기
		var family_row = document.getElementById("family_r").innerHTML;
		
		if(familySize>1){
			for(var i =1;i<familySize;i++){
				$("#family_R").append(family_row);
				$('#family_R [name="family_code"]').attr('name','family_code'+i);
				$('#family_R [name="family_code'+i+'"]').val(staff.familyArr[i].family_code);
				$('#family_R #family_name').attr('id','family_name'+i);
				$('#family_R #family_name'+i).val(staff.familyArr[i].family_name);
				$('#family_R #family_job').attr('id','family_job'+i);
				$('#family_R #family_job'+i).val(staff.familyArr[i].family_job);
				$('#family_R [name="family_birthy"]').attr('name','family_birthy'+i);
				$('#family_R [name="family_birthy'+i+'"]').val(staff.familyArr[i].family_birthy);
				$('#family_R #family_livew').attr('id','family_livew'+i);
				if(staff.familyArr[i].family_livew===1){
					$('#family_R input[id="family_livew'+i+'"]').attr("checked",true)
				}else{
					$('#family_R input[id="family_livew'+i+'"]').attr("checked",false)
				}
			}
		}/*2번째~ n번째 가족 출력하기 끝*/
		
		/*4. 회사 경력*/
		var careerSize= staff.careerArr.length;

		$("#career_r #career_name").val(staff.careerArr[0].career_name);
		$("#career_r #career_desc").val(staff.careerArr[0].career_desc);
		$("#career_r select[name='career_code'").val(staff.careerArr[0].career_code);
		$("#career_r select[name='department_code']").val(staff.careerArr[0].career_department);
		$("#career_r select[name='position_code']").val(staff.careerArr[0].career_position);
		$("#career_r select[name='hired_code']").val(staff.careerArr[0].career_hired);
		$("#career_r select[name='career_salary']").val(staff.careerArr[0].career_salary);
		$("#career_r select[name='career_hireday_y']").val(staff.careerArr[0].career_hireday.substr(0,4));
		$("#career_r select[name='career_hireday_m']").val(staff.careerArr[0].career_hireday.substr(5,2));
		$("#career_r select[name='career_retireday_y']").val(staff.careerArr[0].career_retireday.substr(0,4));
		$("#career_r select[name='career_retireday_m']").val(staff.careerArr[0].career_retireday.substr(5,2));

		//추가할 행의 코드 가져오기
		var career_row = document.getElementById("career_r").innerHTML;
		
		
		if(careerSize>1){
			for(var i =1;i<careerSize;i++){
				$("#career_R").append(career_row);
				
				$('#career_R #career_name').attr('id','career_name'+i);
				$('#career_R #career_name'+i).val(staff.careerArr[i].career_name);
				$('#career_R #career_desc').attr('id','career_desc'+i);
				$('#career_R #career_desc'+i).val(staff.careerArr[i].career_desc);
				$('#career_R [name="career_code"]').attr('name','career_code'+i);
				$('#career_R [name="career_code'+i+'"]').val(staff.careerArr[i].career_code);
				
				
				$('#career_R [name="department_code"]').attr('name','department_code'+i);
				$('#career_R [name="department_code'+i+'"]').val(staff.careerArr[i].career_department);
				$('#career_R [name="position_code"]').attr('name','position_code'+i);
				$('#career_R [name="position_code'+i+'"]').val(staff.careerArr[i].career_position);
				$('#career_R [name="hired_code"]').attr('name','hired_code'+i);
				$('#career_R [name="hired_code'+i+'"]').val(staff.careerArr[i].career_hired);
				$('#career_R [name="career_salary"]').attr('name','career_salary'+i);
				$('#career_R [name="career_salary'+i+'"]').val(staff.careerArr[i].career_salary);
				
				$('#career_R [name="career_hireday_y"]').attr('name','career_hireday_y'+i);
				$('#career_R [name="career_hireday_m"]').attr('name','career_hireday_m'+i);
				$('#career_R [name="career_retireday_y"]').attr('name','career_retireday_y'+i);
				$('#career_R [name="career_retireday_y"]').attr('name','career_retireday_m'+i);
				$("#career_R select[name='career_hireday_y"+i+"']").val(staff.careerArr[i].career_hireday.substr(0,4));
				$("#career_R select[name='career_hireday_m"+i+"']").val(staff.careerArr[i].career_hireday.substr(5,2));
				$("#career_R select[name='career_retireday_y"+i+"']").val(staff.careerArr[i].career_retireday.substr(0,4));
				$("#career_R select[name='career_retireday_m"+i+"']").val(staff.careerArr[i].career_retireday.substr(5,2));
				
			}
		}
		
		
		//5. 자격증
		for(var i = 0 ; i<staff.certificationArr.length;i++){
			$("#certification"+staff.certificationArr[i].certification_code).attr("checked",true);
		}
		
		//6. 외국어
		
		var readLangArr = [];
		var speakLangArr = [];

		for(var i = 0 ; i< staff.foreignlangArr.length;i++){
			
			if(staff.foreignlangArr[i].foreignlang_type_code ===1){
				readLangArr.push(staff.foreignlangArr[i]);
			}else if(staff.foreignlangArr[i].foreignlang_type_code ===2){
				speakLangArr.push(staff.foreignlangArr[i]);
			}
		}
		
		
		for(var i = 0 ; i<readLangArr.length;i++){
			$("#foreignlang_read #foreignlang"+readLangArr[i].foreignlang_code).attr("checked",true);
		}
		
		for(var i = 0 ; i<speakLangArr.length;i++){
			$("#foreignlang_speak #foreignlang"+speakLangArr[i].foreignlang_code).attr("checked",true);
		}
		
		//7. IT 교육센터
		
		
		$("#institution_name").val(staff.institution.institution_name);
		$("select[name='institution_period'").val(staff.institution.institution_period);
		$("select[name='institution_grad_y'").val(staff.institution.institution_grad.substr(0,4));
		$("select[name='institution_grad_m'").val(staff.institution.institution_grad.substr(5,2));
		$("select[name='institution_grad_d'").val(staff.institution.institution_grad.substr(7,2));
		var inst_stackArr = [];
		
		$("input[name='inst_stack']:checked")
		for(var i = 0 ; i<staff.institution.inst_stack_code.length;i++){
			$("#inst_stack"+staff.institution.inst_stack_code[i].institution_stack_code).attr("checked",true);
		}
		
		//8. 기호
		
		$("select[name='smoking_code'").val(staff.taste.smoking_code);
		$("select[name='soju_code'").val(staff.taste.soju_code);
		$("select[name='beer_code'").val(staff.taste.beer_code);
		
		for(var i = 0 ; i<staff.taste.interest.length;i++){
			$("#interest"+staff.taste.interest[i].taste_interest_code).attr("checked",true);
		}
		
		
		//9. 취미
		$("#hobby1").val(staff.hobbyArr[0].hobby);
		$("#hobby2").val(staff.hobbyArr[1].hobby);
		$("#hobby3").val(staff.hobbyArr[2].hobby);
		
		
		//10. 개발 경력
		
		var projectSize = staff.projectArr.length;
		
		$("#project_r #project_name").val(staff.projectArr[0].project_name);
		$("#project_r select[name ='project_start_y']").val(staff.projectArr[0].project_startday.substr(0,4));
		$("#project_r select[name ='project_start_m']").val(staff.projectArr[0].project_startday.substr(5,2));
		$("#project_r select[name ='project_end_y']").val(staff.projectArr[0].project_endday.substr(0,4));
		$("#project_r select[name ='project_end_m']").val(staff.projectArr[0].project_endday.substr(5,2));
		
		$("#project_r #project_customer").val(staff.projectArr[0].project_customer);
		$("#project_r #project_company").val(staff.projectArr[0].project_company);
		
		for(var i = 0 ; i<staff.projectArr[0].project_role.length;i++){
			$("#project_r #role"+staff.projectArr[0].project_role[i].project_role).attr("checked",true);
		}
		
		$("#project_r select[name='server_code']").val(staff.projectArr[0].project_server.project_server);
		$("#project_r select[name='os_code']").val(staff.projectArr[0].project_os.project_os);
		
		for(var i = 0 ; i<staff.projectArr[0].project_language.length;i++){
		console.log(staff.projectArr[i].project_language[i].project_language+"언어");
			$("#project_r select[name='language"+(i+1)+"']").val(staff.projectArr[0].project_language[i].project_language);
		}
		for(var i = 0 ; i<staff.projectArr[0].project_framework.length;i++){
			$("#project_r select[name='framework"+(i+1)+"']").val(staff.projectArr[0].project_framework[i].project_framework);
		}
		for(var i = 0 ; i<staff.projectArr[0].project_dbms.length;i++){
			$("#project_r select[name='dbms"+(i+1)+"']").val(staff.projectArr[0].project_dbms[i].project_dbms);
		}
		for(var i = 0 ; i<staff.projectArr[0].project_devetc.length;i++){
			$("#project_r select[name='devetc"+(i+1)+"']").val(staff.projectArr[0].project_devetc[i].project_devetc);
		}
		
		var project_row = document.getElementById("project_r").innerHTML;
		
		
		if(projectSize>1){
			for(var i = 1 ; i<projectSize;i++){
				$("#project_R").append(project_row);
				
				$('#project_R #project_name').attr('id','project_name'+i);
				$('#project_R [name="project_start_y"]').attr('name','project_start_y'+i);
				$('#project_R [name="project_start_m"]').attr('name','project_start_m'+i);
				$('#project_R [name="project_end_y"]').attr('name','project_end_y'+i);
				$('#project_R [name="project_end_m"]').attr('name','project_end_m'+i);
				$('#project_R #project_customer').attr('id','project_customer'+i);
				$('#project_R #project_company').attr('id','project_company'+i);
				$('#project_R #role').attr('id','role'+i);
				$('#project_R [name="server_code"]').attr('name','server_code'+i);
				$('#project_R [name="os_code"]').attr('name','os_code'+i);
				$('#project_R [name="language1"]').attr('name','language1'+i);
				$('#project_R [name="language2"]').attr('name','language2'+i);
				$('#project_R [name="language3"]').attr('name','language3'+i);
				$('#project_R [name="language4"]').attr('name','language4'+i);
				$('#project_R [name="language5"]').attr('name','language5'+i);
				$('#project_R [name="language6"]').attr('name','language6'+i);
				$('#project_R [name="framework1"]').attr('name','framework1'+i);
				$('#project_R [name="framework2"]').attr('name','framework2'+i);
				$('#project_R [name="dbms1"]').attr('name','dbms1'+i);
				$('#project_R [name="dbms2"]').attr('name','dbms2'+i);
				$('#project_R [name="dbms3"]').attr('name','dbms3'+i);
				$('#project_R [name="devetc1"]').attr('name','devetc1'+i);
				$('#project_R [name="devetc2"]').attr('name','devetc2'+i);
				$('#project_R [name="devetc3"]').attr('name','devetc3'+i);
				$('#project_R [name="devetc4"]').attr('name','devetc4'+i);
				
				
				console.log(staff.projectArr[i].project_name);
				
				
				$('#project_R #project_name'+i).val(staff.projectArr[i].project_name);
				$("#project_R select[name ='project_start_y"+i+"']").val(staff.projectArr[i].project_startday.substr(0,4));
				$("#project_R select[name ='project_start_m"+i+"']").val(staff.projectArr[i].project_startday.substr(5,2));
				$("#project_R select[name ='project_end_y"+i+"']").val(staff.projectArr[i].project_endday.substr(0,4));
				$("#project_R select[name ='project_end_m"+i+"']").val(staff.projectArr[i].project_endday.substr(5,2));
				
				$("#project_R #project_customer"+i).val(staff.projectArr[i].project_customer);
				$("#project_R #project_company"+i).val(staff.projectArr[i].project_company);
				
				
				if(staff.projectArr[i].project_role){
					$("#project_R [name='role']").each(function(i){
						$(this).attr("checked",false)
					})
					for(var n = 0 ; n<staff.projectArr[i].project_role.length;n++){
				
						console.log(staff.projectArr[i].project_role[n].project_role+"역할");
						$("#project_R #role"+staff.projectArr[i].project_role[n].project_role).attr("checked",true);
					}
				}else{
					$("#project_R [name='role']").each(function(i){
						$(this).attr("checked",false)
					})
				}
				
				$("#project_R select[name='server_code"+i+"']").val(staff.projectArr[i].project_server.project_server);
				$("#project_R select[name='os_code"+i+"']").val(staff.projectArr[i].project_os.project_os);	

				for(var n = 0 ; n<staff.projectArr[i].project_language.length;n++){
					console.log(staff.projectArr[i].project_language[n].project_language+"마지막")
					$("#project_R select[name='language"+i+""+(n+1)+"']").val(staff.projectArr[i].project_language[n].project_language);
				}
				for(var n = 0 ; n<staff.projectArr[i].project_framework.length;n++){
					$("#project_R select[name='framework"+i+""+(n+1)+"']").val(staff.projectArr[i].project_framework[n].project_framework);
				}
				for(var n = 0 ; n<staff.projectArr[i].project_dbms.length;n++){
					$("#project_R select[name='dbms"+i+""+(n+1)+"']").val(staff.projectArr[i].project_dbms[n].project_dbms);
				}
				for(var n = 0 ; n<staff.projectArr[i].project_devetc.length;n++){
					$("#project_R select[name='devetc"+i+""+(n+1)+"']").val(staff.projectArr[i].project_devetc[n].project_devetc);
				}

				
			}
		}
		
		
		})
})