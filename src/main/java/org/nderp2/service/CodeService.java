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

public interface CodeService {

	public List<CodeReligion> getReligion();
	public List<CodeMilitary> getMilitary();
	public List<CodeHotline> getHotline();
	public List<CodeBank> getBank();
	public List<CodeCollege> getCollege();
	public List<CodeFamily> getFamily();
	public List<CodeCareer> getCareer();
	public List<CodeDepartment> getDepartment();
	public List<CodePosition> getPosition();
	public List<CodeHired> getHired();
	public List<CodeCertification> getCertification();
	public List<CodeForeignlang> getForeignlang();
	public List<CodeInstStack> getInstStack();
	public List<CodeSmoking> getSmoking();
	public List<CodeSoju> getSoju();
	public List<CodeBeer> getBeer();
	public List<CodeInterest> getInterest();
	public List<CodeRole> getRole();
	public List<CodeServer> getServer();
	public List<CodeOs> getOs();
	public List<CodeLanguage> getLanguage();
	public List<CodeFramework> getFramework();
	public List<CodeDbms> getDbms();
	public List<CodeDevetc> getDevetc();
	
}
