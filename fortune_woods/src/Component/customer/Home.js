import React,{useState} from 'react';
import "./home.css";
import { Component } from 'react';
import ApiService from '../../service/ApiService';
import im2 from "../../images/two.jpg";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import im3 from "../../images/three.png";

class Home extends Component {

	constructor(props){
        super(props);
        this.state ={
            products:[],
			message:''
        }

		
    }
    componentDidMount() {
	
		
		ApiService.fetchProducts()
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
	
	//localStorage.setItem('role','customer');

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
	<>
   <div className="container-fluid">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/one.png" className="d-block w-100" alt="..."/>
  </div>
  <div className="carousel-item">
      <img src={im2} className="d-block w-100" alt="..."/>
  </div>
    <div className="carousel-item">
      <img src={im3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    <h3 className="mt-4">New Arrivals</h3>
	<div className="d-flex flex-row bd-highlight mb-3">
	{list1}
	</div>
	
	</div>
	
</>
  );
}
}
export default Home;
