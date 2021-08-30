$(document).ready(function(){
	/*비움*/
	$("#d_keyword").on("click",function(e){
		document.getElementById('keyword1').value="";
		document.getElementById('keyword2').value="";
	})
	$("#d_devyear").on("click",function(e){
		$("select[name='devCareer1'] option:eq(0)").prop("selected",true);
		$("select[name='devCareer2'] option:eq(0)").prop("selected",true);
	})
	$("#d_skill").on("click",function(e){
		$("input[name='skillMethod']").prop('checked',false);
		$("select[name='project_language'] option:eq(0)").prop("selected",true);
		$("select[name='project_framework'] option:eq(0)").prop("selected",true);
		$("select[name='project_dbms'] option:eq(0)").prop("selected",true);
		$("select[name='project_devetc'] option:eq(0)").prop("selected",true);
	})
	$("#d_edu").on("click",function(e){
		$("input[name='education']").prop('checked',false);
	})
	$("#d_certi").on("click",function(e){
		$("input[name='certification']").prop('checked',false);
	})
	$("#d_role").on("click",function(e){
		$("input[name='role']").prop('checked',false);
	})
	$("#d_start").on("click",function(e){
		$("select[name='project_start1_y'] option:eq(0)").prop("selected",true);
		$("select[name='project_start1_m'] option:eq(0)").prop("selected",true);
		$("select[name='project_start2_y'] option:eq(0)").prop("selected",true);
		$("select[name='project_start2_m'] option:eq(0)").prop("selected",true);
	})
	$("#d_end").on("click",function(e){
		$("select[name='project_end1_y'] option:eq(0)").prop("selected",true);
		$("select[name='project_end1_m'] option:eq(0)").prop("selected",true);
		$("select[name='project_end2_y'] option:eq(0)").prop("selected",true);
		$("select[name='project_end2_m'] option:eq(0)").prop("selected",true);
	})
	$("#d_college").on("click",function(e){
		$("input[name='college']").prop('checked',false);
	})	
	$("#d_grad").on("click",function(e){
		$("select[name='graduate1_y'] option:eq(0)").prop("selected",true);
		$("select[name='graduate2_y'] option:eq(0)").prop("selected",true);
	})
	$("#d_sex").on("click",function(e){
		$("input[name='sex'] option:eq(0)").prop("selected",true);
		$("input[name='sex'] option:eq(0)").prop("selected",true);
	})
	$("#d_birthy").on("click",function(e){
		$("select[name='birth1_y'] option:eq(0)").prop("selected",true);
		$("select[name='birth1_m'] option:eq(0)").prop("selected",true);
		$("select[name='birth2_y'] option:eq(0)").prop("selected",true);
		$("select[name='birth2_m'] option:eq(0)").prop("selected",true);
	})
	$("#d_age").on("click",function(e){
		$("select[name='age1'] option:eq(0)").prop("selected",true);
		$("select[name='age2'] option:eq(0)").prop("selected",true);
	})
	$("#d_career").on("click",function(e){
		$("input[name='career']").prop('checked',false);
	})
	$("#d_career_y").on("click",function(e){
		$("select[name='career1_y'] option:eq(0)").prop("selected",true);
		$("select[name='career2_y'] option:eq(0)").prop("selected",true);
	})
	$("#d_langread").on("click",function(e){
		$("input[name='foreignlangRead']").prop('checked',false);
	})
	$("#d_langspeak").on("click",function(e){
		$("input[name='foreignlangSpeak']").prop('checked',false);
	})
	$("#d_soju").on("click",function(e){
		$("select[name='soju1'] option:eq(0)").prop("selected",true);
		$("select[name='soju2'] option:eq(0)").prop("selected",true);
	})
	$("#d_beer").on("click",function(e){
		$("select[name='beer1'] option:eq(0)").prop("selected",true);
		$("select[name='beer2'] option:eq(0)").prop("selected",true);
	})
	$("#d_military").on("click",function(e){
		$("input[name='military']").prop('checked',false);
	})
	
	$("#create_btn").on("click",function(e){
		e.preventDefault(e);
		var url="create";
		var name="정규직 입력";
		var option="height=100";
		window.open(url,name,option);
	})
	
	var resultPlace=$("#result");
	
	var m1 = 0;
	var m2 = 0;
	var m3 = 0;
	var m4 = 0;
	var m5 = 0;
	var m6 = 0;
	var m7 = 0;
	var m8 = 0;
	var m9 = 0;
	var m10 = 0;
	var m11 = 0;
	var m12 = 0;
	var m13 = 0;
	var m14 = 0;
	var m =0;
	var c="";
	var counts = [m1, m2, m3, m4, m5,m6,m7,m8,m9,m10,m11,m12,m13,m14 ]
	
	var sortCondition={
			c:"",
			m:"",
			page:""
		}

	window.sortCount=function(element){
		console.log($(element).val());
		//element++
		var value = $(element).val();


		function check(x){
			for(var i = 0 ; i<14 ; i++){
				if(!i==x&&!(counts[i]==0)){
					counts[i]=0
				}
			}
		}//sortCount안의 check 함수 
	
		
		switch(value){
		case "rownum":
			check(0);
			
			m=counts[0]
			m++;
			counts[0]=m
			
			c=value;
			break;
			
		case "a.staff_name":
			check(1);
			
			m=counts[1]
			m++;
			counts[1]=m
			
			c=value;
			break;
			
		case "a.sex":
			check(2);
			
			m=counts[2]
			m++;
			counts[2]=m
			
			c=value;
			break;
			
		case "a.birthy":
			check(3);
			
			m=counts[3]
			m++;
			counts[3]=m
			
			c=value;
			break;
			
		case "a.age":
			check(4);
			
			m=counts[4]
			m++;
			counts[4]=m
			
			c=value;
			break;	
			
		case "a.staff_hp":
			check(5);
			
			m=counts[5]
			m++;
			counts[5]=m
			
			c=value;
			break;	
			
		case "a.staff_email":
			check(6);
			
			m=counts[6]
			m++;
			counts[6]=m
			
			c=value;
			break;	
			
		case "a.staff_id_no":
			check(7);
			
			m=counts[7]
			m++;
			counts[7]=m
			
			c=value;
			break;	
			
		case "a.staff_address":
			check(8);
			
			m=counts[8]
			m++;
			counts[8]=m
			
			c=value;
			break;	
			
		case "b.education_code":
			check(9);
			
			m=counts[9]
			m++;
			counts[9]=m
			
			c=value;
			break;	
			
		case "b.graduate_y":
			check(10);
			
			m=counts[10]
			m++;
			counts[10]=m
			
			c=value;
			break;	
			
		case "c.dev_y":
			check(11);
			
			m=counts[11]
			m++;
			counts[11]=m
			
			c=value;
			break;	
			
		case "c.staff_total_skill":
			check(12);
			
			m=counts[12]
			m++;
			counts[12]=m
			
			c=value;
			break;	
			
		case "d.staff_certification":
			check(13);
			
			m=counts[13]
			m++;
			counts[13]=m
			
			c=value;
			break;	
			
		}
		
		sortCondition={
			c:c,
			m:m,
			page:"1"
		}	
		console.log("??"+sortCondition.c+sortCondition.m+sortCondition.page)
		search(sortCondition);
	}//sortCount 함수 끝

		
	function search(sortCondition){
		console.log("!!"+sortCondition.c+sortCondition.m+sortCondition.page)	
		
		if(sortCondition){
			var cnt= sortCondition.m%2
			if(cnt==1){
				sortCondition.m="desc"
			}else{
				sortCondition.m="asc"
			}
			console.log(sortCondition)
			if(sortCondition.c==""){
				condition="rownum desc";
				page=sortCondition.page
			}else{
				
				page=sortCondition.page
				condition=sortCondition.c+" "+sortCondition.m
			}
		}else{
			condition="rownum" 
			page =1;
		}

		console.log(condition+"조건")
		
		var type="";
		var sType="";
		var keyword1=$("#keyword1").val();
		var keyword2=$("#keyword2").val();
		var dev_y1=$("select[name='devCareer1']").val();
		var dev_y2=$("select[name='devCareer2']").val();
		
		var skillRadio=$("input[name='skillMethod']:checked").val();
		
		var project_language=$("select[name='project_language']").val();
		var project_framework=$("select[name='project_framework']").val();
		var project_dbms=$("select[name='project_dbms']").val();
		var project_devetc=$("select[name='project_devetc']").val();
		
		var edu="";
		$("input[name='education']:checked").each(function(i){
			edu += $(this).val();
		})
		var certi="";
		$("input[name='certification']:checked").each(function(i){
			certi += $(this).val();
		})
		var role="";
		$("input[name='role']:checked").each(function(i){
			role += $(this).val();
		})
		
		var s1_y=$("select[name='project_start1_y']").val();
		var s1_m=$("select[name='project_start1_m']").val();
		var s2_y=$("select[name='project_start2_y']").val();
		var s2_m=$("select[name='project_start2_m']").val();
		
		var e1_y=$("select[name='project_end1_y']").val();
		var e1_m=$("select[name='project_end1_m']").val();
		var e2_y=$("select[name='project_end2_y']").val();
		var e2_m=$("select[name='project_end2_m']").val();
		if(s1_m.length==1){
			s1_m="0"+s1_m
		}
		if(s2_m.length==1){
			s2_m="0"+s2_m
		}
		if(e1_m.length==1){
			e1_m="0"+e1_m
		}
		if(e2_m.length==1){
			e2_m="0"+e2_m
		}
		
		var projectStartDay1=s1_y+s1_m;
		var projectStartDay2=s2_y+s2_m;;
		var projectEndDay1=e1_y+e1_m;
		var projectEndDay2=e2_y+e2_m;
		
		var college="";
		$("input[name='college']:checked").each(function(i){
			college+= $(this).val();
		})
		var graduateDay1=$("select[name='graduate1_y']").val();
		var graduateDay2=$("select[name='graduate2_y']").val();
		var sex="";
		$("input[name='sex']:checked").each(function(i){
			sex+= $(this).val();
		})
		
		var b1_y=$("select[name='birth1_y']").val();
		var b1_m=$("select[name='birth1_m']").val();
		var b2_y=$("select[name='birth2_y']").val();
		var b2_m=$("select[name='birth2_m']").val();
		if(b1_m.length==1){
			b1_m="0"+b1_m;
		}
		if(b2_m.length==1){
			b2_m="0"+b2_m;
		}
		var birthDay1=b1_y+b1_m;
		var birthDay2=b2_y+b2_m;
		var age1=$("select[name='age1']").val();
		var age2=$("select[name='age2']").val();
		
		var career="";
		$("input[name='career']:checked").each(function(i){
			career+= $(this).val();
		})
		
		var career1=$("select[name='career1_y']").val()
		var career2=$("select[name='career2_y']").val()
		
		var foreignRead="";
		$("input[name='foreignlangRead']:checked").each(function(i){
			foreignRead+= $(this).val();
		})
		var foreignSpeak="";
		$("input[name='foreignlangSpeak']:checked").each(function(i){
			foreignSpeak+= $(this).val();
		})
		var soju1=$("select[name='soju1']").val()
		var soju2=$("select[name='soju2']").val()
		var beer1=$("select[name='beer1']").val()
		var beer2=$("select[name='beer2']").val()
		
		var military="";
		$("input[name='military']:checked").each(function(i){
			military+= $(this).val();
		})
		
		if(dev_y1&dev_y2){
			type +="a"
		}
		if(edu){
			type +="c"
		}
		if(certi){
			type+="d"
		}
		if(role){
			type+="e"
		}
		if(project_language||project_framework||project_dbms||project_devetc){
			type+="b"
			if(project_language){
				console.log("언어"+project_language)
				sType+="a"
			}
			if(project_framework){
				console.log("프워"+project_framework)
				sType+="b"
			}
			if(project_dbms){
				console.log("dbms"+project_dbms)
				sType+="c"
			}
			if(project_devetc){
				console.log("devetc"+project_devetc)
				sType+="d"
			}
		}
		if(projectStartDay1&&projectStartDay2){
			type+="f"
		}
		if(projectEndDay1&&projectEndDay2){
			type+="g"
		}
		if(college){
			type+="h"
		}
		if(graduateDay1&&graduateDay2){
			type+="i";
		}
		if(sex){
			type+="j";
		}
		if(birthDay1&&birthDay2){
			type+="k";
		}
		if(age1&&age2){
			type+="l";
		}
		if(career){
			type+="m";
		}
		if(career1&&career2){
			type +="n";
		}
		if(foreignRead){
			type+="o";
		}
		if(foreignSpeak){
			type+="p";
		}
		if(soju1&&soju2){
			type+="q"
		}
		if(beer1&&beer2){
			type+="r"
		}
		if(military){
			type+="s"
		}
		console.log(condition);
		staffInfoService.search({
			pageNum:page,
			amount:5,
			sortCondition:condition,
			
			type:type,

			keyword1:0,
			keyword2:0,
			
			dev1:dev_y1,
			dev2:dev_y2,
			
			skillRadio:skillRadio,
			skill:sType,
			
			project_language:project_language,
			project_framework:project_framework,
			project_dbms:project_dbms,
			project_devetc:project_devetc,
			
			edu:edu,
			certi:certi,
			role:role,
			
			projectStartDay1:projectStartDay1,
			projectStartDay2:projectStartDay2,
			projectEndDay1:projectEndDay1,
			projectEndDay2:projectEndDay2,
			
			college:college,
			
			graduateDay1:graduateDay1,
			graduateDay2:graduateDay2,
			
			sex:sex,
			
			birthDay1:birthDay1,
			birthDay2:birthDay2,
			age1:age1,
			age2:age2,
			career:career,
			career1:career1,
			career2:career2,
			foreignread:foreignRead,
			foreignspeak:foreignSpeak,
			soju1:soju1,
			soju2:soju2,
			beer1:beer1,
			beer2:beer2,
			
			military:military
		},
			function(list){
			var str ='<input type="hidden" id="m1" name="m1" value="rownum"/>';
			str+='<input type="hidden" id="m2" name="m2" value="a.staff_name"/>';
			str+='<input type="hidden" id="m3" name="m3" value="a.sex"/>';
			str+='<input type="hidden" id="m4" name="m4" value="a.birthy"/>';
			str+='<input type="hidden" id="m5" name="m5" value="a.age"/>';
			str+='<input type="hidden" id="m6" name="m6" value="a.staff_hp"/>';
			str+='<input type="hidden" id="m7" name="m7" value="a.staff_email"/>';
			str+='<input type="hidden" id="m8" name="m8" value="a.staff_id_no"/>';
			str+='<input type="hidden" id="m9" name="m9" value="a.staff_address"/>';
			str+='<input type="hidden" id="m10" name="m10" value="b.education_code"/>';
			str+='<input type="hidden" id="m11" name="m11" value="b.graduate_y"/>';
			str+='<input type="hidden" id="m12" name="m12" value="c.dev_y"/>';
			str+='<input type="hidden" id="m13" name="m13" value="c.staff_total_skill"/>';
			str+='<input type="hidden" id="m14" name="m14" value="d.staff_certification"/>';
					
			str+="<table id='style3'><tr> <th><div onclick='sortCount(m1)'>번호</div></th><th><div onclick='sortCount(m2)'>이름</div></th><th><div onclick='sortCount(m3)'>성별</div></th><th><div onclick='sortCount(m4)'>출생년도</div></th><th><div onclick='sortCount(m5)'>나이</div></th><th><div onclick='sortCount(m6)'>핸드폰</div></th>";
			str+="<th><div onclick='sortCount(m7)'>이메일</div></th><th><div onclick='sortCount(m8)'>주민번호</div></th><th><div onclick='sortCount(m9)'>거주지</div></th><th><div onclick='sortCount(m10)'>최종학력</div></th><th><div onclick='sortCount(m11)'>최종학력 졸업일</div></th><th><div onclick='sortCount(m12)'>개발년차</div></th><th><div onclick='sortCount(m13)'>종합 소유 기술</div></th><th><div onclick='sortCount(m14)'>자격증</div></th></tr>"
			if(list==null || list.length ==0){}
			for(var i =0, len=list.length||0 ;i<len;i++){
			str +="<tr><td>"+list[i].rn+"</td><td>"+list[i].staff_name+"</td><td>"+list[i].sex+"</td><td>"+list[i].birthy+"</td><td>"+list[i].age;
			str +="</td><td>"+list[i].staff_hp+"</td><td>"+list[i].staff_email+"</td><td>"+list[i].staff_id_no+"</td><td>"+list[i].staff_address+"</td><td>"+list[i].staff_education;
			str +="</td><td>"+list[i].staff_grad_y+"</td><td>"+list[i].staff_dev_year+"</td><td>"+list[i].staff_total_skill+"</td><td>"+list[i].staff_certification
			str +="</td></tr>"	
				}
				console.log("왜안돼?")
			resultPlace.html(str);
		})
		
		var str1="";
		var pagination=$("#pagination")
		var total=$("#total")
		staffInfoService.getPage({
			pageNum:page,
			amount:5,
			sortCondition:condition,
			
			type:type,

			keyword1:0,
			keyword2:0,
			
			dev1:dev_y1,
			dev2:dev_y2,
			
			skillRadio:skillRadio,
			skill:sType,
			
			project_language:project_language,
			project_framework:project_framework,
			project_dbms:project_dbms,
			project_devetc:project_devetc,
			
			edu:edu,
			certi:certi,
			role:role,
			
			projectStartDay1:projectStartDay1,
			projectStartDay2:projectStartDay2,
			projectEndDay1:projectEndDay1,
			projectEndDay2:projectEndDay2,
			
			college:college,
			
			graduateDay1:graduateDay1,
			graduateDay2:graduateDay2,
			
			sex:sex,
			
			birthDay1:birthDay1,
			birthDay2:birthDay2,
			age1:age1,
			age2:age2,
			career:career,
			career1:career1,
			career2:career2,
			foreignread:foreignRead,
			foreignspeak:foreignSpeak,
			soju1:soju1,
			soju2:soju2,
			beer1:beer1,
			beer2:beer2,
			
			military:military
		},
		function(pageMaker){
			if(pageMaker.prev){
				str1+="<li class='paginate_button previous' onclick ='movePage("+(pageMaker.startPage-1)+")' >이전</a></li>"
			}
			for(var i = pageMaker.startPage;i<pageMaker.endPage+1;i++ ){
				if(i==page){ 
				str1+="<li class='paginate_button' onclick ='movePage("+i+")'>["+i+"]</a></li>";
			}else{
					str1+="<li class='paginate_button' onclick ='movePage("+i+")'>"+i+"</a></li>";
				}
			}
			if(pageMaker.next){
				str1+="<li class='paginate_button next' onclick ='movePage("+((pageMaker.endPage*1)+1)+")'>다음</a></li>"
			}
			pagination.html(str1);
			total.html("총 "+pageMaker.total+"건");
			
		})	
	}// function search() 끝
	
	$("#reset_btn").on("click",function(e){
		e.preventDefault(e);
		document.getElementById('keyword1').value="";
		document.getElementById('keyword2').value="";
		$("select[name='devCareer1'] option:eq(0)").prop("selected",true);
		$("select[name='devCareer2'] option:eq(0)").prop("selected",true);
		$("input[name='skillMethod']").prop('checked',false);
		$("select[name='project_language'] option:eq(0)").prop("selected",true);
		$("select[name='project_framework'] option:eq(0)").prop("selected",true);
		$("select[name='project_dbms'] option:eq(0)").prop("selected",true);
		$("select[name='project_devetc'] option:eq(0)").prop("selected",true);
		$("input[name='education']").prop('checked',false);
		$("input[name='certification']").prop('checked',false);
		$("input[name='role']").prop('checked',false);
		$("select[name='project_start1_y'] option:eq(0)").prop("selected",true);
		$("select[name='project_start1_m'] option:eq(0)").prop("selected",true);
		$("select[name='project_start2_y'] option:eq(0)").prop("selected",true);
		$("select[name='project_start2_m'] option:eq(0)").prop("selected",true);
		$("select[name='project_end1_y'] option:eq(0)").prop("selected",true);
		$("select[name='project_end1_m'] option:eq(0)").prop("selected",true);
		$("select[name='project_end2_y'] option:eq(0)").prop("selected",true);
		$("select[name='project_end2_m'] option:eq(0)").prop("selected",true);
		$("input[name='college']").prop('checked',false);
		$("select[name='graduate1_y'] option:eq(0)").prop("selected",true);
		$("select[name='graduate2_y'] option:eq(0)").prop("selected",true);
		$("input[name='sex'] option:eq(0)").prop("selected",true);
		$("input[name='sex'] option:eq(0)").prop("selected",true);
		$("select[name='birth1_y'] option:eq(0)").prop("selected",true);
		$("select[name='birth1_m'] option:eq(0)").prop("selected",true);
		$("select[name='birth2_y'] option:eq(0)").prop("selected",true);
		$("select[name='birth2_m'] option:eq(0)").prop("selected",true);
		$("select[name='age1'] option:eq(0)").prop("selected",true);
		$("select[name='age2'] option:eq(0)").prop("selected",true);
		$("input[name='career']").prop('checked',false);
		$("select[name='career1_y'] option:eq(0)").prop("selected",true);
		$("select[name='career2_y'] option:eq(0)").prop("selected",true);
		$("input[name='foreignlangRead']").prop('checked',false);
		$("input[name='foreignlangSpeak']").prop('checked',false);
		$("select[name='soju1'] option:eq(0)").prop("selected",true);
		$("select[name='soju2'] option:eq(0)").prop("selected",true);
		$("select[name='beer1'] option:eq(0)").prop("selected",true);
		$("select[name='beer2'] option:eq(0)").prop("selected",true);
		$("input[name='military']").prop('checked',false);	
		
		sortCondition.page=1;
		search(sortCondition);

	})
	$("#search_btn").on("click",function(e){
		e.preventDefault(e);
		sortCondition.page=1;
		search(sortCondition);
	})
	
	window.movePage = function(pageNum){
		sortCondition.page= pageNum;
		search(sortCondition);
	}
})