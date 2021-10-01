import React, { Component } from 'react'
import ApiService from '../../service/admin/ApiService';
import FileUploadService from '../../service/FileUploadService';
class AddProduct extends Component{

    constructor(props){
        super(props);
            this.state ={
            id:'',
            name: '',
            description: '',
            price: '',
            discount: '',
            category: '',
            message: null,
            currentFile: undefined,
            progress: 0,
            message: "",
            imageInfos: []
        }
        this.saveProduct = this.saveProduct.bind(this);
        this.selectFile = this.selectFile.bind(this);
        this.upload = this.upload.bind(this);
    }

        
      selectFile(event) {
        this.setState({
          currentFile: event.target.files[0],
          // previewImage: URL.createObjectURL(event.target.files[0]),
          progress: 0,
          message: ""
        });
      }
    
      upload() {
        this.setState({
          progress: 0,
        });
        this.props.history.push('/admin/products');
        FileUploadService.upload(
          this.state.id, this.state.currentFile, (event) => {
            this.setState({
              progress: Math.round((100 * event.loaded) / event.total),
            });
            
          }
        )
          .then((response) => {
            this.setState({
              message: response.data.message,
            });
            
            
         
          })
          // .then((files) => {
          //   this.setState({
          //     imageInfos: files.data,
          //   });
          // })
          .catch((err) => {
            this.setState({
              progress: 0,
              message: "Could not upload the image!",
              currentFile: undefined,
            });
          });
      }
    

    saveProduct = (e) => {
        e.preventDefault();
        
        let product = {name: this.state.name, description: this.state.description, price: this.state.price, discount: this.state.discount, category: this.state.category};

        console.log(product);

        ApiService.addProduct(product)
            .then(resp => {
                console.log(resp.data.id);//actual response data sent by back end
                this.setState({message : 'product added successfully.'});
                this.setState({
                  id: resp.data.id
                });
                console.log("id"+this.state.id);
                alert(this.state.message);
                // this.props.history.push('/admin/products');
            }).catch( err=>{
              //  console.error(err);
                console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                this.props.history.push('/admin/products');
            })
            
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    onValueChange = (event) =>
        this.setState({
          category:event.target.value
        });

   

    render() {

        const {
            currentFile,
            // previewImage,
            progress,
            message,
            imageInfos,
          } = this.state;
      
        return(
            <div className="col-6">
                <h2 className="text-center">Add Product</h2>
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
                <div>
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" accept="image/*" onChange={this.selectFile} />
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!currentFile}
              onClick={this.upload}
            >
              Upload
            </button>
          </div>
        </div>

        {currentFile && (
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div>
        )}

        <div className="card mt-3">
          <ul className="list-group list-group-flush">
            {imageInfos &&
              imageInfos.map((img, index) => (
                <li className="list-group-item" key={index}>
                    <img
                      src={img.url}
                      alt={img.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                </li>
              ))}
          </ul>
        </div>
      </div>
      </form>
    </div>
        );
    }
}

export default AddProduct