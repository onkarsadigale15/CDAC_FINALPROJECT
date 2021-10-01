import React, { Component } from 'react'
import ApiService from '../../service/admin/ApiService';

class EditUser extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            password: '',
            mobile: '',
            address: '', 
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data;
                console.log(user);
                this.setState({
                id: user.id,
                firstName: user.firstName,
                middleName: user.middleName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                mobile: user.mobile,
                address: user.address
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, firstName: this.state.firstName, middleName: this.state.middleName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, mobile:this.state.mobile, address:this.state.address};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User details updated successfully.'});
                this.props.history.push('/admin/dashboard');
                alert(this.state.message);
            }).catch( err=>{
                //  console.error(err);
                  console.error("in err ",err.data);
                  alert(err.data.message);             
                  this.props.history.push('/admin/products');
              });
    }

    render() {
        return (
            <div className="col-6">
                <h2 className="text-center">Register User</h2>
                <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Middle Name:</label>
                    <input placeholder="First Name" name="middleName" className="form-control" value={this.state.middleName} onChange={this.onChange}/>
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


            
                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
        );
    }
}

export default EditUser;