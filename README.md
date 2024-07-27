fullstack_store - E-commerce Platform
Project Overview
fullstack_store is a comprehensive e-commerce platform designed to provide an exceptional shopping experience for customers looking to purchase diamonds and custom fine jewelry. This project leverages modern web technologies to deliver a seamless and intuitive user interface, backed by a robust backend infrastructure.

Technologies and Tools Used
Frontend
React.js: JavaScript library for building user interfaces
Material-UI (MUI): React component library for implementing Google's Material Design
Axios: Promise-based HTTP client for the browser and node.js
Backend
PHP: Server-side scripting language for web development
MySQL: Relational database management system
Apache: Open-source HTTP server
MAMP: Local server environment for PHP and MySQL
Other Tools
Docker: Platform for developing, shipping, and running applications in containers
Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine
npm: Package manager for Node.js
Visual Studio Code: Source-code editor
Project Structure
The project is divided into two main folders: frontend and backend.

frontend: Contains the React application code.
backend: Contains PHP scripts and MySQL setup scripts.
Getting Started
Follow these instructions to set up the project on your local machine.

Prerequisites
Ensure you have the following installed on your system:

Node.js (and npm)
Docker
MAMP
Visual Studio Code
Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/fullstack_store.git
cd fullstack_store
2. Setting Up the Frontend
Navigate to the frontend directory and install the required dependencies:

bash
Copy code
cd frontend
npm install
Start the React development server:

bash
Copy code
npm start
3. Setting Up the Backend
Using MAMP
Install and Configure MAMP:

Download and install MAMP from MAMP's official website.
Open MAMP and start the servers.
Set the document root to the backend directory of your project. This can be configured in MAMP's preferences under the "Web Server" tab.
Set Up MySQL Database:

Open phpMyAdmin via MAMP's web start page.
Create a new database named fullstack_store.
Import the Database Schema:

In phpMyAdmin, select the fullstack_store database.
Click on the "Import" tab and import the db_setup.php file located in the backend directory.
Update Database Configuration:

Ensure the database connection settings in your PHP files match your local setup. Typically, this involves setting the hostname to localhost, the username to root, and the password to root (or empty, depending on your MAMP setup).

Using Docker (Optional)
If you prefer to use Docker, follow these steps:

Build Docker Image:

bash
Copy code
docker build -t fullstack_store-backend .
Run Docker Container:

bash
Copy code
docker run -d -p 8888:80 -v $(pwd):/var/www/html --name fullstack_store-backend fullstack_store-backend
Running the Application
With both frontend and backend servers running, open your browser and navigate to:

arduino
Copy code
http://localhost:3000
You should see the fullstack_store application up and running.

Usage
User Features
Browse and search for diamonds and jewelry
View product details
Add items to the shopping cart
User authentication (login, registration)
Profile management (view and update profile, change password)
Purchase history
Admin Features
Manage products (add, edit, delete)
View sales and user analytics
Contributing
We welcome contributions to improve the project. Please follow these steps:

Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add your feature')
Push to the branch (git push origin feature/your-feature)
Create a new Pull Request
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
React documentation
Material-UI documentation
PHP documentation
MySQL documentation
By following these instructions, you should be able to set up and run the fullstack_store project on your local machine. If you encounter any issues, please refer to the documentation of the respective technologies or reach out for support.

