# 🛒 Forever — Full Stack E-commerce Platform

<p align="center">
  <b>A complete MERN stack e-commerce solution with Admin Panel & User Website</b>
</p>

---

## 📌 Overview

**Forever** is a full-stack e-commerce application designed to simulate a real-world online shopping platform.
It consists of three main parts:

* 🛍️ **Frontend** – Customer shopping experience
* 🛠️ **Admin Panel** – Product & order management
* ⚙️ **Backend API** – Server, authentication & database

This project demonstrates practical implementation of **full-stack development, REST APIs, authentication, and deployment**.

---

## 🌐 Live Applications

| Service           | Link                                           |
| ----------------- | ---------------------------------------------- |
| 🧑‍💻 Admin Panel |https://forever-adminbase.vercel.app/   |
| 🛒 Frontend       | https://forever-frontendbase.vercel.app/ |
| ⚙️ Backend API    | https://forever-hmxf.onrender.com/  |

---

## 🏗️ Tech Stack

### 🎨 Frontend

* React.js
* Vite
* Tailwind CSS

### 🧠 Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB

### 🔐 Authentication & Tools

* JSON Web Tokens (JWT)
* Cloudinary (Image Uploads)
* Axios

---

## ✨ Key Features

### 👤 User Side

* 🔐 Secure Login & Signup
* 🛍️ Browse Products
* 🛒 Add to Cart
* 📦 Place Orders
* 💳 Checkout System

### 🛠️ Admin Panel

* ➕ Add New Products
* ✏️ Update Existing Products
* ❌ Delete Products
* 📋 Manage Orders
* 📊 Dashboard Control

### ⚙️ Backend

* RESTful APIs
* JWT Authentication
* Secure Data Handling
* Database Integration

---

## 📂 Project Structure

```
Forever/
│
├── frontend/        # Customer-facing application
├── admin/           # Admin dashboard
├── backend/         # Express server & APIs
│
└── README.md
```

---

## ⚙️ Local Setup Guide

### 1️⃣ Clone the Repository

```
git clone https://github.com/ramjigupta2005/Forever.git
cd Forever
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

### 4️⃣ Admin Panel Setup

```
cd admin
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend (`/backend/.env`)

```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET=your_secret
```

### Frontend (`/frontend/.env`)

```
VITE_BACKEND_URL=https://forever-backend-rho-cyan.vercel.app
```

---

## 🚀 Deployment

| Service  | Platform        |
| -------- | --------------- |
| Frontend | Vercel          |
| Admin    | Vercel          |
| Backend  | Vercel / Render |

---

## 📈 Future Improvements

* 🔍 Product Search & Filters
* ❤️ Wishlist Feature
* 📱 Mobile Responsiveness Improvements
* 💳 Payment Gateway Integration (Stripe/Razorpay)
* 📊 Advanced Analytics Dashboard

---

## 🤝 Contributing

Contributions are welcome!
If you'd like to improve this project:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Author

**Ramji Gupta**
📌 Passionate Full Stack Developer

---

<p align="center">
  ⭐ If you like this project, don't forget to star the repo!
</p>
