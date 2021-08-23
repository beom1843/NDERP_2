package org.nderp2.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@AllArgsConstructor
@Log4j
@Controller
@RequestMapping(value="/*", 
produces=MediaType.TEXT_HTML_VALUE)
public class PageController {

	@GetMapping("/create")
	public void create(){
	
	}
	
	@GetMapping("/search")
	public void search(){
	
	}
	
	@GetMapping("/blank")
	public void blank(){
		
	}
	
}
