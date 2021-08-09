package org.nderp2.domain;

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
	private Hotline hotline;
	private Bank bank;
	private School[] schoolArr;
	private Family[] familyArr;
	private Career[] careerArr;
	private int[] certificationArr;
	private Foreignlang[] foreignlangArr;
	private Institution institution;
	private Taste taste;
	private String[] hobby;
	private Project[] projectArr;
}
