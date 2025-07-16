# Smart Home Integration

Smart Home Integration is a full-stack web application that enables users to manage and control their smart home devices efficiently. This system provides a centralized interface to monitor and interact with connected devices, enhancing the comfort, security, and automation of a smart home environment.

## 🔗 Live Demo

> https://smart-home-integration-website.onrender.com

## 🧠 Features

- 🏠 Dashboard for monitoring connected devices  
- 🔄 Real-time device status updates  
- ✅ Toggle switches for device control  
- 🧑‍💼 User authentication and authorization  
- 💾 MongoDB integration for device and user data persistence  
- 📡 API routes for device communication  
- 📱 Responsive and user-friendly UI  

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript
- React.js

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (with Mongoose ODM)

**Authentication:**
- JWT (JSON Web Token)

## 📁 Project Structure

```bash
smart-home-Integration/
│
├── backend/                # Express server files
│   ├── controllers/        # Request handling logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   └── config/             # DB and environment config
│
├── frontend/               # React frontend code
│   ├── components/         # Reusable UI components
│   ├── pages/              # React views/pages
│   ├── App.js              # Root component
│   └── index.js            # App entry point
│
├── .env                    # Environment variables
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## 🚀 Getting Started
#### Prerequisites
- Node.js and npm
- MongoDB (local or cloud)
- Git

#### Installation

##### 1. Clone the repository

```bash
git clone https://github.com/Nizam6239/smart-home-Integration.git
cd smart-home-Integration 
```

##### 2. Install backend dependencies

```bash
cd backend
npm install
```

##### 3. Set up environment variables

######  Create a .env file inside the backend/ folder:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

##### 4. Run the backend

```bash
cd backend
npm run dev
```

##### 5. Run the frontend

```bash
cd ../frontend
npm run dev
```

## 🧑‍💻 Author

#### Nizam
[![github](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Nizam6239)
