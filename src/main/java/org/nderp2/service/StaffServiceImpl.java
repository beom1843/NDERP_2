package org.nderp2.service;

import java.util.ArrayList;
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
import org.nderp2.mapper.StaffMapper;
import org.springframework.stereotype.Service;

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
		
		List<Certification> certiArr = staff.getCertificationArr();
		for(Certification certi: certiArr){
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
		List<InstitutionStack> instStackArr = institution.getInst_stack_code();
		for(InstitutionStack instStack: instStackArr){
			InstitutionStack stack = new InstitutionStack();
			stack.setInstitution_stack_code(instStack.getInstitution_stack_code());
			stack.setInstitution_no(institution_no);
			re+=mapper.insertInstStack(stack);
		}
		
		Taste taste = staff.getTaste();
		taste.setStaff_no(staff_no);
		re+= mapper.insertTaste(taste);
		
		List<TasteInterest> interestArr = taste.getInterest();
		int taste_no = mapper.getCurrentTasteNo();
		for(TasteInterest interest_code : interestArr){
			TasteInterest interest = new TasteInterest();
			interest.setTaste_interest_code(interest_code.getTaste_interest_code());
			interest.setTaste_no(taste_no);
			re+= mapper.insertTasteInterest(interest);
			log.info(interest);
		}
		
		
		List<Hobby> hobbyArr = staff.getHobbyArr();
		
		for(Hobby hobby_desc : hobbyArr){
			Hobby hobby = new Hobby();
			hobby.setHobby(hobby_desc.getHobby());
			hobby.setStaff_no(staff_no);
			re+= mapper.insertHobby(hobby);
		}
		
		
		List<Project> projectArr = staff.getProjectArr();
		
		for(Project project: projectArr){
			project.setStaff_no(staff_no);
			mapper.insertProject(project);
			
			int project_no=mapper.getCurrentProjectNo();	
			
			List<ProjectRole> roleArr = project.getProject_role();
			for(ProjectRole roleCode : roleArr){
				System.out.println("ServiceImpl!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
				System.out.println("roleCode"+roleCode);
				roleCode.setStaff_project_no(project_no);
				re+=mapper.insertRole(roleCode);
			}
			
			
			List<ProjectDbms> dbmsArr = project.getProject_dbms();
			for(ProjectDbms dbmsCode: dbmsArr){
				dbmsCode.setStaff_project_no(project_no);
				re+=mapper.insertDbms(dbmsCode);
			}
			
			List<ProjectDevetc> devetcArr = project.getProject_devetc();
			for(ProjectDevetc devetcCode: devetcArr){
				devetcCode.setStaff_project_no(project_no);
				re+= mapper.insertDevetc(devetcCode);
			}
			
			List<ProjectFramework> frameworkArr = project.getProject_framework();
			for(ProjectFramework frameworkCode: frameworkArr){
				frameworkCode.setStaff_project_no(project_no);
				re+= mapper.insertFramework(frameworkCode);
			}
			
			List<ProjectLanguage> languageArr = project.getProject_language();
			for(ProjectLanguage languageCode: languageArr){
				ProjectLanguage language = new ProjectLanguage();
				language.setProject_language(languageCode.getProject_language());
				language.setStaff_project_no(project_no);
				re+= mapper.insertLanguage(language);
			}
			
			ProjectOs os = project.getProject_os();
			os.setStaff_project_no(project_no);
			re+=mapper.insertOs(os);
				
			ProjectServer server= project.getProject_server();
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

	@Override
	public Staff readStaff(int staff_no) {
		Staff staff = mapper.readStaff(staff_no);
		staff.setBank(mapper.readBank(staff_no));
		staff.setCareerArr(mapper.readCareer(staff_no));
		staff.setCertificationArr(mapper.readCertification(staff_no));
		staff.setFamilyArr(mapper.readFamily(staff_no));
		staff.setForeignlangArr(mapper.readForeignlang(staff_no));
		staff.setHobbyArr(mapper.readHobby(staff_no));
		staff.setHotline(mapper.readHotline(staff_no));
		staff.setInstitution(mapper.readInstitution(staff_no));
		
		List<Project> projects=mapper.readProject(staff_no);
		List<Project> staff_project = new ArrayList<Project>();
		
		for(Project project:projects){
			int project_no =project.getStaff_project_no();
			project.setProject_role(mapper.readProjRole(project_no));
			project.setProject_dbms(mapper.readProjDbms(project_no));
			project.setProject_devetc(mapper.readProjDevetc(project_no));
			project.setProject_framework(mapper.readProjFramework(project_no));
			project.setProject_language(mapper.readProjLanguage(project_no));
			project.setProject_os(mapper.readProjOs(project_no));
			project.setProject_server(mapper.readProjServer(project_no));
			staff_project.add(project);
		}
		staff.setProjectArr(staff_project);
		
		staff.setSchoolArr(mapper.readSchool(staff_no));
		Institution institution = mapper.readInstitution(staff_no);
		institution.setInst_stack_code(mapper.readInstStack(institution.getStaff_institution_no()));

		staff.setInstitution(institution);
		Taste taste = mapper.readTaste(staff_no);
		taste.setInterest(mapper.readTasteInterest(taste.getStaff_taste_no()));
		staff.setTaste(taste);
		
		return staff;
	}

	
	
}
