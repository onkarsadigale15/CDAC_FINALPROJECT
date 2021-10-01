package com.app.pojo;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "tblPayment")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter


public class Payment extends BaseEntity {

	
//	one order having one payment details 
	@OneToOne(fetch = FetchType.LAZY ,
			cascade = CascadeType.ALL)
	@JoinColumn(name = "order_id")
	private Order order ;
	
	@OneToOne(cascade = CascadeType.ALL,
			fetch = FetchType.LAZY )
	@JoinColumn(name = "pm_id")
	private PaymentMode mode ;
	
	
	
	@Column(nullable = false)
	private int Amount;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
		private Status status ;
		

	@Column
	private LocalDate date;
		
		
	
		
	
	
}
