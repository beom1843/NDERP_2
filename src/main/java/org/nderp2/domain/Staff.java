package org.nderp2.domain;

import lombok.Data;

@Data
public class Staff {
	private int staff_no;
	private int staff_id;
	private String id;
	private String pw;
	private String name;
	private String id_no;
	private String hp;
	private String email;
	private String religion_code;
	private String military_code;
	private Hotline hotline;
	private Bank bank;
	private School[] schoolArr;
	private Family[] familyArr;
	private Career[] careerArr;
	private int[] certification_code;
	private Foreignlang[] foreignlangArr;
	private Institution institution;
	private Taste taste;
	private String[] hobby;
	private Project[] projectArr;
}
