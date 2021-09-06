package org.nderp2.mapper;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.nderp2.code.domain.CodeBank;
import org.nderp2.domain.Criteria;
import org.nderp2.domain.ResultDAO;
import org.nderp2.domain.Staff;
import org.nderp2.mapper.CodeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={ org.nderp2.config.RootConfig.class})
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
	
//	@Test
//	public void testCode(){
//		log.info(mapper.getCurrentStaffNo());
//	}
	
//	@Test
//	public void testCreate(){
//		Staff staff = new Staff();
//		staff.setStaff_id("beom1843");
//		staff.setStaff_pw("1234");
//		staff.setStaff_name("조명범");
//		staff.setStaff_id_no("9210152222222");
//		staff.setStaff_hp("01067051843");
//		staff.setStaff_email("beom1843@gmail.com");
//		staff.setStaff_religion("2");
//		staff.setStaff_military("6");
//		staff.setStaff_address("서울 마포구 동교로 53 5층");
//		staff.setStaff_zipcode("04018");
//		log.info(staff);
//		int no = mapper.createStaff(staff);
//		
//	}

	
	@Test
	public void testSearch(){
		Criteria cri = new Criteria();
		cri.setPageNum(1);
		cri.setAmount(8);
		cri.setSortCondition("a. staff_no");
		cri.setMethod("as");
		List<ResultDAO> list = mapper.search(cri);
		
		System.out.println(cri.getSortCondition());
		ResultDAO r = new ResultDAO();
		for(int i =0;i<list.size();i++){
			r= list.get(i);
			System.out.println(r.getStaff_name());
		}
	}
}
