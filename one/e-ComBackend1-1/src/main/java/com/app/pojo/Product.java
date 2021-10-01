package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tblProduct")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Product extends BaseEntity {

//	category id many to one 
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "cat_id")
	@JsonIgnore
	private Category category ;
	
//	vendor id 
	@ManyToOne(fetch = FetchType.EAGER )
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user ;
	

	
	@Column(length = 20 ,nullable = false)
	private String name ;
	
	@Column(length = 64 ,nullable = false)
	private String description ;
	
//	image 
	@Column(length = 100)
	private String image ;
	
	@Column(nullable = false)
	private int price ; 
	
	@Column
	private float discount;
	
	@Column(nullable = false)
	private boolean isActive = true;
}
