import React, { Component } from 'react';
import ApiService from '../../service/ApiService';
import regimg from "./../../images/regimg.png";

class Register extends Component {
    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            Password: '',
            mobile: '',
            address: '', 
            message: null
        }
      
  this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let customer = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email,password: this.state.password, mobile:this.state.mobile,address:this.state.address,middleName:this.state.middleName};
      
        ApiService.addUser(customer)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                this.setState({message : 'User Registered successfully.'});
                alert(this.state.message);
                this.props.history.push('/');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/users');
            })
            
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="row">
            <div className="col-5">
                <h2 className="text-center">Register User</h2>
                <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Middle Name:</label>
                    <input placeholder="Middle Name" name="middleName" className="form-control" value={this.state.middleName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                
                <div className="form-group">
                    <label>Email id:</label>
                    <input type="email" placeholder="email id" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>
    
                
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>


                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="mob" placeholder="Mobile" name="mobile" className="form-control" value={this.state.mobile} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                </div>

                 <br />   
            
                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
    <div className="col-6">
    <img className="card-img-top" src={regimg} alt="Card image cap" />     

    </div>
    </div>
        );
    }
}

export default Register;