import React,{Component} from 'react';
import ApiService from '../../service/ApiService';
import { Link } from 'react-router-dom';
import cartimg from "../../images/cartimg.png";

class Cart extends Component{

  constructor(props){
    super(props);
    this.state={
      cart:[],
      total:0,
      image:'',
      message:''      
    }
  }

  componentDidMount(){
    //localStorage.setItem('role','admin');
    let userDetails=localStorage.getItem('loginDetails') ? localStorage.getItem('loginDetails') : null;
    if(userDetails){
    userDetails = JSON.parse(userDetails);
    console.log("login user id "+userDetails.id);
    ApiService.fetchProductsCart(userDetails.id)
    .then((response)=>{
          this.setState({cart:response.data});
          console.log("cart data here"+this.state.cart);
    });
   }
   else{
    //this.setState({message: 'Please login to view cart details'});
    //console.log(this.state.message);
    alert("Please login to continue....");
   }
  }
  
  render(){
    const list = this.state.cart.map(ele =>
      <div class="card">
        <div class="row">
          <div class="col-md-8 cart">
            <div class="title">
                <div class="row">
                   
                </div>
             </div>
            <div class="row border-top border-bottom">
                <div class="row main align-items-center">
                <div class="col-2"><img class="img-fluid" src={ele.image}/></div>
                    <div class="col">
                        <div class="row text-muted">{ele.name}</div>
                    </div>
                    <div class="col">x 1</div>
                    <div class="col">Price:{ele.price}<span class="close"></span></div>
                </div>
            </div>
             <div className="d-none">
               {this.state.total+=ele.price}
             </div>
            
        </div>
        
        </div>
    </div>
    );
     return(
         <div className="row"> 
        
         <div className="col-6">
         <h4><b>Shopping Cart</b></h4>


            {list}




         <div class="col-md-4 summary">
        
            <div>
                <h5><b>Summary</b></h5>
            </div>
            <hr/>
            <div class="row float-lg-left">
                <div class="col">TOTAL PRICE</div>
                <div class="col text-right">{this.state.total}</div>
                
            </div> <Link className="btn btn-success m-2" to="/CheckOut">CHECKOUT</Link>
          </div>
            
          </div>
          <div className="col-6">
           
           
          <img className="card-img-top" src={cartimg} alt="Cart image" />  
           
           </div>        
         
          </div>

     );
  }
}



export default Cart;