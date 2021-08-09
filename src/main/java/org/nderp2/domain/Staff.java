package org.nderp2.domain;

import lombok.Data;

@Data
public class Staff {
	private int staff_no;
	private String id;
	private String pw;
	private String name;
	private String id_no;
	private String hp;
	private String email;
	private String religion;
	private String military;
	private String address;
	private String zipcode;
	private Hotline hotline;
	private Bank bank;
	private School[] schoolArr;
	private Family[] familyArr;
	private Career[] careerArr;
	private int[] certificationArr;
	private Foreignlang[] foreignlangArr;
	private Institution institution;
	private Taste taste;
	private String[] hobbyArr;
	private Project[] projectArr;
}
