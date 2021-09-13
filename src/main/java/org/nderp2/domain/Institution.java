package org.nderp2.domain;

import java.util.List;

import lombok.Data;

@Data
public class Institution {
	private int staff_no;
	private int institution_no;
	private String institution_name;
	private int institution_period;
	private String institution_grad;
	private List<InstitutionStack> inst_stack_code;
	
}
