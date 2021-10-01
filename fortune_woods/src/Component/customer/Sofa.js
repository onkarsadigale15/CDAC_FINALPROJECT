import React,{useState} from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../service/ApiService';
 
class Sofa extends Component {

	constructor(props){
        super(props);
        this.state ={
            products:[]
           
        }

		
    }
    componentDidMount() {

		ApiService.fetchProductSofa()
            .then((resp) => {
                this.setState({products:resp.data});
                console.log(this.state.products);
            });
         
      
      }; 
      addtocart = (p1) => {
		console.log("clicked on Buy"+p1.id);
		console.log(localStorage.getItem('loginDetails')); 
            
		let loginData = localStorage.getItem('loginDetails') ? localStorage.getItem('loginDetails') : null;
		
		if(loginData) {
			loginData = JSON.parse(loginData);

				if(loginData.id){
				let cartData={customerId:loginData.id,productId:p1.id};
			
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

	const list1=this.state.products.map(p1 => 
		<div className="container-xl" key={p1.id}>
		<div className="card mr-3 " style={{width:"12rem" }}>
		<img className="card-img-top" src={p1.image} alt="Card image cap" />
		<div className="card-body">
		<h5 className="card-title">{p1.name}</h5>
		<p className="card-text"> Price: Rs.{p1.price}/-</p>
		<div className="row">
			<div className="col-6">
						</div>
			< hr />
			 <div className="col-5">
			 <button className="  btn btn-lg btn-primary btn btn-success " onClick={()=>this.addtocart(p1)}>Add</button>
			 </div>
			 <div className="col-5">
			 <Link className="btn btn-lg btn-primary btn btn-success" to={{pathname:"/ProductDetail",state:{proId:p1.id}}}>View</Link>
 		
			</div>   
		</div>
		
		
	</div>
	</div>
	
	
		</div>
	);
  return (
      <div>
    <h1>Sofa</h1>
    {list1}
    </div>
  );
}
}
export default Sofa;
