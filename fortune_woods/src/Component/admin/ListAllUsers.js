import React, { Component } from 'react'
import ApiService from '../../service/admin/ApiService';

class ListAllUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
        
    }

    reloadUserList() {
        ApiService.fetchAllUsers()
            .then((resp) => {
                this.setState({users: resp.data})
                console.log(this.state.users);
            }).catch( err=>{
                //  console.error(err);
                  console.error("in err ",err.response.data);
                  //err.response.data => DTO on the server side : ErrorResponse
                  alert(err.response.data.message);             
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
               alert(this.state.message);
           }).catch( err=>{
            //  console.error(err);
              console.error("in err ",err.response.data);
              //err.response.data => DTO on the server side : ErrorResponse
              alert(err.data.message);             
        });

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/admin/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/admin/user-add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addUser()}> Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>MiddleName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.middleName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editUser(user.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListAllUser;