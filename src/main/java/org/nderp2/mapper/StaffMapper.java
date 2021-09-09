package org.nderp2.mapper;

import java.util.List;

import org.nderp2.domain.Bank;
import org.nderp2.domain.Career;
import org.nderp2.domain.Certification;
import org.nderp2.domain.Criteria;
import org.nderp2.domain.Family;
import org.nderp2.domain.Foreignlang;
import org.nderp2.domain.Hobby;
import org.nderp2.domain.Hotline;
import org.nderp2.domain.Institution;
import org.nderp2.domain.InstitutionStack;
import org.nderp2.domain.TasteInterest;
import org.nderp2.domain.Project;
import org.nderp2.domain.ProjectDbms;
import org.nderp2.domain.ProjectDevetc;
import org.nderp2.domain.ProjectFramework;
import org.nderp2.domain.ProjectLanguage;
import org.nderp2.domain.ProjectOs;
import org.nderp2.domain.ProjectRole;
import org.nderp2.domain.ProjectServer;
import org.nderp2.domain.ResultDAO;
import org.nderp2.domain.School;
import org.nderp2.domain.Staff;
import org.nderp2.domain.Taste;

public interface StaffMapper {

	public int getCurrentStaffNo();
	public int getCurrentInstNo();
	public int getCurrentProjectNo();
	public int getCurrentTasteNo();
	public int createStaff(Staff staff);
	public int insertHotline(Hotline hotline);
	public int insertBank(Bank bank);
	public int insertSchool(School school);
	public int insertFamily(Family family);
	public int insertCareer(Career career);
	public int insertCertification(Certification certification);
	public int insertForeignlang(Foreignlang foreignlang);
	public int insertInstitution(Institution institution);
	public int insertInstStack(InstitutionStack institutionStack);
	public int insertTaste(Taste taste);
	public int insertTasteInterest(TasteInterest interest);
	public int insertHobby(Hobby hobby);
	public int insertProject(Project project);
	public int insertRole(ProjectRole role);
	public int insertDbms(ProjectDbms dbms);
	public int insertDevetc(ProjectDevetc devetc);
	public int insertFramework(ProjectFramework framework);
	public int insertLanguage(ProjectLanguage language);
	public int insertOs(ProjectOs os);
	public int insertServer(ProjectServer server);
	
	public Staff readStaff(int staff_no);
	public Staff readBank(int staff_no);
	public List<Career> readCareer(int staff_no);
	public List<Certification> readCertification(int staff_no);
	public List<Family> readFamily(int staff_no);
	public List<Foreignlang> readForeignlang(int staff_no);
	public List<Hobby> readHobby(int staff_no);
	
	
	public List<ResultDAO> search(Criteria cri);
	public int getTotal(Criteria cri);
}
