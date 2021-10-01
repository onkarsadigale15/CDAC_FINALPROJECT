package com.app.pojo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tblOrder")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Order extends BaseEntity{
//	cart --- customer
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cust_id")
	private Customer customer ;
	
	
//	cart --- order 
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cart_id")
	private Cart cart ;
	
//	one to one with payment 
	
	@Column(nullable = false)
	private int quantity ;
	
	@Enumerated(EnumType.STRING)
	@Column
	private Status status ;
	
	
	@Column(nullable = false)
	private int price;
	
	@Column
	private LocalDate date;
	

}
