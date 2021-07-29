package org.nderp2.mapper;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.nderp2.code.domain.CodeBank;
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
	private CodeMapper mapper;
	
	@Test
	public void testCode(){
		List<CodeBank> list = mapper.getBank();
		for(int i = 0 ;i <list.size();i++){
			CodeBank dao= list.get(i);
			log.info(dao.toString());
		}
	
	}
	
}
