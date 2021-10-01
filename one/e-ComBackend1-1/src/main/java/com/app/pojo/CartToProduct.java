package com.app.pojo;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "tblCartProduct")
public class CartToProduct extends BaseEntity{
	private Integer cartId ;
	private Integer productId ;
	private boolean isInCart = true; 
}
