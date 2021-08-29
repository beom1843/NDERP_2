package org.nderp2.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Criteria {
	
	public Criteria(){}
	
	private int pageNum;
	private int amount;
	private String filterCol;
	private String method;
	
	public Criteria(int pageNum, int amount){
		this.pageNum = pageNum;
		this.amount = amount;
	}
	
	private String type;
	
	public String[] getTypeArr(){
		System.out.println(dev1);
		System.out.println(dev2);
		return type == null? new String[] {}: type.split("");
	}
	
	private String skillRadio;
	
	private String skill;
	public String[] getSkillArr(){
		System.out.println("getSTYPEARR");
		return skill ==null? new String[] {}: skill.split("");
	}
	
	private String dev1;
	private String dev2;
	
	private String keyword1;
	private String keyword2;
	
	private int project_language;
	private int project_framework;
	private int project_dbms;
	private int project_devetc;
	
	
	private String edu;
	private String certi;
	private String role;
	
	
	public String[] getEduArr(){
		return edu == null? new String[] {}: edu.split("");
	}
	public String[] getCertiArr(){
		return certi == null? new String[] {}: certi.split("");
	}
	
	public String[] getRoleArr(){
		return role == null? new String[] {}: role.split("");
	}
	
	private String projectStartDay1;
	private String projectStartDay2;
	private String projectEndDay1;
	private String projectEndDay2;
	
	private String college;
	
	public String[] getCollegeArr(){
		return college ==null? new String [] {}: college.split("");
	}
	
	private String graduateDay1;
	private String graduateDay2;
	
	private String sex;
	
	public String[] getSexArr(){
		return sex == null? new String [] {}: sex.split("");
	}
	
	private String birthDay1;
	private String birthDay2;
	private String age1;
	private String age2;
	
	private String career;
	
	public String[] getCareerArr(){
		return career == null? new String[] {}:career.split("");
	}
	
	private String career1;
	private String career2;
	private String foreignread;
	public String[] getForeignreadArr(){
		return foreignread == null? new String[] {}:foreignread.split("");
	}
	private String foreignspeak;
	public String[] getForeignspeakArr(){
		return foreignspeak == null? new String[] {}:foreignspeak.split("");
	}
	private String soju1;
	private String soju2;
	private String beer1;
	private String beer2;
	
	private String military;
	
	public String[] getMilitaryArr(){
		return military == null? new String[] {}:military.split("");
	}
	
	
}
