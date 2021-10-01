package com.app.pojo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tblCategory")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Category extends BaseEntity{
	
	@Column(length = 20 ,unique = true , nullable = false)
	private String name ;
	
	@Column(length = 250 , nullable = false)
	private String description;

	@Column(nullable = false)
	private boolean isActive ;
	
//	one to many 
	@OneToMany(mappedBy = "category",
			fetch = FetchType.EAGER ,
			  cascade = CascadeType.ALL ,
			 orphanRemoval = true)
	private List<Product> products = new ArrayList<Product>() ;
	
}
