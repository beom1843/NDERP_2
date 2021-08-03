package org.nderp2.service;

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
import org.nderp2.code.domain.CodeOs;
import org.nderp2.code.domain.CodePosition;
import org.nderp2.code.domain.CodeReligion;
import org.nderp2.code.domain.CodeRole;
import org.nderp2.code.domain.CodeServer;
import org.nderp2.code.domain.CodeSmoking;
import org.nderp2.code.domain.CodeSoju;
import org.nderp2.mapper.CodeMapper;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.extern.log4j.Log4j;


@AllArgsConstructor
@Log4j
@Service
public class CodeServiceImpl implements CodeService {
	
	private CodeMapper mapper;
	
	
	@Override
	public List<CodeReligion> getReligion() {

		return mapper.getReligion();
	}

	@Override
	public List<CodeMilitary> getMilitary() {

		return mapper.getMilitary();
	}

	@Override
	public List<CodeHotline> getHotline() {

		return mapper.getHotline();
	}

	@Override
	public List<CodeBank> getBank() {

		return mapper.getBank();
	}

	@Override
	public List<CodeCollege> getCollege() {

		return mapper.getCollege();
	}

	@Override
	public List<CodeFamily> getFamily() {

		return mapper.getFamily();
	}

	@Override
	public List<CodeCareer> getCareer() {

		return mapper.getCareer();
	}

	@Override
	public List<CodeDepartment> getDepartment() {

		return mapper.getDepartment();
	}

	@Override
	public List<CodePosition> getPosition() {

		return mapper.getPosition();
	}

	@Override
	public List<CodeHired> getHired() {

		return mapper.getHired();
	}

	@Override
	public List<CodeCertification> getCertification() {

		return mapper.getCertification();
	}

	@Override
	public List<CodeForeignlang> getForeignlang() {

		return mapper.getForeignlang();
	}

	@Override
	public List<CodeInstStack> getInstStack() {

		return mapper.getInstStack();
	}

	@Override
	public List<CodeSmoking> getSmoking() {

		return mapper.getSmoking();
	}

	@Override
	public List<CodeSoju> getSoju() {

		return mapper.getSoju();
	}

	@Override
	public List<CodeBeer> getBeer() {

		return mapper.getBeer();
	}

	@Override
	public List<CodeInterest> getInterest() {

		return mapper.getInterest();
	}

	@Override
	public List<CodeRole> getRole() {

		return mapper.getRole();
	}

	@Override
	public List<CodeServer> getServer() {

		return mapper.getServer();
	}
	
	@Override
	public List<CodeOs> getOs() {
		
		return mapper.getOs();
	}

	@Override
	public List<CodeLanguage> getLanguage() {

		return mapper.getLanguage();
	}

	@Override
	public List<CodeFramework> getFramework() {

		return mapper.getFramework();
	}

	@Override
	public List<CodeDbms> getDbms() {

		return mapper.getDbms();
	}

	@Override
	public List<CodeDevetc> getDevetc() {

		return mapper.getDevetc();
	}

}
