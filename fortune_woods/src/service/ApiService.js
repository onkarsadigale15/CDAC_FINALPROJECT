import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {
       
    fetchProducts() {
        return axios.get(USER_API_BASE_URL+ '/products');
    }

    fetchProductById(productId) {
        return axios.get(USER_API_BASE_URL + '/' + productId);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    loginVendor(details){
        return axios.post(USER_API_BASE_URL + '/admin',details);
    }

    loginCustomer(details){
        return axios.post(USER_API_BASE_URL + '/user/customer',details);
    }

    

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(customer) {
        return axios.post(USER_API_BASE_URL+ '/user/user-add',customer);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

    fetchProductsCart(customerId){
        return axios.get(USER_API_BASE_URL+'/cart'+'/items/'+customerId);
    }


    fetchProductTable(){
        return axios.get(USER_API_BASE_URL +'/products/category/table');


    }
    
    fetchProductSofa(){
        return axios.get(USER_API_BASE_URL +'/products/category/sofa');


    }
    
    fetchProductChair(){
        return axios.get(USER_API_BASE_URL+'/products/category/chair');
    }

    addtoCardAPI(cartData){
        return axios.post(USER_API_BASE_URL +'/cart/add-product',cartData);
    }

    sendOrder(PlaceOrder){
        return axios.post(USER_API_BASE_URL + '/payment/place',PlaceOrder);

    }

    fetchTotal(customerID){
        return axios.get(USER_API_BASE_URL+'/payment/total/'+customerID);
    }

    getProductDetails(proId){
        return axios.get(USER_API_BASE_URL+'/products/details/'+proId);
    }

    fetchOrder(customerId){
        return axios.get(USER_API_BASE_URL+'/order/my-order/'+customerId);
    }


}

export default new ApiService();