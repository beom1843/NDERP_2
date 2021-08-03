<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>정규직 입력</title>
	<!-- jQuery library -->
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>

	<!-- CodeInfo Module -->
	<script src="/resources/js/codeInfo.js"></script>
	<script src="/resources/js/create_code.js"></script>

	<!-- CSS -->
	<link rel="stylesheet" type="text/css"	href="/resources/css/create.css" />

</head>
<body>
	<div class ="page">
		<div class="title">
			1. 개인정보
		</div>
		<div id = "title1">
			<table id ="style1">
				<tr>
					<th>아이디</th>
					<td><input type="text" id="id"></td>
					
					<th>암호</th>
					<td><input type="text" id="pw"></td>
					
					<th>암호확인</th>
					<td><input type="text" id="pwchk"></td>
				</tr>
	
				<tr>
					<th>이름</th>
					<td><input type="text" id="name"></td>
					
					<th>주민번호</th>
					<td><input type="text" id="jumin"></td>
					
					<th>핸드폰</th>
					<td><input type="text" id="hp"></td>
				</tr>
				
				<tr>
					<th>이메일</th>
					<td><input type="text" id="email"></td>
					
					<th>종교</th>
					<td><div id="religion_drp"></div></td>
					
					<th>병역</th>
					<td><div id="military_drp"></div></td>
				</tr>
				
				<tr>
					<th>
						긴급연락처<br>
						(사고 대비)
					</th>
					<td colspan="5">
					[연락 받을 사람 이름]: <input type="text" id="hotline_name"><br>
					[관계]: <div id="hotline_drp"></div><br>
					[전화번호]: <input type="text" id="hotline_hp"><br>
					</td>
				</tr>
	
				<tr>
					<th>
						월급통장번호
					</th>
					<td colspan="5">
						<div id="bank_drp"></div>
						<input type="text" id="bank_no">
						(-없이 입력)
					</td>
				</tr>							
			</table>
		</div>	<!-- 1. 개인정보 끝 -->
		
		<div class="title">
			2. 학력
			
		</div>
		<div id = "title2">
			<table id="style2">
				<tr>
					<th>학교명</th>
					<th>학부</th>
					<th>전공과목</th>
					<th>학교명</th>
					<th>졸업일</th>
				</tr>
				
				<tr>
					<td><input type="text" id="education_1_name"> 고등학교 졸<div class="" ></div></td>
					<td>	</td>
					<td>	</td>
					<td>	</td>
					<td><div class = "date_ym_drp" id="edu1"></div></td>
				</tr>
				
				<tr>
					<td><input type="text" id="education_2_name"> 전문대 졸 (대학 졸)</td>
					<td><div class = "college" id="edu2"></div></td>
					<td><input type="text" id="education_2_major"></td>
					<td><input type="text" id="education_2_sub"></td>
					<td><div class = "date_ym_drp" id="edu2"></div></td>
				</tr>
				
				<tr>
					<td><input type="text" id="education_3_name"> 대학교 학사 졸</td>
					<td><div class = "college" id="edu2"></div></td>
					<td><input type="text" id="education_3_major"></td>
					<td><input type="text" id="education_3_sub"></td>
					<td><div class = "date_ym_drp" id="edu3"></div></td>
				</tr>
				
				<tr>
					<td><input type="text" id="education_4_name"> 전문대 졸</td>
					<td><div class = "college" id="edu2"></div></td>
					<td><input type="text" id="education_4_major"></td>
					<td><input type="text" id="education_4_sub"></td>
					<td><div class = "date_ym_drp" id="edu4"></div></td>
				</tr>

				<tr>
					<td><input type="text" id="education_5"> 전문대 졸</td>
					<td><div class = "college" id="edu2"></div></td>
					<td><input type="text" id="education_5_major"></td>
					<td><input type="text" id="education_5_sub"></td>
					<td><div class = "date_ym_drp" id="edu5"></div></td>
				</tr>				
			</table>
		</div>	
		
		<div class="title">
			3. 가족
		</div>
		<div id = "title3">
			<table id ="style2">
				<tr>
					<th>관계</th>
					<th>이름</th>
					<th>직업</th>
					<th>출생년도</th>
					<th>동거여부</th>
				</tr>
				
				<tr>
					<td><div id="family_relat_drp"></div></td>
					<td><input type="text" class="family_name"></td>
					<td><input type="text" class="family_job"></td>
					<td><select class="year" id="family_birthy"></select></td>
					<td><input type="checkbox" id="family_livew">동거</td>
				</tr>
			</table>
			<div id="family_edit">
				<div id="family_row_delete">[행삭제]</div>
				<div id="family_row_add">[행추가]</div>
			</div>
		</div>
		
		<div class="title">
			4. 회사 경력
		</div>
		<div id = "title4">
			<table id ="style2">
				<tr>
					<th>회사명/업무</th>
					<th>분야</th>
					<th>부서</th>
					<th>직위</th>
					<th>고용형태</th>
					<th>연봉</th>
					<th>입사일/퇴사일</th>
				</tr>
				
				<tr>
					<td>
					회사명: <input type="text" id="coreer_name"><br>
					업무: <input type="text" id="coreer_desc">
					</td>
					<td><div id="career_drp"></div></td>
					<td><div id="career_dept_drp"></div></td>
					<td><div id="career_posit_drp"></div></td>
					<td><div id="career_hired_drp"></div></td>
					<td><div id="career_sal_drp"></div>만원</td>
					
					<td>
					입사일: <select class="year" id="career_hireday_y"></select>년
					<select class="month" id="career_hireday_m"></select>월
					<br>
					퇴사일: <select class="year" id="career_retireday_y"></select>년
					<select class="month" id="career_retireday_m"></select>월
					</td>
					
				</tr>
			</table>
			<div id="career_edit">
				<div id="career_row_delete">[행삭제]</div>
				<div id="career_row_add">[행추가]</div>
			</div>	
		</div>
		
		<div class="title">
			5. 자격증
		</div>
		<div id = "title5">
			<div id="certification_chk"></div>
		</div>
			
		<div class="title">
			6. 외국어 (중급이상만 입력)
		</div>
		<div id = "title6">
			<table id ="style1">
				<tr>
				<th>독해 가능 외국어</th>
				<td><div class="foreignlang"></div></td>
				
				<th>회화 가능 외국어</th>
				<td><div class="foreignlang"></div></td>
				</tr>
			</table>
		</div>
		
		<div class="title">
			7. IT 교육센터
		</div>
		<div id = "title7">
			<table id ="style2">
				<tr>
					<th>교육센터명</th>
					<th>교육기간</th>
					<th>교육수료일</th>
					<th>수료과목</th>
				</tr>
				
				<tr>
					<td><input type="text" id="institution_name"></td>
					<td><select class="month" id="institution_period"></select>개월</td>
					<td>
						<select class="year" id="institution_grad_y"></select>년
						<select class="month" id="institution_grad_m"></select>월
						<select class="day" id="institution_grad_d"></select>일
					</td>
					<td><div id="inst_stack_chk"></div></td>
				</tr>
			</table>	
		</div>
		
		<div class="title">
			8. 기호
		</div>
		<div id="title8">
			<div class="style3">하루 흡연량 </div>
			<div id="smoking_drp"></div>
			<div class="style3">소주 주량 </div>
			<div id="soju_drp"></div>
			<div class="style3">맥주 주량(500CC 기준) </div>
			<div id="beer_drp"></div>
			<div class="style3">관심분야</div>
			<div id="interest_chk"></div>
		</div>
		
		<div class="title">
			9. 취미
		</div>
		<div id="title9">
			<div class="hobby"><input type="text" id="hobby1"></div>
			<div class="hobby"><input type="text" id="hobby2"></div>
			<div class="hobby"><input type="text" id="hobby3"></div>
		</div>
		
		<div class="title">
			10. 개발 경력
		</div>
		<div id="title10">
			<table id ="style2" width="80%">
				<tr>
					<th rowspan="2">프로젝트명 / 기간</th>
					<th rowspan="2">고객사 / 근무사 / 역할</th>
					<th>개발 환경</th>
				</tr>

				<tr>
					<th>기종/OS/언어/DBMS/TOOL/기타</th>
				</tr>

				<tr >
					<td id="project_basic">
						<div class="style3">프로젝트명</div><input type="text" id ="project_name"><br>
						<div class="style3">시작일</div>
							<select class="year" id="project_start_y" ></select>년 
							<select class="month" id="project_start_m" ></select>월<br>
						<div class="style3">종료일</div>
							<select class="year" id="project_end_y" ></select>년 
							<select class="month" id="project_end_m" ></select>월<br>
					</td>
					<td id="project_relation">
						<div class="style3">고객사</div><input type="text" id ="project_customer"><br>
						<div class="style3">근무사</div><input type="text" id ="project_company"><br>						
						<div class="style3">역할</div><div id="project_role_chk"></div>
					</td>
					<td id="project_env">
						<div class="style3">서버기종(H/W)</div><div class="project_server_drp"></div>
						<div class="style3" id="os">OS</div><div class="project_os_drp"></div><br>
						<div class="style3">언어</div>
							<div class="project_language_drp" id="language1"></div>
							<div class="project_language_drp" id="language2"></div>
							<div class="project_language_drp" id="language3"></div>
							<div class="project_language_drp" id="language4"></div>
							<div class="project_language_drp" id="language5"></div>
							<div class="project_language_drp" id="language6"></div>
							<div class="project_language_drp" id="language7"></div>
							<br>
						<div class="style3">프레임워크</div>
							<div class="project_framework_drp" id="framework1"></div>
							<div class="project_framework_drp" id="framework2"></div>
							<div class="project_framework_drp" id="framework3"></div>
							<br>
						<div class="style3">DBMS</div>
							<div class="project_dbms_drp" id="dbms1"></div>
							<div class="project_dbms_drp" id="dbms2"></div>
							<div class="project_dbms_drp" id="dbms3"></div>
							<br>
						<div class="style3">기타</div>
							<div class="project_devetc_drp" id="devetc1"></div>
							<div class="project_devetc_drp" id="devetc2"></div>
							<div class="project_devetc_drp" id="devetc3"></div>
							<div class="project_devetc_drp" id="devetc4"></div>
							<div class="project_devetc_drp" id="devetc5"></div>
							<br>
					</td>
				</tr>
			</table>
			<div id="project_edit">
				<div id="project_row_delete">[행삭제]</div>
				<div id="project_row_add">[행추가]</div>
			</div>	
				
		</div>
	</div>
	
</body>
</html>