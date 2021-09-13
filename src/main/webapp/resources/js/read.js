$(document).ready(function(){
	
	console.log("read.js Running~~s")
	
	var staff_no = 	$('#staff_no').val();
	
	console.log(staff_no);
	
		
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
		
		
		
		
		})
	
	
	
})