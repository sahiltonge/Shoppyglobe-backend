```markdown
# 🛍️ ShoppyGlobe E-Commerce Backend API

This is the backend API for the ShoppyGlobe E-commerce application built with **Node.js**, **Express.js**, and **MongoDB**. It includes secure user authentication using **JWT**, product listing, and cart management.

---

##  Features

-  User Registration & Login with JWT
-  Product List and Product Detail APIs
-  Cart Management (Add, Update, Delete)
-  MongoDB for data persistence
-  Cart routes protected by token-based authentication
-  Tested via ThunderClient

---

##  Project Structure

```

shoppyglobe-backend/
│
├── models/            # Mongoose Schemas
│   ├── Product.js
│   ├── CartItem.js
│   └── User.js
│
├── routes/            # API Route Handlers
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   └── authRoutes.js
│
├── middlewares/       # Custom Middleware
│   └── authMiddleware.js
│
├── server.js          # Entry Point
├── package.json
└── README.md

````

---

````

### 1. Install Dependencies

##  Dependencies

```bash
npm install express 
npm install mongoose 
npm install bcryptjs 
npm install jsonwebtoken
npm install --save-dev nodemon
```

### 2. Start MongoDB

Ensure MongoDB is running locally at:

```
mongodb://127.0.0.1:27017/shoppyglobe
```

### 3. Run the Server

    -npm start

---

##  API Endpoints

###  Auth Routes

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| POST   | `/register` | Register new user       |
| POST   | `/login`    | Login and get JWT token |

---

###  Product Routes

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/products`     | List all products |
| GET    | `/products/:id` | Get product by ID |

---

###  Cart Routes *(Protected - JWT Required)*

| Method | Endpoint    | Description              |
| ------ | ----------- | ------------------------ |
| POST   | `/cart`     | Add product to cart      |
| PUT    | `/cart/:id` | Update quantity in cart  |
| DELETE | `/cart/:id` | Delete product from cart |

---

##  How to Use JWT

After successful login, use the token like this in ThunderClient:

```
Authorization: Bearer <your-token>
```

---

##  Sample Product Schema

```json
{
  "name": "Wireless Mouse",
  "price": 499,
  "description": "Ergonomic wireless mouse",
  "stock": 100
}
```

---

##  ThunderClient Testing

Tested all routes with ThunderClient. Screenshots are in `screenshots/` folder:

* register-success.png
* login-success.png
* get-products.png
* get-single-product.png
* add-cart.png
* update-cart.png
* delete-cart.png
* unauthorized-access.png

---

**Contact me**
 Email: [sahiltonge85@gmail.com](mailto:sahiltonge85@gmail.com)
 [LinkedIn](https://www.linkedin.com/in/sahil-tonge)
 [GitHub](https://github.com/sahiltonge) 

**GitHub Repo LINK**

    - https://github.com/sahiltonge/shoppyglobe-backend.git