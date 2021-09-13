package org.nderp2.domain;

import java.util.List;

import lombok.Data;

@Data
public class Staff {
	private int staff_no;
	private String staff_id;
	private String staff_pw;
	private String staff_name;
	private String staff_id_no;
	private String staff_hp;
	private String staff_email;
	private String staff_religion;
	private String staff_military;
	private String staff_address;
	private String staff_zipcode;
	private Hotline hotline;
	private Bank bank;
	private List<School> schoolArr;
	private List<Family> familyArr;
	private List<Career> careerArr;
	private List<Certification> certificationArr;
	private List<Foreignlang> foreignlangArr;
	private Institution institution;
	private Taste taste;
	private List<Hobby> hobbyArr;
	private List<Project> projectArr;
}
