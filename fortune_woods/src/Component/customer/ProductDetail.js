import React from "react";
import { Component } from "react";
import ApiService from "../../service/ApiService";


class ProductDetail extends Component{
   
    state = {
        product:{ 
             'id':-1,             
            'name': "Wooden Table",
            'price': 500,
            'description': "Length=100cm Width=50cm Material=wood",
            'discount': 0.0,
            'image':null
        
        }
    }

    
    componentDidMount() {
      
      const proId=this.props.location.state.proId;
      
      ApiService.getProductDetails(proId)
      .then((response)=>{
            this.setState({product:response.data});
            console.log("data here"+this.state.cart);
      });
     }
     









    addtocart = () => {
      console.log("clicked on Buy "+this.state.product.id);
     
      console.log(localStorage.getItem('loginDetails')); 
              
      let loginData = localStorage.getItem('loginDetails') ? localStorage.getItem('loginDetails') : null;
      
      if(loginData) {
        loginData = JSON.parse(loginData);
  
          if(loginData.id){
          let cartData={customerId:loginData.id,productId:this.state.product.id};
        
          console.log("customerID "+cartData.customerId);
          console.log("productId "+cartData.productId);
          console.log("cartData "+cartData);	
  
          ApiService.addtoCardAPI(cartData)
          .then(resp => {
            console.log(resp.data);//actual response data sent by back end
            this.setState({message : 'Item Added to Cart !!!'});
            alert(this.state.message);
          }).catch( err=>{
            //  console.error(err);
            console.error("in err ",err.resp.data);
            //err.response.data => DTO on the server side : ErrorResponse
            alert(err.resp.data.message);             
          })				
  
  
        }
      } else {
        alert('please login')
      }
      //console.log("clicked on Buy"+p1.id);
      };
  
    


    render(){

        return(
        
      <section className="mb-5">
      <div className="row">
      <div className="col-md-6 mb-4 mb-md-0">
      

        <div className="row product-gallery mx-1 mt-3">

          <div className="col-12 mb-0">
            <figure className="view overlay rounded z-depth-1 main-img">
                <img src={this.state.product.image} className="img-fluid z-depth-1">
                </img>
            </figure>
          </div>
        </div>

      </div>
    <div className="col-md-6 mt-5">
      <h5>{this.state.product.name}</h5>
         <p className="mb-2 text-muted text-uppercase small text-lg-left"></p>
         <p><b>Price: </b>Rs{this.state.product.price}/-</p>
         <p><b>Description :</b>{this.state.product.description}</p>
         <p>
         <button type="button" className="btn btn-success btn-md mr-1 mb-2" onClick={()=>this.addtocart()}><i
          className="fas fa-shopping-cart pr-2"  ></i>Add to cart</button>
         </p>
      </div>
      </div>
  </section>
        
        );
    }
    }
export default ProductDetail;