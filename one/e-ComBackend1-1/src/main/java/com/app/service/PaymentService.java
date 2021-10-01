package com.app.service;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PaymentRepository;
import com.app.dto.PlaceOrder;
import com.app.pojo.Order;
import com.app.pojo.PMode;
import com.app.pojo.Payment;
import com.app.pojo.PaymentMode;
import com.app.pojo.Status;
@Service
@Transactional
public class PaymentService implements IPaymentService {
	
	@Autowired
	ICartService cartService ;
	
	@Autowired
	IOrderService orderService ;
	
	@Autowired
	PaymentRepository paymentRepo ;
	
	@Override
	public Integer getTotalPayment(int customerId) {
		System.out.println("in a get total payment service ");
		return cartService.getTotalPrice(customerId);
	}


	@Override
	public String placeOrder(PlaceOrder placeOrder) {
		Order currentOrder = orderService.placeCurrentCartOrder(placeOrder) ;
		Payment currentpayment = new Payment(currentOrder,new PaymentMode(PMode.COD), currentOrder.getPrice(), Status.IN_DELIVERY, LocalDate.now()) ;
		paymentRepo.save(currentpayment) ;
		return "Placed order successfully...";
	}
	
	public PMode getPaymentModeByOrderId(int orderId) {
		Payment payment = paymentRepo.findByOrderId(orderId);
		return payment.getMode().getMode();
	}
}
