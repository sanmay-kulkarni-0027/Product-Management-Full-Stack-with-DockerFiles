# Product Management Full Stack Application

This project is a **full-stack web application** for managing products — built with **Spring Boot** (backend), **React.js** (frontend), and **MySQL** (database).  
The entire stack is **containerized using Docker** and managed with **Docker Compose** for easy deployment.

---


## ✨ Features

- Full stack product management system
- RESTful API backend
- Responsive frontend interface
- Containerized with Docker
- Multi-container orchestration with Docker Compose
- MySQL database integration
- Environment-based configuration
- Scalable and maintainable architecture

---


## 🛠️ Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript 
- React Js

**Backend:**
- Java
- Spring Boot, Spring Data JPA
- RESTful API architecture

**Database:**
- MySQL 8.0+

**DevOps:**
- Docker
- Docker Compose

---


## 📁 Project Structure

```
Product_Management_Full_Stack/
│
├── Product_Management_Backend/      # Spring Boot backend application
│   ├── src/                         # Java source files
│   ├── target/                      # Compiled build files (auto-generated)
│   ├── pom.xml                      # Maven configuration file
│   ├── Dockerfile                   # Backend Docker image configuration
│
├── product_ui/                      # React frontend application
│   ├── public/                      # Static files (HTML, favicon, etc.)
│   ├── src/                         # React components and pages
│   ├── package.json                 # NPM dependencies and scripts
│   ├── Dockerfile                   # Frontend Docker image configuration
│
├── docker-compose.yml               # Orchestration file to run all containers
├── .gitignore                       # Git ignore file
└── README.md                        # Project documentation
```

---


## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Docker** (v20.0+) - [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose** (v1.29+) - [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Git** - [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/product-management-app.git
cd product-management-app
```

### 2. Configure Environment Variables

Create `.env` files in the root directory and configure:

```bash
# Database Configuration
MYSQL_ROOT_PASSWORD=your_root_password
MYSQL_DATABASE=product_db
MYSQL_USER=product_user
MYSQL_PASSWORD=your_password

# Backend Configuration
BACKEND_PORT=5000
NODE_ENV=development

# Frontend Configuration
FRONTEND_PORT=3000
REACT_APP_API_URL=http://localhost:5000/api
```

Update the values in `docker-compose.yml` or create individual `.env` files as needed.

### 3. Build Docker Images

```bash
# Build all services
docker-compose build

# Or build specific service
docker-compose build backend
docker-compose build frontend
```

## 🏃 Running the Application

### Start All Services

```bash
docker-compose up -d
```

The `-d` flag runs containers in detached mode. Remove it to see logs in real-time.

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f db
```

### Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Database:** localhost:3306

### Stop All Services

```bash
docker-compose down
```


## 🔐 Environment Variables

### Backend Variables
- `BACKEND_PORT` - Port for backend server (default: 5000)
- `MYSQL_HOST` - Database host (use service name: `db`)
- `MYSQL_USER` - Database username
- `MYSQL_PASSWORD` - Database password
- `MYSQL_DATABASE` - Database name

### Frontend Variables
- `FRONTEND_PORT` - Port for frontend server (default: 3000)
- `REACT_APP_API_URL` - Backend API URL

### Database Variables
- `MYSQL_ROOT_PASSWORD` - Root password
- `MYSQL_USER` - Application user
- `MYSQL_PASSWORD` - Application user password
- `MYSQL_DATABASE` - Database name

`

## 📚 Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [MySQL Docker Image](https://hub.docker.com/_/mysql)


