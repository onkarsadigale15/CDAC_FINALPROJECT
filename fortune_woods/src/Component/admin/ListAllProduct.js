import React, { Component } from 'react'
import ApiService from '../../service/admin/ApiService';


class ListAllProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            message: null
        }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.reloadProductList = this.reloadProductList.bind(this);
    }

    componentDidMount() {
        this.reloadProductList();
    }

    reloadProductList() {
        ApiService.fetchAllProducts()
            .then((resp) => {
                this.setState({products: resp.data})
                console.log(this.state.products);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })
    }

    deleteProduct(productId) {
        ApiService.deleteProduct(productId)
           .then(res => {
               this.setState({message : 'product deleted successfully.'});
               this.setState({products: this.state.products.filter(product => product.id !== productId)});
               console.log(this.state.products);
               alert(this.state.message);
           }).catch( err=>{
            //  console.error(err);
              console.error("in err ",err.response.data);
              //err.response.data => DTO on the server side : ErrorResponse
              alert(err.data.message);             
              this.props.history.push('/admin/products');
          })

    }

    editProduct(id) {
        window.localStorage.setItem("productId", id);
        this.props.history.push('/admin/edit-product');
    }

    addProduct() {
        window.localStorage.removeItem("productId");
        this.props.history.push('/admin/product-add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Product Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addProduct()}> Add Product</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                        product =>
                                    <tr key={product.id}>
                                        {/* <td>{product.image}</td> */}
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>{product.discount}</td>
                                        
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteProduct(product.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editProduct(product.id)} style={{marginLeft: '20px'}}> Edit</button>
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

export default ListAllProduct;