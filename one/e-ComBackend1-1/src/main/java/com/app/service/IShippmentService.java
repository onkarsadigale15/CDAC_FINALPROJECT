package com.app.service;

import com.app.dto.MyOrder;
import com.app.pojo.Shipment;

public interface IShippmentService {
		MyOrder getShippmentDetails(int customerId);
		
		Shipment placeShipment(Shipment shipment) ;
}
