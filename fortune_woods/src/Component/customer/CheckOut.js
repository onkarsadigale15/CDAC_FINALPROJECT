import react,{Component} from "react";
import ApiService from "../../service/ApiService";

class CheckOut extends Component{

    constructor(props) {
        super(props)
        this.state = {
            payment: '',
            total:0,
            address:''
        }
       
    }


    componentDidMount() {
                    
		let loginData = localStorage.getItem('loginDetails') ? localStorage.getItem('loginDetails') : null;
		
		if(loginData) {
			loginData = JSON.parse(loginData);

				if(loginData.id){
                    this.setState({address:loginData.address});
                    ApiService.fetchTotal(loginData.id)
                        .then((resp) => {
                        this.setState({total:resp.data});
                        console.log("totallll "+this.state.total);
            });
         
        }
    }
    }
    onValueChange = (event) =>
            this.setState({
              payment:event.target.value
        }
        );


    sendData = (e) =>
    {//API CALL
        e.preventDefault();
        
	    let loginData = localStorage.getItem('loginDetails') ? localStorage.getItem('loginDetails') : null;
	        if(loginData)
            {
                loginData = JSON.parse(loginData)
                let PlaceOrder = {customerId:loginData.id,payMode: this.state.payment};
                console.log("Data checkupp placeOrder "+PlaceOrder.customerId);
                console.log("Data checkupp placeOrder "+PlaceOrder.payMode);
                

                ApiService.sendOrder(PlaceOrder)
                .then(resp => {
                    alert(resp.data);
                    this.props.history.push('/');
                }).catch( err=>{
                  //  console.error(err);
                    console.error("in err ",err.data);
                    //err.response.data => DTO on the server side : ErrorResponse
                    alert(err.data);             
                })   



            }
        
    
    }

    render(){
        return(
            <div>
                <div class="card col-6 m-5">
                    <div class="card-header text-start">
                            Delivery
                    </div>
                <div class="card-body text-start">
                <p>Address : {this.state.address}</p>
                <cite title="Source Title">Delivery in 2 Days</cite>
                 </div>
            </div>
            <form>
            <div className="col-6">
            <div class="form-check">
            <label>Payment Mode:</label><br/>
            <input class="form-check-input" type="radio" name="payment" id="i1" value="COD" checked={this.state.payment==='COD'} onChange={this.onValueChange}/>
            <label class="form-check-label" for="i1">
               COD
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="payment" id="i2" value="online" checked={this.state.payment==='online'} onChange={this.onValueChange}/>
            <label class="form-check-label" for="i2">
              Online
            </label>
            
            </div>
            <button className="btn btn-success" onClick={this.sendData}>Place Order</button>
            
            </div>
            
            </form>
            </div>
        );
    }
}

export default CheckOut;