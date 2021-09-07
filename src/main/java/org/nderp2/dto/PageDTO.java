package org.nderp2.dto;

import org.nderp2.domain.Criteria;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class PageDTO {
	private int startPage;
	private int endPage;
	private boolean prev, next;
	
	private int total;
	private Criteria cri;

	private double value;
	
	private int realEnd;
	
	public PageDTO(Criteria cri, int total){
		this.cri = cri;
		this.total = total;
		
		int amount = cri.getAmount();
		
		this.endPage = (int) (Math.ceil(((double)cri.getPageNum())/5))*5;
		this.startPage = this.endPage - 4;
		
		this.value = ((double) cri.getPageNum())/amount;
		
		this.realEnd = (int) (Math.ceil((double)(total *1.0)/amount));
		
		if(realEnd< this.endPage){
			this.endPage = realEnd;
		}
		
		this.prev = this.startPage >1;
		this.next = this.endPage<realEnd;
	}
}
