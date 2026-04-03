PAYG CRM – Customer Management Application



1. Developer Information
Name: Joseph Mkonda


2. Development Environment

IDE / Code Editor:

 Visual Studio Code


3. Technologies Used

Frontend:

* React (Vite)
* Tailwind CSS
* Axios

Backend:

* Node.js
* Express.js

Database:

* MySQL
* Sequelize ORM

4. Required Software & Packages



Before running the application, ensure you have the following installed:

* Node.js (v22 or later)
* MySQL Server
* npm (Node Package Manager)



5. Installation Steps


STEP 1: Clone or extract the project folder

STEP 2: Install Backend Dependencies
* Navigate to backend folder:
  cd BackendAPI
* Install packages:
  npm install
STEP 3: Install Frontend Dependencies

* Navigate to frontend folder:
  cd frontend
* Install packages:
  npm install


6. Database Setup


1. Start MySQL server
2. Create a database (e.g., payg_crm)
3. Update database configuration in backend (.env file):

Example:
DB_NAME=customers
DB_USER=root
DB_PASSWORD=(any password here)
DB_HOST=localhost

4. Run migrations or sync database using Sequelize


7. Running the Application

STEP 1: Start Backend Server

* Navigate to backend folder:
  cd BackendAPI
* Run:
  node server.js

Server will run on:
http://localhost:5000

STEP 2: Start Frontend

* Navigate to frontend folder:
  cd frontend
* Run:
  npm run dev

Frontend will run on:
http://localhost:5173


8. How to Use the Application

---

1. Open browser and go to:
   http://localhost:5173

2. Features:

* Create Customer:
  Click "Add Customer" button and fill the form

* View Customers:
  All customers are displayed in a table

* Update Customer:
  Click "Edit" button and update details

* Delete Customer:
  Click "Delete" button to remove a customer


9. Notes

---

* Ensure backend server is running before using frontend
* Ensure MySQL database is active
* CORS is enabled for frontend-backend communication

---

