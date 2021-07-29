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

	<!-- CSS -->
	<link rel="stylesheet" type="text/css"	href="/resources/css/create.css" />

</head>
<body>
	<div class="title">
		1. 개인정보
	</div>
	<div id = "title1">
		<table class ="style1">
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
				<td><div id="religion"></div></td>
				
				<th>병역</th>
				<td><div id="military"></div></td>
			</tr>
			
			<tr>
				<th>
					긴급연락처<br>
					(사고 대비)
				</th>
				<td colspan="5">
				[연락 받을 사람 이름]: <input type="text" id="hotline_name">
				[관계]: <input type="text" id="hotline_relation">
				[전화번호]: <input type="text" id="hotline_hp">
				</td>
			</tr>

			<tr>
				<th>
					월급통장번호
				</th>
				<td colspan="5">
					<div id="bank"></div>
					<input type="text" id="bank_no">
					(-없이 입력)
				</td>
			</tr>							
		</table>
	</div>
	
	<div class="title">
		2. 학력
	</div>
	<div id = "title2">
		<table class ="style2">
			
		</table>
	</div>	
	
	<div class="title">
		3. 가족
	</div>
	<div id = "title3">
		<table class ="style2">
			
		</table>	
	</div>
	
	<div class="title">
		4. 회사 경력
	</div>
	<div id = "title4">
		<table class ="style2">
			
		</table>	
	</div>
	
	<div class="title">
		5. 자격증
	</div>
	<div id = "title5">
	</div>
		
	<div class="title">
		6. 외국어 (중급이상만 입력)
	</div>
	<div id = "title6">
		<table class ="style1">
			
		</table>
	</div>
	
	<div class="title">
		7. IT 교육센터
	</div>
	<div id = "title7">
		<table class ="style2">
			
		</table>	
	</div>
	
	<div class="title">
		8. 기호
	</div>
	<div id="title8">
	</div>
	
	<div class="title">
		9. 기호
	</div>
	<div id="title9">
	</div>
	
	<div class="title">
		10. 개발 경력
	</div>
	<div id="title10">
		<table class ="style2">
			
		</table>	
	</div>
	
</body>
</html>