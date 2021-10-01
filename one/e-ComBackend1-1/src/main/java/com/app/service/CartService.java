package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.CartToProductRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.excepe.CartException;
import com.app.pojo.Cart;
import com.app.pojo.CartToProduct;
import com.app.pojo.Customer;
import com.app.pojo.Product;

@Service
@Transactional
public class CartService implements ICartService {
	
	
	
	@Autowired
	CartRepository cartRepo ;
	
	@Autowired
	UserRepository userRepo ;
	
	@Autowired
	IUserService userService ;
	
	@Autowired
	IProductService productService ;
	
	@Autowired
	CartToProductRepository cartProductRepo ;
	
	@Autowired
	ProductRepository productRepo ;
	
	public CartService() {
		System.out.println("In a cart service ");
	}

	@Override
	public String addProductToCart(int customerId, int productId) {
		Customer currentCust = userService.getCustomerById(customerId) ;
		Cart currentCart = currentCust.getCart() ;
		Product currentProduct = productService.getProductById(productId) ;
		//System.out.println("in a add to product "+currentCart.getId());
		//System.out.println("in 2 "+currentProduct.getId());
		CartToProduct cp = new CartToProduct(currentCart.getId(), currentProduct.getId(), true);
		//System.out.println("in card "+cp);
		cartProductRepo.save(cp) ;
		//System.out.println("after cart 1");
		currentCart.setQuantity(currentCart.getQuantity()+1);
		//System.out.println("after cart 1");
		return " Added To Cart ";
	}

	@Override
	public List<Product> getAllItemsByCart(int customerId) {
		Customer currentCustomer = userService.getCustomerById(customerId) ;
		System.out.println("in a cart "+currentCustomer.getId());
		int quantity = currentCustomer.getCart().getQuantity() ;
		if(quantity == 0)
			 throw new CartException("Cart Is Empty ");
		List<CartToProduct> list = cartProductRepo.findAllByCartId(currentCustomer.getCart().getId()) ;
		List<Product> cartProducts = new ArrayList<Product>();
		for(int i=0;i<quantity;i++) {
				if(list.get(i).isInCart()) {
						Product p  = productService.getProductById(list.get(i).getProductId());
						cartProducts.add(p) ;
				}
		}
		System.out.println("in a get all cart product method ");
		return cartProducts;
	}

	@Override
	public Integer getTotalPrice(int custmerId) {
		List<Product>  product = getAllItemsByCart(custmerId) ;
		int total = 0 ;
		for(Product p : product) {
			total += p.getPrice() ;
		}
		return total;
	}
	
	

}
