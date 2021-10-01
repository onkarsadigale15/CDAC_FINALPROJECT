import React, { Component } from 'react';
import ApiService from '../../service/ApiService';
import logimg from "../../images/logimg.png";

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            role:' ',
            message: null
        }
      
  this.sendUser = this.sendUser.bind(this);
    }

    sendUser = (e) => {
        e.preventDefault();
        let details = {email: this.state.email,password: this.state.password};
        
        if(this.state.role ==='admin')
        {
        console.log("Inside admin");    
        ApiService.loginVendor(details)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'Login successfully.'});
                localStorage.removeItem('role');
                localStorage.removeItem('loginDetails');
                localStorage.clear();
                

                localStorage.setItem('role',this.state.role);
                localStorage.setItem('loginDetails', JSON.stringify(resp.data));
                let dataa=localStorage.getItem('role'); 
                console.log("role "+this.state.role);

                alert(this.state.message);


                this.props.history.push('/');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/login');
            })
        }else{
            console.log("here");
            ApiService.loginCustomer(details)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'User Login successfully.'});
                localStorage.removeItem('role');
                localStorage.removeItem('loginDetails');
                localStorage.clear();
                

                localStorage.setItem('role',this.state.role);
                localStorage.setItem('loginDetails', JSON.stringify(resp.data));
                let dataa=localStorage.getItem('role'); 
                console.log("dataa role"+dataa);
                this.setState({message : 'Login successfully !!!'});
                alert(this.state.message);



                this.props.history.push('/');



            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/login');
            })


        }
        
        

    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    onValueChange = (event) =>
            this.setState({
              role:event.target.value
            });
          

    render() {
        return(
            <div className="row">
            <div className="col-5 pt-3">
                <h2 className="text-center">Login</h2>
                <form>                
                <div className="form-group">
                    <label>Email id:</label>
                    <input type="email" placeholder="email id" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>
    
                
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div class="form-check">
            <label>Role:</label><br/>
            <input class="form-check-input" type="radio" name="role" id="i1" value="admin"  checked={this.state.role==='admin'} onChange={this.onValueChange} />
            <label class="form-check-label" for="i1">
               Admin
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="role" id="i2" value="customer"  checked={this.state.role==='customer'} onChange={this.onValueChange} />
            <label class="form-check-label" for="i2">
             Customer
            </label>
            </div>            
                <button className="btn btn-success" onClick={this.sendUser}>Login</button>
            
            </form>
    </div>
    <div className="col-6">
    <img className="card-img-top" src={logimg} alt="Login image" />       

    </div>
    </div>
        );
    }
}

export default Login;