package org.nderp2.domain;

import lombok.Data;

@Data
public class Taste {
	private int smoking_code;
	private int beer_code;
	private int soju_code;
	private int[] interest_code;
}
