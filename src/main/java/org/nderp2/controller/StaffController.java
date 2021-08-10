package org.nderp2.controller;

import org.nderp2.domain.Staff;
import org.nderp2.service.CodeService;
import org.nderp2.service.StaffService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RequestMapping("/*")
@RestController
@Log4j
@AllArgsConstructor
public class StaffController {

	private StaffService service;
	
	@PostMapping(value="/create",
				consumes="application/json",
				produces={MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> createStaff(@RequestBody Staff staff){
			int insertCount = service.create(staff);
			
			return insertCount==1
					? new ResponseEntity<>("success",HttpStatus.OK)
					: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
}
