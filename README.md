NGO management system**

Overview:

The NGO Management System is a comprehensive full-stack web application designed to automate and streamline the day-to-day operations of a non-governmental organization (NGO). The system supports both administrative management and public engagement, enabling smooth interaction between donors, volunteers, and NGO administrators. The goal is to modernize how NGOs manage resources, events, volunteers, donations, and beneficiaries using a scalable and secure digital platform.

Built using modern web development frameworks such as React.js, Angular, Node.js, and MongoDB, this project demonstrates the integration of frontend and backend technologies to deliver a dynamic and user-friendly experience.

Architecture:

Frontend:
- React.js (Admin Dashboard): Provides internal access for NGO staff to monitor, update, and manage data.
- Angular (User Portal): Public-facing site for donors and volunteers to interact with the NGO.
Backend:
- Node.js & Express.js: RESTful API that handles business logic and data routing between frontend and database.
Database:
- MongoDB: NoSQL database used to store structured and unstructured data such as user profiles, donations, and event information.
Development Tools:
- Git and GitHub for version control.
- Visual Studio Code as the code editor.
- Postman for testing APIs.

Key Features:

01. User Registration & Authentication
02. Volunteer Management
03. Donation Management
04. Event Management
05. Beneficiary Information
06. Communication & Feedback
07. Responsive UI/UX

Project structure:

ngo-management-system/
│
├── backend/                     # Node.js + Express + MongoDB
│   └── server.js
│   └── routes/
│   └── models/
│   └── controllers/
│
├── frontend-react-admin/       # React.js Admin dashboard
│   └── src/
│
├── frontend-angular-public/    # Angular portal for public/volunteers
│   └── src/
