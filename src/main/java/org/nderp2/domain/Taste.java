package org.nderp2.domain;

import java.util.List;

import lombok.Data;

@Data
public class Taste {
	private int staff_no;
	private int staff_taste_no;
	private int smoking_code;
	private int beer_code;
	private int soju_code;
	private List<TasteInterest> interest;
}
