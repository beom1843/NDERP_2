package org.nderp2.mapper;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.nderp2.code.domain.CodeBank;
import org.nderp2.domain.Staff;
import org.nderp2.mapper.CodeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
@Log4j
public class MapperTests {

	@Setter(onMethod_=@Autowired)
//	private CodeMapper mapper;
	private StaffMapper mapper;
	
//	@Test
//	public void testCode(){
//		List<CodeBank> list = mapper.getBank();
//		for(int i = 0 ;i <list.size();i++){
//			CodeBank dao= list.get(i);
//			log.info(dao.toString());
//		}
//	
//	}
	
	@Test
	public void testCode(){
		log.info(mapper.getCurrentNo());
	}
	
//	@Test
//	public void testCreate(){
//		Staff staff = new Staff();
//		staff.setId("beom1843");
//		staff.setPw("1234");
//		staff.setName("조명범");
//		staff.setId_no("9210152222222");
//		staff.setHp("01067051843");
//		staff.setEmail("beom1843@gmail.com");
//		staff.setReligion("2");
//		staff.setMilitary("6");
//		staff.setAddress("서울 마포구 동교로 53 5층");
//		staff.setZipcode("04018");
//		log.info(staff);
//		int no = mapper.createStaff(staff);
//		
//	}
	
}
