const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const exp = require('constants');
const { type } = require('os');

import UserModel from './models/users';
const UserModel = require('./models/users');

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://givehub:Givehub232823@cluster0.ppjjllg.mongodb.net/Givehub")

// API Creation

app.get("/", (req, res) => {
    res.send("Express App is Running");
})


//SignUp
app.post("/SignUp", (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})


// Creating upload Endpoint for Image
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({ 
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema Creation products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    catagory:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        default: Date.now(),
    },
    available:{
        type: Boolean,
        default: true,
    }
})

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id:id,
        name: req.body.name,
        image: req.body.image,
        catagory: req.body.catagory,
        phoneNumber: req.body.phoneNumber,
        available: req.body.available,
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
    
})

// Creating API for Deleting Product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({
        id:req.body.id
    });
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,
    })
})
// Creating API for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

app.listen(port, (error) => {
    if(!error){
        console.log(`Server is running on port: `+ port);
    }
    else{
        console.log(`Error: `+ error);
    }
})
