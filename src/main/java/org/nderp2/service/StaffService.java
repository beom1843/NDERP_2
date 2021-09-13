package org.nderp2.service;

import java.util.List;

import org.nderp2.domain.Criteria;
import org.nderp2.domain.ResultDAO;
import org.nderp2.domain.Staff;

public interface StaffService {
	public int create(Staff staff);
	public List<ResultDAO> search(Criteria cri);
	public int getTotal(Criteria cri);
	public Staff readStaff(int staff_no);
}
