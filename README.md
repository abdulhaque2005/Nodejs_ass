# Nodejs_ass

# Student CGPA API

## Objective

This project is a RESTful API built using Express.js.  
It manages student academic performance records using an in-memory JSON array.

The API provides multiple GET routes to fetch student data, calculate statistics, and filter records dynamically.

---

## Tech Stack

- Node.js
- Express.js
- CORS
- In-Memory JSON Data
- Postman (for testing)
- Render (for deployment)

---

## Implemented Routes

### 1. GET /students
Returns all student records.

Status Code: 200

---

### 2. GET /students/topper
Returns the student with the highest CGPA.

Status Code:
- 200 (if students exist)
- 404 (if no students found)

---

### 3. GET /students/average
Returns the average CGPA of all students.

Response Format:
{
  "averageCGPA": 8.12
}

Status Code: 200

---

### 4. GET /students/count
Returns total number of students.

Response Format:
{
  "totalStudents": 10
}

Status Code: 200

---

### 5. GET /students/:id
Returns a student by ID.

Example:
GET /students/3

Status Code:
- 200 (if found)
- 404 (if not found)

---

### 6. GET /students/branch/:branchName
Returns all students from a specific branch.

Example:
GET /students/branch/CSE

Status Code:
- 200 (if found)
- 404 (if no students in that branch)

---

## Sample API URLs (Local)

http://localhost:2000/students  
http://localhost:2000/students/topper  
http://localhost:2000/students/average  
http://localhost:2000/students/count  
http://localhost:2000/students/1  
http://localhost:2000/students/branch/CSE  

---

## How to Run Locally

1. Clone the repository:

git clone https://github.com/abdulhaque2005/Nodejs_ass.git

2. Navigate to project folder:

cd student-cgpa-api

3. Install dependencies:

npm install

4. Start the server:

node index.js

Server will run on:
http://localhost:2000

---

## Deployment

### GitHub Repository
(Add your GitHub link here)

### Postman Documentation
(Add your Postman public documentation link here)

### Render Deployment
(Add your deployed Render link here)

---

## Learning Outcomes

- Designed RESTful GET routes
- Implemented dynamic route parameters
- Performed filtering and aggregation
- Used proper HTTP status codes
- Deployed API using Render
- Documented API professionally

---

## Author

Abdul Haque  
B.E Computer Science Engineering
