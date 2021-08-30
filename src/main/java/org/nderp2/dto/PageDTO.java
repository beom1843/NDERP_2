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
		
		this.endPage = (int) (Math.ceil(((double)cri.getPageNum())/cri.getAmount()))*cri.getAmount();
		this.startPage = this.endPage - (cri.getAmount()-1);

		this.value = ((double) cri.getPageNum())/cri.getAmount();
		
		this.realEnd = (int) (Math.ceil((double)(total *1.0)/cri.getAmount()));
		
		if(realEnd< this.endPage){
			this.endPage = realEnd;
		}
		
		this.prev = this.startPage >1;
		this.next = this.endPage<realEnd;
	}
}
