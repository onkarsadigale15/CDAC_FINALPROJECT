package com.app.pojo;

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
@Table(name = "tblShipment")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter


public class Shipment extends BaseEntity {

//	one shipment having one order id 
	@OneToOne(fetch = FetchType.EAGER )
	@JoinColumn(name = "order_id")
//	@JsonIgnore
	private Order order ;
	
	@Column(length = 20 ,nullable = false)
	private String shipingAddress ;
	
	@Column
	@Enumerated(EnumType.STRING)
	private PMode mode ;
	
	@Column(nullable = false)
	private int price;
	

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Status status ;
	
	
	
	
}
