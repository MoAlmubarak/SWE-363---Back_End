import React, { useState } from 'react';
import './AddProduct.css'; 
import upload_area from '../../assets/black_upload.png'; 
const AddProduct = () => {
    const [image, setImage] = useState(false); // [1
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        catagory: '',
        phoneNumber: ""
    });
    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value});
    }

    // const [productDetails, setProductDetails] = useState({
    //     productName: '',
    //     description: '',
    //     userName: '',
        
    //     file: null
    // });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === "file") {
            setProductDetails(prevDetails => ({ ...prevDetails, file: files[0] }));
        } else {
            setProductDetails(prevDetails => ({ ...prevDetails, [name]: value }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Product Details:', {...productDetails});
        // Submit logic here
    };

    const Add_Product = async (productDetails) => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {
            responseData = data;
            console.log(data);
        });
        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            }).then((resp) => resp.json()).then((data) => {
                data.success?alert('Product Added Successfully'):alert('Product Not Added');
                console.log(data);
            
            })
        }
    }
    return (
        <div className="add-product-page">
            <form onSubmit={handleSubmit} className="order-summary">
                <div className="products-details">Product’s Details</div>
                
                <div className="form-group">
                    <label htmlFor="productName">Product Name:</label>
                    <input value={productDetails.name} onChange={changeHandler} type="text" id="productName" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input value={productDetails.phoneNumber} onChange={changeHandler} type="text" id="phoneNumber" name="phoneNumber" placeholder="05" required />
                </div>

                <div className="form-group">
                    <label htmlFor="catagory">Category:</label>
                    <input value={productDetails.catagory} onChange={changeHandler} type="text" id="catagory" name="catagory" required />
                </div>

                <div className="form-group file-upload-base">
                    <label htmlFor="file-input" className="custom-file-upload">
                        <div className="icon-frame">
                            {/* Display an icon if you like */}
                        </div>
                        <div className="text-and-supporting-text">
                        <img className="uploaded-image" src={image ? URL.createObjectURL(image) : upload_area} alt="upload" />
                            <span className="text-1">Click to Upload Image</span>
                            <span className="text"> or Drag and Drop</span>
                            <span className="supporting-text"> (Max. File size: 25 MB)</span>
                        </div>
                    </label>
                    <input onChange={imageHandler} id="file-input" type="file" name="image" />
                </div>

                <button onClick={()=> {Add_Product()}} className="btn">
                    Add a Product to GiveHub!
                </button>
            </form>
        </div>
    );
};

export default AddProduct;

