package org.nderp2.service;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.nderp2.domain.Criteria;
import org.nderp2.domain.Hobby;
import org.nderp2.domain.Hotline;
import org.nderp2.domain.ResultDAO;
import org.nderp2.domain.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
@Log4j
@WebAppConfiguration
public class ServiceTests {

	@Setter(onMethod_={@Autowired})
	private StaffService service;

	/*@Test
	public void createTest(){

		Staff staff = new Staff();
		staff.setStaff_id("beom8990");
		staff.setStaff_pw("1234");
		staff.setStaff_name("조명범");
		staff.setStaff_id_no("9210151111111");
		staff.setStaff_hp("01067051833");
		staff.setStaff_email("beom1833@gmail.com");
		staff.setStaff_religion("2");
		staff.setStaff_military("6");
		staff.setStaff_address("서울 마포구 동교로 53 5층");
		staff.setStaff_zipcode("04018");
		log.info(staff);
		
		String[] hobbyList={"요리하기","코딩하기","운동하기"};
		staff.setHobbyArr(hobbyList);
		
		Hotline hotline = new Hotline();
		hotline.setHotline_code(1);
		hotline.setHotline_hp("01045677890");
		hotline.setHotline_name("조야코");
		staff.setHotline(hotline);
		
		service.create(staff);
	}*/
	
	@Test
	public void searchTest(){
		Criteria cri = new Criteria(0, 0);
		List<ResultDAO> list = service.search(cri);
		log.info(list);
	}
}
