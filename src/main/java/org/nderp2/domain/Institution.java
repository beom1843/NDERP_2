package org.nderp2.domain;

import lombok.Data;

@Data
public class Institution {
	private int staff_no;
	private int institution_no;
	private String institution_name;
	private int institution_period;
	private String institution_grad;
	private int[] inst_stack_code;
	
}
