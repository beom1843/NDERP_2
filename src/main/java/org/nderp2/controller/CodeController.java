package org.nderp2.controller;

import java.util.List;

import org.nderp2.code.domain.CodeBank;
import org.nderp2.code.domain.CodeBeer;
import org.nderp2.code.domain.CodeCareer;
import org.nderp2.code.domain.CodeCertification;
import org.nderp2.code.domain.CodeCollege;
import org.nderp2.code.domain.CodeDbms;
import org.nderp2.code.domain.CodeDepartment;
import org.nderp2.code.domain.CodeDevetc;
import org.nderp2.code.domain.CodeFamily;
import org.nderp2.code.domain.CodeForeignlang;
import org.nderp2.code.domain.CodeFramework;
import org.nderp2.code.domain.CodeHired;
import org.nderp2.code.domain.CodeHotline;
import org.nderp2.code.domain.CodeInstStack;
import org.nderp2.code.domain.CodeInterest;
import org.nderp2.code.domain.CodeLanguage;
import org.nderp2.code.domain.CodeMilitary;
import org.nderp2.code.domain.CodePosition;
import org.nderp2.code.domain.CodeReligion;
import org.nderp2.code.domain.CodeRole;
import org.nderp2.code.domain.CodeServer;
import org.nderp2.code.domain.CodeSmoking;
import org.nderp2.code.domain.CodeSoju;
import org.nderp2.service.CodeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@RequestMapping("/*")
@RestController
@Log4j
@AllArgsConstructor
public class CodeController {

	private CodeService service;

	@GetMapping(value = "/codeReligion", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeReligion>> getReligion() {

		return new ResponseEntity<List<CodeReligion>>(service.getReligion(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeMilitary", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeMilitary>> getMilitary() {

		return new ResponseEntity<List<CodeMilitary>>(service.getMilitary(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeHotline", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeHotline>> getHotline() {

		return new ResponseEntity<List<CodeHotline>>(service.getHotline(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeBank", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeBank>> getBank() {

		return new ResponseEntity<List<CodeBank>>(service.getBank(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeCollege", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeCollege>> getCollege() {

		return new ResponseEntity<List<CodeCollege>>(service.getCollege(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeFamily", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeFamily>> getFamily() {

		return new ResponseEntity<List<CodeFamily>>(service.getFamily(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeCareer", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeCareer>> getCareer() {

		return new ResponseEntity<List<CodeCareer>>(service.getCareer(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeDepartment", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeDepartment>> getDepartment() {

		return new ResponseEntity<List<CodeDepartment>>(service.getDepartment(), HttpStatus.OK);
	}

	@GetMapping(value = "/codePosition", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodePosition>> getPosition() {

		return new ResponseEntity<List<CodePosition>>(service.getPosition(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeHired", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeHired>> getHired() {
		return new ResponseEntity<List<CodeHired>>(service.getHired(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeCertification", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeCertification>> getCertification() {
		return new ResponseEntity<List<CodeCertification>>(service.getCertification(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeForeignlang", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeForeignlang>> getForeignlang() {
		return new ResponseEntity<List<CodeForeignlang>>(service.getForeignlang(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeInstStack", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeInstStack>> getInstStack() {
		return new ResponseEntity<List<CodeInstStack>>(service.getInstStack(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeSmoking", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeSmoking>> getSmoking() {
		return new ResponseEntity<List<CodeSmoking>>(service.getSmoking(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeSoju", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeSoju>> getSoju() {
		return new ResponseEntity<List<CodeSoju>>(service.getSoju(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeBeer", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeBeer>> getBeer() {
		return new ResponseEntity<List<CodeBeer>>(service.getBeer(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeInterest", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeInterest>> getInterest() {
		return new ResponseEntity<List<CodeInterest>>(service.getInterest(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeRole", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeRole>> getRole() {
		return new ResponseEntity<List<CodeRole>>(service.getRole(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeServer", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeServer>> getServer() {
		return new ResponseEntity<List<CodeServer>>(service.getServer(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeLanguage", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeLanguage>> getLanguage() {
		return new ResponseEntity<List<CodeLanguage>>(service.getLanguage(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeFramework", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeFramework>> getFramework() {
		return new ResponseEntity<List<CodeFramework>>(service.getFramework(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeDbms", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeDbms>> getDbms() {
		return new ResponseEntity<List<CodeDbms>>(service.getDbms(), HttpStatus.OK);
	}

	@GetMapping(value = "/codeDevetc", produces = { MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_UTF8_VALUE })
	public ResponseEntity<List<CodeDevetc>> getDevetc() {
		return new ResponseEntity<List<CodeDevetc>>(service.getDevetc(), HttpStatus.OK);
	}

}
