<div align="center">

# 🚀 War Economic Impact Analysis API

### **A production-grade backend engine for tracking, analyzing, and visualizing the global economic consequences of armed conflicts.**

[![Node.js Version](https://img.shields.io/badge/Node.js-v18.0.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.2.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

[Explore Docs](https://github.com/Zeelkundariya/war_economic_impact_dataset_zeel_kundariya#readme) · [Report Bug](https://github.com/Zeelkundariya/war_economic_impact_dataset_zeel_kundariya/issues) · [Request Feature](https://github.com/Zeelkundariya/war_economic_impact_dataset_zeel_kundariya/issues)

</div>

## 🌟 Project Vision

> "Providing researchers and policymakers with a high-fidelity data ecosystem to understand the long-term economic devastation of war, enabling better reconstruction strategies and global stability monitoring."

---

## 📖 Introduction

The **War Economic Impact Analysis API** is a high-performance backend system designed to process and analyze a massive dataset of 300,000+ conflict records. It tracks critical economic metrics such as **GDP volatility, inflation spikes, and reconstruction costs** across historical and modern warfare.

This system is built with a **Modular Layered Architecture (MVC)**, ensuring scalability and robust data integrity. It features a custom automated seeder to handle large-scale data ingestion and a secure JWT-based authentication layer to protect administrative operations.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Node.js** | Runtime Environment |
| **Express.js** | Web Framework (v5.x) |
| **MongoDB** | NoSQL Database |
| **Mongoose** | ODM for Schema Management |
| **JWT** | Secure Stateless Authentication |
| **Bcrypt.js** | Advanced Password Hashing |
| **Morgan** | Real-time Request Logging |
| **Dotenv** | Secure Environment Configuration |
| **CORS** | Cross-Origin Resource Sharing |

---

## ✨ Key Features

-   📊 **Massive Data Handling**: Optimized for querying and managing over 300,000+ conflict records.
-   👤 **Secure Auth System**: Implementation of JWT for protected routes and Bcrypt for sensitive data.
-   🏗️ **MVC Architecture**: Clean separation of concerns between Models, Controllers, and Routes.
-   📥 **Automated Seeder**: Custom script for rapid bulk data import from JSON to MongoDB.
-   🔍 **Advanced CRUD**: Full lifecycle management of conflict data with optimized search.
-   🛡️ **Robust Error Handling**: Centralized middleware for consistent and descriptive API responses.
-   📡 **RESTful Design**: Standardized endpoints for seamless frontend integration.

---

## 🔐 Authentication & Security

The API implements industry-standard security protocols:

-   **JWT Stateless Auth**: Secure token-based access control.
-   **Password Hashing**: Uses `bcryptjs` for maximum entropy in credential storage.
-   **Route Protection**: Multi-layered middleware to verify user identity before data mutation.
-   **Environment Isolation**: Sensitive keys managed via `.env` with `.gitignore` protection.
-   **Mongoose Validation**: Strict schema enforcement to prevent malformed data insertion.

---

## 📂 Project Structure

```text
war_economic_impact/
├── server/
│   ├── config/             # Database & environment configurations
│   ├── controllers/        # Request handlers & business logic
│   ├── middlewares/        # Auth & Error handling middleware
│   ├── models/             # Mongoose schemas & data models
│   ├── routes/             # RESTful API route definitions
│   ├── dataset.json        # 300k+ source records
│   ├── seeder.js           # Automated data ingestion script
│   └── server.js           # Entry point for the Express server
├── .gitignore              # Protection for .env & node_modules
├── README.md               # Project documentation
└── package.json            # Dependencies & scripts
```

---

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Zeelkundariya/war_economic_impact_dataset_zeel_kundariya.git
cd war_economic_impact_dataset_zeel_kundariya
```

### 2. Install dependencies
```bash
cd server
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the `server/` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/war_economic_impact
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

### 4. Run the Data Seeder
```bash
npm run data:import
```

### 5. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

---

## 🛣 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/api/v1/auth/register` | Register a new user | Public |
| POST | `/api/v1/auth/login` | Login user & get token | Public |

### 👥 Conflict Management (CRUD)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/api/v1/conflicts` | Fetch all conflict records | Public |
| GET | `/api/v1/conflicts/:conflictId` | Get single conflict details | Public |
| POST | `/api/v1/conflicts` | Create a new record | Private (Auth) |
| PUT | `/api/v1/conflicts/:conflictId` | Replace conflict data | Private (Auth) |
| PATCH | `/api/v1/conflicts/:conflictId` | Update specific fields | Private (Auth) |
| DELETE | `/api/v1/conflicts/:conflictId` | Remove conflict record | Private (Auth) |

### 🔍 Search & Filter
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/api/v1/search?q=keyword` | Search across names and countries | Public |
| GET | `/api/v1/conflicts?region=Europe&status=Ongoing` | Multi-parameter filtering | Public |

### 📊 Statistics
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/api/v1/stats/total` | Global summary of conflict data | Public |
| GET | `/api/v1/stats/highest-impact` | Trending high-impact conflict data | Public |

---

## 🗄 Database Schema

### Conflict Model
```javascript
{
  Conflict_Name: { type: String, required: true },
  Conflict_Type: { type: String, required: true },
  Region: { type: String, required: true },
  Start_Year: { type: String, required: true },
  End_Year: { type: String },
  Status: { type: String, required: true },
  Primary_Country: { type: String, required: true },
  GDP_Change_Percentage: { type: Number },
  Inflation_Rate_Percentage: { type: Number },
  Cost_of_War_USD: { type: Number }
}
```

---

## 🚨 Error Handling

The API uses a global error-handling middleware for consistent output:

```json
{
  "message": "Conflict not found",
  "stack": "..." // Only visible in Development mode
}
```

---

## ⚡ Performance Optimizations

-   **Massive Insertions**: Optimized `insertMany` in seeder for high-speed data migration.
-   **Indexing**: (Planned) Strategic indexing on `Region`, `Status`, and `Conflict_Name`.
-   **Lean Data Access**: Minimizing payload size by selecting specific fields for list views.

---

## 📡 API Usage Example (POST)

**Endpoint**: `POST /api/v1/conflicts`
**Auth**: `Bearer <token>`

**Sample Request**:
```json
{
  "Conflict_Name": "Modern Conflict Alpha",
  "Conflict_Type": "Interstate War",
  "Region": "Asia",
  "Status": "Ongoing",
  "Primary_Country": "India",
  "Start_Year": "2024"
}
```

---

<div align="center">

### Built with ❤️ by [Zeel Kundariya](https://github.com/Zeelkundariya)

**[↑ Back to Top](#-war-economic-impact-analysis-api)**

</div>
