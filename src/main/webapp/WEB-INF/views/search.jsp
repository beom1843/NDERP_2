<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>정규직 검색</title>
	<!-- jQuery library -->
	<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>

	<!-- CodeInfo Module -->
	<script src="/resources/js/codeInfo.js"></script>
	<script src="/resources/js/search_code.js"></script>
	<script src="/resources/js/staffInfo.js"></script>
	<script src="/resources/js/search.js"></script>

	<!-- CSS -->
	<link rel="stylesheet" type="text/css"	href="/resources/css/search.css" />

</head>
<body>
	<div id="part1_keyword">
		<table id="style1">
			<tr>
				<th>키워드</th>
				<td>
					<input type="text" id="keyword1"> 
						<select name="keyMethod">
							<option value="or">or</option>
							<option value="and">and</option>
						</select> 
					<input type="text" id="keyword2">
				</td>
			</tr>
		</table>
	</div>
	<div id="part2_project">
		<table id="style2">
			<tr>
				<th>개발 년차</th>
				<td>
					<select class="number" name="devCareer1"></select>년차 ~ <select class="number" name="devCareer2"></select>년차
				</td>
			</tr>
			<tr>
				<th>종합 소유 기술</th>
				<td>
					<input type="radio" name="skillMethod" value="or">or <input type="radio"name="skillMethod" value="and">and
					<select class="project_language" name="project_language"></select>
					<select class="project_framework" name="project_framework"></select>
					<select class="project_dbms" name="project_dbms"></select>
					<select class="project_devetc" name="project_devetc"></select>
				
				</td>
			</tr>
			<tr>
				<th>최종학력</th>
				<td>
						<input type="checkbox" name="education" value="1">고졸
						<input type="checkbox" name="education" value="2">전문대졸
						<input type="checkbox" name="education" value="3">일반대학사졸
						<input type="checkbox" name="education" value="4">일반대석사졸
						<input type="checkbox" name="education" value="5">일반대 박사졸
				</td>
			</tr>
			<tr>
				<th>자격증</th>
				<td>
					<div id="certiChk">						
					</div>
				</td>
			</tr>
			<tr>
				<th>역할</th>
				<td>
					<div id="roleChk">						
					</div>
				</td>
			</tr>
			<tr>
				<th>프로젝트 시작일</th>
				<td>
					<select class="year" name="project_start1_y"></select>년
					<select class="month" name="project_start1_m"></select>월
					~
					<select class="year" name="project_start2_y"></select>년
					<select class="month" name="project_start2_m"></select>월
					<div id="today"><a href="#">[오늘]</a></div>
				</td>
			</tr>
			<tr>
				<th>프로젝트 종료일</th>
				<td>
					<select class="year" name="project_end1_y"></select>년
					<select class="month" name="project_end1_m"></select>월
					~
					<select class="year" name="project_end2_y"></select>년
					<select class="month" name="project_end2_m"></select>월
					<div id="today"><a href="#">[오늘]</a></div>
				</td>
			</tr>
		</table>
	</div>
	<div id="part3_graduate">	
		<table id="style2">
			<tr>
				<th>졸업학부</th>
				<td><div id="collegeChk"></div></td>
			</tr>
			<tr>
				<th>졸업년도</th>
				<td>
					<select class="year" name="graduate1_y"></select>년 ~
					<select class="year" name="graduate2_y"></select>년
				</td>
			</tr>
		</table>
	</div>
	
	<div id="part4_basic">	
		<table id="style2">
			<tr>
				<th>성별</th>
				<td>
					<input type="checkbox" name="sex" value="1">남
					<input type="checkbox" name="sex" value="2">여
				</td>
			</tr>
			<tr>
				<th>생일</th>
				<td>
					<select class="year" name="birth1_y"></select>년
					<select class="month" name="birth1_m"></select>월
					~
					<select class="year" name="birth2_y"></select>년
					<select class="month" name="birth2_m"></select>월
				</td>
			</tr>
			<tr>
				<th>나이</th>
				<td>
					<select class ="age" name="age1"></select>세 ~
					<select class ="age" name="age2"></select>세
				</td>
			</tr>
		</table>
	</div>
	
	<div id="part5_additional">	
		<table id="style2">
			<tr>
				<th>회사 경력 분야</th>
				<td><div id="careerChk"></div></td>
				<th>회사 경력 기간</th>
				<td>
					<select class="number" name="career1_y"></select>년 ~
					<select class="number" name="career2_y"></select>년
				</td>
			</tr>
			<tr>
				<th>독해 외국어</th>
				<td><div id="foreignlangReadChk"></div></td>
				<th>회화 외국어</th>
				<td><div id="foreignlangSpeakChk"></div></td>
			</tr>
			<tr>
				<th>소주 주량</th>
				<td>
					<select class="soju"></select>병 ~ <select name="soju"></select>병
				</td>
				<th>맥주 주량</th>
				<td>
					<select class="beer"></select>잔 ~ <select name="beer"></select>잔   (500cc 기준)
				</td>
			</tr>
			<tr>
				<th>병역</th>
				<td colspan="3"><div id="militaryChk"></div></td>
			</tr>
		</table>
	</div>	
	
	
	<div>
		<div id="search_btn"><button type="button" id="search_button">검색</button></div>
		<div id="reset_btn"><button type="button" id="reset_button">초기화 후 전부 검색</button></div>
		<div id="create_btn"><button type="button" id="create_button">[정규직] 입력</button></div>
	</div>
	
	<div>
		<div id="pagination"></div>
		<div id="criteria"></div>
		<div id="result"></div>
	</div>
	
</body>
</html>