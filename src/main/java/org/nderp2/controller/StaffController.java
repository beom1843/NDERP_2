package org.nderp2.controller;

import java.util.List;

import org.nderp2.code.domain.CodeReligion;
import org.nderp2.domain.Criteria;
import org.nderp2.domain.ResultDAO;
import org.nderp2.domain.Staff;
import org.nderp2.dto.PageDTO;
import org.nderp2.service.CodeService;
import org.nderp2.service.StaffService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RequestMapping("/*")
@RestController
@Log4j
@AllArgsConstructor
public class StaffController {

	private StaffService service;
	
	@ApiOperation(value="정규직 등록")
	@ApiResponses({
		@ApiResponse(code=200,message="OK"),
		@ApiResponse(code=500,message="Exception")
	})
	@PostMapping(value="/create",
				consumes="application/json",
				produces={MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> createStaff(@RequestBody Staff staff){
			int insertCount = service.create(staff);
			
			return "".equals(insertCount)
					? new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR)
					: new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@PostMapping(value="/searchResult",
			consumes = "application/json",
					produces = { MediaType.APPLICATION_JSON_UTF8_VALUE,
							MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<ResultDAO>> search(@RequestBody Criteria cri) {
		cri.setMethod("");
		List<ResultDAO> list = service.search(cri);
		log.info(cri.getKeyword()+"//"+cri.getKeyword1()+"//"+cri.getKeyword2()+"//"+cri.getKeywordRadio());
		
		return new ResponseEntity<List<ResultDAO>>(list, HttpStatus.OK);
	}
	
	@PostMapping(value="/page",
			consumes = "application/json",
			produces = { MediaType.APPLICATION_JSON_UTF8_VALUE,
					MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<PageDTO> getPage(@RequestBody Criteria cri){
		
		int size = service.getTotal(cri);
		PageDTO pageMaker = new PageDTO(cri,size);
		
		return new ResponseEntity<PageDTO>(pageMaker,HttpStatus.OK);
	}
	
	@GetMapping(value = "/get/{staff_no}", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<Staff> getStaff(@PathVariable("staff_no") int staff_no) {

		return new ResponseEntity<Staff>(service.readStaff(staff_no), HttpStatus.OK);
	}
	
	
	
}
