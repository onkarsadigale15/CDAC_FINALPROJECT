package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tblPayMode")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PaymentMode extends BaseEntity {
	
	@Column
	@Enumerated(EnumType.STRING)
	private PMode mode ;
}
