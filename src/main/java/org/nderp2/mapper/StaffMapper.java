package org.nderp2.mapper;

import org.nderp2.domain.Bank;
import org.nderp2.domain.Career;
import org.nderp2.domain.Family;
import org.nderp2.domain.Foreignlang;
import org.nderp2.domain.Hotline;
import org.nderp2.domain.Institution;
import org.nderp2.domain.Project;
import org.nderp2.domain.School;
import org.nderp2.domain.Staff;
import org.nderp2.domain.Taste;

public interface StaffMapper {

	public int getCurrentNo();
	public int createStaff(Staff staff);
	public int insertHotline(Hotline hotline);
	public int insertBank(Bank bank);
	public int insertSchool(School school);
	public int insertFamily(Family family);
	public int insertCareer(Career career);
	public int insertCertification(int certification);
	public int insertForeignlang(Foreignlang foreignlang);
	public int insertInstitution(Institution institution);
	public int insertTaste(Taste taste);
	public int insertHobby(String hobby);
	public int insertProject(Project project);

	
}
