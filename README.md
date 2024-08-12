# fullstack_store - E-commerce Platform

## Project Overview

**fullstack_store** is a comprehensive e-commerce platform designed to provide an exceptional shopping experience for customers looking to purchase diamonds and custom fine jewelry. This project leverages modern web technologies to deliver a seamless and intuitive user interface, backed by a robust backend infrastructure.

## Technologies and Tools Used

### Frontend

- **React.js**: JavaScript library for building user interfaces
- **Material-UI (MUI)**: React component library for implementing Google's Material Design

### Backend

- **PHP**: Server-side scripting language for web development
- **MySQL**: Relational database management system
- **MAMP**: Local server environment for PHP and MySQL

### Other Tools

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine
- **npm**: Package manager for Node.js
- **Visual Studio Code**: Source-code editor

## Project Structure

The project is divided into two main folders: `frontend` and `backend`.

- **frontend**: Contains the React application code.
- **backend**: Contains PHP scripts and MySQL setup scripts.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (and npm)
- **Docker**
- **MAMP**
- **Visual Studio Code**

### Installation

#### 1. Clone the Repository


git clone https://github.com/yourusername/fullstack_store.git
cd fullstack_store


#### 2. Setting Up the Frontend
Navigate to the frontend directory and install the required dependencies:
cd frontend
npm install

Start the React development server:
npm start

#### 1. Setting Up the Backend
1) Install and Configure MAMP:
2) Download and install MAMP from MAMP's official website.
3) Open MAMP and start the servers.
4) Set the document root to the backend directory of your project. This can be configured in MAMP's preferences under the "Web Server" tab.
5) Set Up MySQL Database:

#### Open phpMyAdmin via MAMP's web start page.
Create a new database named fullstack_store.
Import the Database Schema:

#### In phpMyAdmin, select the fullstack_store database.
Click on the "Import" tab and import the db_setup.php file located in the backend directory.
Update Database Configuration:

Ensure the database connection settings in your PHP files match your local setup. Typically, this involves setting the hostname to localhost, the username to root, and the password to root (or empty, depending on your MAMP setup).

#### Using Docker (Optional)
If you prefer to use Docker, follow these steps:

#### Build Docker Image:

bash
Copy code
docker build -t fullstack_store-backend .
Run Docker Container:

bash
Copy code
docker run -d -p 8888:80 -v $(pwd):/var/www/html --name fullstack_store-backend fullstack_store-backend
Running the Application
With both frontend and backend servers running, open your browser and navigate to:

plaintext
Copy code
http://localhost:3000
You should see the fullstack_store application up and running.

## Usage
### User Features
- **Browse and search for diamonds and jewelry**
- **View product details**
- **Add items to the shopping cart**
- **User authentication (login, registration)**
- **Profile management (view and update profile, change password)**
- **Purchase history**
- **Admin Features**
- **Manage products (add, edit, delete)**
- **View sales and user analytics**

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
React documentation
Material-UI documentation
PHP documentation
MySQL documentation