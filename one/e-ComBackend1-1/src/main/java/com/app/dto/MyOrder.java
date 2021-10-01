package com.app.dto;

import java.util.List;

import com.app.pojo.PMode;
import com.app.pojo.Product;
import com.app.pojo.Status;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class MyOrder {
	
	private List<Product> list ;
	private Status status ;
	private PMode pStatus ;

}
