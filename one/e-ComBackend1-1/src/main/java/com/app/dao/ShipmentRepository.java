package com.app.dao;

import org.springframework.data.repository.CrudRepository;

import com.app.pojo.Shipment;

public interface ShipmentRepository extends CrudRepository<Shipment,Integer>{

}
