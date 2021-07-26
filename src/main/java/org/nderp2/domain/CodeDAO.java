package org.nderp2.domain;

import lombok.Data;

@Data
public class CodeDAO {

	//1. 개인정보
	private int religion_code;
	private String religion_name;
	
	private int military_code;
	private String military_name;
	
	private int hotline_code;
	private String hotline_name;
	
	private int bank_code;
	private String bank_name;
	
	//2. 학력
	private int college_code;
	private String college_name;
	
	//3. 가족
	private int family_code;
	private String family_name;
	
	//4.회사 경력 
	private int career_code;
	private String career_name;
	
	private int department_code;
	private String department_name;
	
	private int position_code;
	private String position_name;
	
	private int hired_code;
	private String hired_name;
	
	//5. 자격증
	private int certification_code;
	private String certification_name;
	
	//6. 외국어
	private int foreignlang_code;
	private String foreignlang_name;
	
	//7. IT 교육센터
	private int inst_stack_code;
	private String inst_stack_name;
	
	//8. 기호
	private int smoking_code;
	private String smoking_name;
	
	private int soju_code;
	private String soju_name;
	
	private int beer_code;
	private String beer_name;
	
	private int interest_code;
	private String interest_name;
	
	//10. 개발 경력
	private int role_code;
	private String role_name;
	
	private int server_code;
	private String server_name;

	private int language_code;
	private String language_name;
	
	private int framework_code;
	private String framework_name;
	
	private int dbms_code;
	private String dbms_name;
	
	private int devetc_code;
	private String devetc_name;
	
}
