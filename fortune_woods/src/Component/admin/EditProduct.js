import React, { Component } from 'react'
import ApiService from '../../service/admin/ApiService';

class EditProduct extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            description: '',
            image: [],
            price: '',
            discount: '',
            category: '',
            message: null
        }
        this.saveProduct = this.saveProduct.bind(this);
        this.loadProduct = this.loadProduct.bind(this);
    }

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct() {
        ApiService.fetchProductById(window.localStorage.getItem("productId"))
            .then((res) => {
                let product = res.data;
                console.log(product);
                this.setState({
                id: product.id,
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                discount: product.discount,
                category: product.category
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    
    onValueChange = (event) =>
        this.setState({
          category:event.target.value
    });

    saveProduct = (e) => {
        e.preventDefault();
        let product = {id: this.state.id, name: this.state.name, description: this.state.description, image: this.state.image, price: this.state.price, discount: this.state.discount, category: this.state.category};
        ApiService.editProduct(product)
            .then(res => {
                console.log(product);
                this.setState({message : 'product details updated successfully.'});
                this.props.history.push('/admin/products');
                alert(this.state.message);
            }).catch( err=>{
                //  console.error(err);
                  console.error("in err ",err.response.data);
                  //err.response.data => DTO on the server side : ErrorResponse
                  alert(err.data.message);             
                  this.props.history.push('/admin/products');
              });
    }

    render() {
        return (
            <div className="col-6">
            <h2 className="text-center">Edit Product</h2>
            <form>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label>Description:</label>
                <input placeholder="description" name="description" className="form-control" value={this.state.description} onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label>Price:</label>
                <input placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.onChange}/>
            </div>

            
            <div className="form-group">
                <label>Discount:</label>
                <input type="number" placeholder="Discount" name="discount" className="form-control" value={this.state.discount} onChange={this.onChange}/>
            </div>

            <div class="form-check">
                   <label>Category:</label><br/>
                   <input class="form-check-input" type="radio" name="category" id="i1" value="table" checked={this.state.category==='table'} onChange={this.onValueChange}/>
                     <label class="form-check-label" for="i1">
                      Table
                     </label>
            </div>

            <div class="form-check">
                   <input class="form-check-input" type="radio" name="category" id="i2" value="chair" checked={this.state.category==='chair'} onChange={this.onValueChange}/>
                   <label class="form-check-label" for="i2">
                     Chair
                   </label>
            </div>

            <div class="form-check">
                   <input class="form-check-input" type="radio" name="category" id="i3" value="sofa" checked={this.state.category==='sofa'} onChange={this.onValueChange}/>
                   <label class="form-check-label" for="i3">
                     Sofa
                   </label>
            </div>
      
                <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
            </form>
    </div>
        );
    }
}

export default EditProduct;