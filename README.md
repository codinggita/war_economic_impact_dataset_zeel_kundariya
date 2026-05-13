# 🚀 War Economic Impact Analysis

🔗 **Important Links**
🌐 **Live Project**: Coming Soon
💻 **GitHub Repository**: [Your GitHub Link Here]
📂 **Dataset (Google Drive)**: [https://drive.google.com/file/d/1kaIzjQShdkezc50liw4jFp9rwqAMkJVR/view?usp=drive_link](https://drive.google.com/file/d/1kaIzjQShdkezc50liw4jFp9rwqAMkJVR/view?usp=drive_link)
📘 **Assignment Repo**: [Assignment Repository Link Here]

---

## 📌 Project Overview
**War Economic Impact Analysis** is a comprehensive full-stack platform designed to analyze, visualize, and track the economic consequences of historical and ongoing conflicts. By processing a real-world dataset of thousands of conflict records, the system provides insights into how wars affect GDP, inflation, poverty, and unemployment.

The system is built to provide researchers, students, and policymakers with a structured way to explore the economic devastation caused by warfare across different regions and time periods.

## 🎯 Objectives
- Build a scalable RESTful API system using Node.js and Express.
- Design a high-performance MongoDB schema based on real-world economic datasets.
- Implement advanced multi-parameter filtering and regex-based search.
- Provide data-driven analytics and trending insights for conflict impact.
- Ensure secure user data management and authentication using JWT.
- Follow industry-standard MVC architecture and clean code practices.

## ❓ Problem Statement
Understanding the long-term economic damage of war is difficult due to:
- ❌ **Scattered Data**: Economic statistics are often fragmented across different reports.
- ❌ **Poor Visualization**: Hard to compare how different conflicts impact specific sectors (e.g., Agriculture vs. Energy).
- ❌ **Lack of Searchability**: No centralized way to search for conflicts by inflation rates, GDP loss, or reconstruction costs.
- ❌ **No Predictive Context**: Difficult to identify "high-risk" zones or "economic collapse" trends.

## 💡 Solution
This project centralizes war-related economic data into a structured knowledge base where users can:
- ✅ **Browse Conflicts**: Explore detailed records of World Wars, Civil Wars, and Interstate conflicts.
- ✅ **Analyze Impact**: View detailed metrics on inflation, currency devaluation, and poverty spikes.
- ✅ **Advanced Filtering**: Filter by region, country, status (Ongoing/Resolved), and specific economic thresholds.
- ✅ **Analytics Dashboard**: Identify the highest war costs and reconstruction requirements globally.
- ✅ **Security**: Protect data and user personalized features with robust JWT authentication.

## 🧠 Dataset Structure
The application is built on a massive JSON dataset with records structured as follows:

```json
{
  "Conflict_Name": "Syrian Civil War",
  "Conflict_Type": "Civil War",
  "Region": "Middle East",
  "Start_Year": "2011",
  "End_Year": "2026",
  "Status": "Ongoing",
  "Primary_Country": "Syria",
  "GDP_Change_%": "-34.81",
  "Inflation_Rate_%": "55.45",
  "Cost_of_War_USD": "114215767997",
  "Estimated_Reconstruction_Cost_USD": "178638357922"
}
```

## 🗄️ Database Schema Design
The MongoDB schema is optimized for both analytical queries and frequent updates:

```javascript
{
  Conflict_Name: String,
  Conflict_Type: String,
  Region: String,
  Start_Year: String,
  End_Year: String,
  Status: String,
  Primary_Country: String,
  Economic_Metrics: {
    GDP_Change: Number,
    Inflation_Rate: Number,
    Currency_Devaluation: Number
  },
  Social_Impact: {
    Poverty_Rate: Number,
    Food_Insecurity: Number,
    Unemployment_Rate: Number
  },
  Financials: {
    Cost_of_War: Number,
    Reconstruction_Cost: Number
  }
}
```

## ✅ Key Design Decisions
- **Normalized Referencing**: Separate collections for `Regions` and `Countries` to maintain data integrity.
- **Hybrid Storage**: Embedding core economic metrics within the conflict document for fast retrieval.
- **Advanced Indexing**: Compound indexes on `Region`, `Status`, and `Conflict_Type` for millisecond query response.
- **JWT-based Auth**: Stateless authentication to ensure scalability.

## 🏗️ System Architecture
The project follows a **Modular Layered Architecture**:
- **Frontend (React)** → Dynamic UI & Data Visualization.
- **Backend (Express)** → API Routing & Controller logic.
- **Database (MongoDB)** → Distributed data storage.
- **Middleware Layer** → Handling JWT Authentication, Request Logging, and Global Error Handling.

## ✨ Features

### 🔹 Core Features
- Full CRUD operations for all conflict and economic entities.
- Advanced search functionality (Regex-based search on Conflict names).
- Multi-parameter filtering (by status, region, inflation above X, etc.).
- Robust pagination and sorting system.

### 🔹 User Features
- Secure Registration & Login with Password Hashing (Bcrypt).
- JWT protected routes for administrative actions.
- User profile management.

### 🔹 Analytics & Stats
- Trending conflicts (most impactful).
- Top 10 highest inflation/war cost records.
- Regional impact distribution.

### 🔹 Advanced Features
- API Rate Limiting to prevent abuse.
- Standardized API Response format.
- Soft Delete functionality for data safety.

## ⚙️ API Overview

### 📌 Conflicts
- `GET /api/v1/conflicts` - Fetch all conflicts (with pagination)
- `GET /api/v1/conflicts/:id` - Fetch single conflict details
- `POST /api/v1/conflicts` - Add new conflict record (Admin only)
- `DELETE /api/v1/conflicts/:id` - Remove record (Soft delete)

### 🔍 Search & Filter
- `GET /api/v1/search?q=keyword` - Search across names and countries
- `GET /api/v1/conflicts?region=Europe&status=Ongoing` - Filter by criteria

### 📊 Statistics
- `GET /api/v1/stats/total` - Summary of all records
- `GET /api/v1/stats/highest-impact` - Peak economic damage data

### 🔐 Authentication
- `POST /api/v1/auth/register` - User Registration
- `POST /api/v1/auth/login` - Secure Login

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT (JSON Web Tokens), Bcrypt
- **Logging**: Morgan
- **Documentation**: Postman

## 📂 Project Structure
```text
war_economic_impact/
└── server/
    ├── config/         # DB & Env configs
    ├── controllers/    # Request handlers
    ├── models/         # Database schemas
    ├── routes/         # API Endpoints
    ├── middlewares/    # Auth & Logging
    ├── services/       # Data processing
    └── dataset.json    # Source Data
```

## 🚀 Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/zeel-k/war_economic_impact.git
```

### 2️⃣ Install Dependencies
```bash
cd server
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server
```bash
npm run dev
```

## 📥 Data Import Strategy
- **Bulk Insertion**: Using `insertMany()` for high-speed initial seeding.
- **Validation**: Strict schema validation during parsing.
- **Transformation**: Mapping flat JSON data to nested MongoDB documents.

## 🧪 Testing
- **Postman**: API testing for all endpoints.
- **CRUD Validation**: Ensuring data consistency after updates.
- **Stress Testing**: Handling large data queries with pagination.

## 📈 Performance Optimizations
- **Indexing**: Optimized fields for fast filtering.
- **Pagination**: Limiting response payload for high performance.
- **Lean Queries**: Using `.lean()` in Mongoose for read-only operations.

## ⚠️ Challenges Faced
- Processing and normalizing a 300,000+ line dataset.
- Balancing between embedded and referenced data structures.
- Implementing flexible, multi-layered filtering queries.

## 🔮 Future Improvements
- AI-based economic trend prediction.
- Interactive Map visualization for global impact.
- Real-time news integration for ongoing conflicts.

## 🤝 Contribution
This project is an academic assignment. External contributions are currently closed.


