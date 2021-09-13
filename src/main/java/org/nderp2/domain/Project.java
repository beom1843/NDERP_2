package org.nderp2.domain;

import java.util.List;

import lombok.Data;

@Data
public class Project {

	private int staff_no;
	private int staff_project_no;
	private String project_name;
	private String project_startday;
	private String project_endday;
	private String project_customer;
	private String project_company;
//	private int[] project_role;
//	private int project_server;
//	private int project_os;
//	private int[] project_language;
//	private int[] project_framework;
//	private int[] project_dbms;
//	private int[] project_devetc;
	private List<ProjectRole> project_role;
	private ProjectServer project_server;
	private ProjectOs project_os;
	private List<ProjectLanguage> project_language;
	private List<ProjectFramework> project_framework;
	private List<ProjectDbms> project_dbms;
	private List<ProjectDevetc> project_devetc;
	
}
