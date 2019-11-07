package com.sba.payment.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectKey;

import com.sba.payment.model.Payment;


@Mapper
public interface PaymentMapper {
	
	
	@Insert("insert into sba_payment.payment(courseId,userName,mentorName) values(#{courseId},#{userName},#{mentorName})")
	@SelectKey(statement = "select LAST_INSERT_ID()", keyProperty = "id", before = false, resultType = int.class)
	void addPayment(Payment payment);

}
