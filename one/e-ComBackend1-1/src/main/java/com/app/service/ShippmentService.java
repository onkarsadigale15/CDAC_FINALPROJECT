package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ShipmentRepository;
import com.app.dto.MyOrder;
import com.app.pojo.Order;
import com.app.pojo.Product;
import com.app.pojo.Shipment;

@Service
@Transactional
public class ShippmentService implements IShippmentService {

	@Autowired
	ShipmentRepository shipmentRepo ;
	
	@Autowired
	OrderService orderService ;
	
	@Autowired
	CartService cartService ;
	
	@Autowired
	UserSerivce userService ;
	
	@Autowired
	PaymentService paymentService ;
	
	@Override
	public MyOrder getShippmentDetails(int customerId) {
		Order order = orderService.getOrderDetailsByCustmerId(customerId) ;
		List<Product> products = cartService.getAllItemsByCart(customerId);
		MyOrder myOrder = new MyOrder(products, order.getStatus(), paymentService.getPaymentModeByOrderId(order.getId()));
		return myOrder;
	}

	@Override
	public Shipment placeShipment(Shipment shipment) {
		System.out.println("in shipment repo ");
		return shipmentRepo.save(shipment);
	}

}
