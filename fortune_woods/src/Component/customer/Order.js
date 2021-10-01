import React,{Component} from 'react';
import ApiService from '../../service/ApiService';
import { Link } from 'react-router-dom';
import orderimg from "../../images/orderimg.png";
class Order extends Component{

  constructor(props){
    super(props);
    this.state={
      items:{},
      message:'',
      image:'',
      listItem:[]      
    }
  }

  componentDidMount(){
    let userDetails=localStorage.getItem('loginDetails') ? localStorage.getItem('loginDetails') : null;
    if(userDetails){
    userDetails = JSON.parse(userDetails);
    console.log("login user id "+userDetails.id);
    ApiService.fetchOrder(userDetails.id)
    .then((response)=>{
          this.setState({items:response.data});
          this.setState({listItem:this.state.items.list});
          console.log("Order Status"+this.state.items.status);
          console.log("ListItem "+this.state.listItem[0].id);
    });
   }
   else{
    this.setState=({message:"Please login to view Order"});
    alert(this.state.message);
   }
  }
  
  render(){
    
        const list1 = this.state.listItem.map(ele =>
        <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ele.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <p className="card-text">{ele.description}</p>
              <p className="card-text"><small className="text-muted" />{ele.price}</p>
            </div>
          </div>
        </div>
      </div>
    
    );
          
     return(
         <div>
          <div>
          <img className="rounded mx-auto d-block" style={{width:"50%"}}src={orderimg} alt="Order image" />

          </div>
           

         <div>
            { list1 }
            <h4>Shipping Status: {this.state.items.status}</h4>
          </div>
          </div>
         
     );
  }
}



export default Order;