package com.app.pojo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tblCust")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Customer extends BaseEntity {
	@Column(length = 20 , nullable = false)
	private String firstName ;
	
	@Column(length = 20)
	private String middleName ;
	
	@Column(length = 20 , nullable = false)
	private String lastName ;
	
	@Column(length = 20 , nullable = false , unique = true)
	private String email ;
	
	@Column(length = 12)
	private String mobile;
	
	@Column(nullable = false)
	private boolean isActive = true ;

	@Column(length = 20 , nullable = false)
	private String address ;
	
	@Column(length = 20 , nullable = false)
	private String password ;
	
//	one to one 
//	cust ---> cart 
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "cart_id")
	@JsonIgnore
	private Cart cart ;
	
//	one to many 
//	one cust having many order
	@JsonIgnore
	@OneToMany(mappedBy = "customer",
				fetch = FetchType.LAZY
				,cascade = CascadeType.ALL,
				orphanRemoval = true)
	private List<Order> orders = new ArrayList<Order>();
}
