package org.nderp2.service;

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
import org.nderp2.mapper.CodeMapper;
import org.nderp2.mapper.StaffMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@AllArgsConstructor
@Log4j
@Service
public class StaffServiceImpl implements StaffService {

	private StaffMapper mapper;
	
	@Override
	public int create(Staff staff) {
		int re =0;
		
		re += mapper.createStaff(staff);
		int staff_no=mapper.getCurrentStaffNo();
			
		Hotline hotline = staff.getHotline();
		hotline.setStaff_no(staff_no);
		re+= mapper.insertHotline(hotline);
		
		Bank bank = staff.getBank();
		bank.setStaff_no(staff_no);
		re+= mapper.insertBank(bank);
		
		List<School> schoolArr = staff.getSchoolArr();
		for(School school: schoolArr){
			if(school.getEducation_code()==1||school.getEducation_code()==0){
				school.setCollege_code(0);
				school.setSchool_major("null");
				school.setSchool_sub("null");
			}
			school.setStaff_no(staff_no);
			re+=mapper.insertSchool(school);
		}
		
		List<Family> familyArr = staff.getFamilyArr();
		for(Family family: familyArr){
			family.setStaff_no(staff_no);
			re+=mapper.insertFamily(family);
		}
		
		List<Career> careerArr = staff.getCareerArr();
		for(Career career: careerArr){
			career.setStaff_no(staff_no);
			re+=mapper.insertCareer(career);
		}
		
		int[] certiArr = staff.getCertificationArr();
		for(int certifi_code: certiArr){
			Certification certi = new Certification();
			certi.setCertification_code(certifi_code);
			certi.setStaff_no(staff_no);
			re+=mapper.insertCertification(certi);
		}
		
		List<Foreignlang> foreignArr = staff.getForeignlangArr();
		
		for(Foreignlang lang: foreignArr){	
			lang.setStaff_no(staff_no);
			re+= mapper.insertForeignlang(lang);
			
		}
		
		Institution institution = staff.getInstitution();
		institution.setStaff_no(staff_no);
		mapper.insertInstitution(institution);
		int institution_no = mapper.getCurrentInstNo();
		int[] instStackArr = institution.getInst_stack_code();
		for(int instStack: instStackArr){
			InstitutionStack stack = new InstitutionStack();
			stack.setInstitution_stack_code(instStack);
			stack.setInstitution_no(institution_no);
			re+=mapper.insertInstStack(stack);
		}
		
		Taste taste = staff.getTaste();
		taste.setStaff_no(staff_no);
		re+= mapper.insertTaste(taste);
		
		int[] interestArr = taste.getInterest();
		int taste_no = mapper.getCurrentTasteNo();
		for(int interest_code : interestArr){
			TasteInterest interest = new TasteInterest();
			interest.setTaste_interest_code(interest_code);
			interest.setTaste_no(taste_no);
			re+= mapper.insertTasteInterest(interest);
			log.info(interest);
		}
		
		
		String[] hobbyArr = staff.getHobbyArr();
		
		for(String hobby_desc : hobbyArr){
			Hobby hobby = new Hobby();
			hobby.setHobby(hobby_desc);
			hobby.setStaff_no(staff_no);
			re+= mapper.insertHobby(hobby);
		}
		
		
		List<Project> projectArr = staff.getProjectArr();
		
		for(Project project: projectArr){
			project.setStaff_no(staff_no);
			mapper.insertProject(project);
			
			int project_no=mapper.getCurrentProjectNo();	
			
			int[] roleArr = project.getProject_role();
			for(int roleCode : roleArr){
				System.out.println("ServiceImpl!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
				System.out.println("roleCode"+roleCode);
				ProjectRole role = new ProjectRole();
				role.setProject_role(roleCode);
				role.setStaff_project_no(project_no);
				re+=mapper.insertRole(role);
			}
			
			
			int[] dbmsArr = project.getProject_dbms();
			for(int dbmsCode: dbmsArr){
				ProjectDbms dbms = new ProjectDbms();
				dbms.setProject_dbms(dbmsCode);
				dbms.setStaff_project_no(project_no);
				re+=mapper.insertDbms(dbms);
			}
			
			int[] devetcArr = project.getProject_devetc();
			for(int devetcCode: devetcArr){
				ProjectDevetc devetc = new ProjectDevetc();
				devetc.setProject_devetc(devetcCode);
				devetc.setStaff_project_no(project_no);
				re+= mapper.insertDevetc(devetc);
			}
			
			int[] frameworkArr = project.getProject_framework();
			for(int frameworkCode: frameworkArr){
				ProjectFramework framework = new ProjectFramework();
				framework.setProject_framework(frameworkCode);
				framework.setStaff_project_no(project_no);
				re+= mapper.insertFramework(framework);
			}
			
			int[] languageArr = project.getProject_language();
			for(int languageCode: languageArr){
				ProjectLanguage language = new ProjectLanguage();
				language.setProject_language(languageCode);
				language.setStaff_project_no(project_no);
				re+= mapper.insertLanguage(language);
			}
			
			int osCode = project.getProject_os();
			ProjectOs os = new ProjectOs();
			os.setProject_os(osCode);
			os.setStaff_project_no(project_no);
			re+=mapper.insertOs(os);
				
			int serverCode= project.getProject_server();
			ProjectServer server = new ProjectServer();
			server.setProject_server(serverCode);
			server.setStaff_project_no(project_no);
			re+=mapper.insertServer(server);
		}

		return re;
	}

	@Override
	public List<ResultDAO> search(Criteria cri) {
		
		List<ResultDAO> list=mapper.search(cri);
		
		return list;
	}

	@Override
	public int getTotal(Criteria cri) {
		return mapper.getTotal(cri);
	}

	
	
}
