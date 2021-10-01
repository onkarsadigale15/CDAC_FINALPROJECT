package com.app.dto;

import javax.persistence.Column;
import javax.persistence.Lob;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdminProduct {

    private String category ;

	@Column(length = 20 ,nullable = false)
	private String name ;
	
	@Column(length = 64 ,nullable = false)
	private String description ;
	
//	image 
	@Lob
	@JsonProperty("image")
	@Column(length = 1000)
	private byte[] image ;
	
	@Column(nullable = false)
	private int price ; 
	
	@Column
	private float discount;
	
	@Column(nullable = false)
	private boolean isActive = true;
}
