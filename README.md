# GiveHub Backend API Documentation

This documentation outlines the usage and endpoints of the GiveHub backend API, which is responsible for managing product data and image uploads.

## Base URL

```
http://localhost:4000
```

## Endpoints

### 1. Health Check

- **URL:** `/`
- **Method:** `GET`
- **Description:** Checks if the Express app is running.
- **Response:** 
  - Status: `200 OK`
  - Body: `"Express App is Running"`

### 2. Image Upload

- **URL:** `/upload`
- **Method:** `POST`
- **Description:** Uploads product images to the server.
- **Request Parameters:**
  - `product`: File (product image)
- **Response:** 
  - Status: `200 OK`
  - Body: 
    ```json
    {
        "success": 1,
        "image_url": "http://localhost:4000/images/{filename}"
    }
    ```

### 3. Add Product

- **URL:** `/addproduct`
- **Method:** `POST`
- **Description:** Adds a new product to the database.
- **Request Body:**
  - `name`: String (product name)
  - `image`: String (image URL)
  - `category`: String (product category)
  - `phoneNumber`: String (contact phone number)
  - `available`: Boolean (product availability)
- **Response:** 
  - Status: `200 OK`
  - Body: 
    ```json
    {
        "success": true,
        "name": "{product_name}"
    }
    ```

### 4. Remove Product

- **URL:** `/removeproduct`
- **Method:** `POST`
- **Description:** Removes a product from the database.
- **Request Body:**
  - `id`: Number (product ID)
- **Response:** 
  - Status: `200 OK`
  - Body: 
    ```json
    {
        "success": true,
        "name": "{product_name}"
    }
    ```

### 5. Get All Products

- **URL:** `/allproducts`
- **Method:** `GET`
- **Description:** Retrieves all products from the database.
- **Response:** 
  - Status: `200 OK`
  - Body: Array of product objects

## Database Schema

The database schema for products is as follows:

```javascript
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
    category:{
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
```

### Notes:
- Product images are stored in the `./upload/images` directory.
- The `available` field in the product schema indicates whether the product is currently available.
- The `date` field in the product schema stores the date of product creation.

## Dependencies

- Express.js
- Mongoose
- JWT (jsonwebtoken)
- Multer
- CORS

## Running the Server

To run the server, execute the following command:

```
node server.js
```

Ensure that MongoDB is running and accessible.

## Author

This backend API is developed and maintained by Mohammed Almubarak
