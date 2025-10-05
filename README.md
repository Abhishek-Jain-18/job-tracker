# 🧩 Job Application Tracker (MERN Stack)

A full-stack CRUD web application built using the **MERN** stack (MongoDB, Express, React, Node.js) that helps users manage and track their job applications efficiently.

---

## 🚀 Overview

The **Job Application Tracker** allows users to:
- Register and login securely
- Add, edit, view, and delete job applications
- Track application status (Applied, Interviewing, Offered, Rejected)
- Record dates for application and responses
- Automatically calculate **Days to Response** (a derived field)
- Filter, paginate, and manage job listings
- Logout securely and manage sessions

---

## 🧠 Features

✅ **Authentication System**
- Username/password based login and registration  
- JWT token for secure sessions  

✅ **CRUD Operations**
- Add, read, update, delete job entries  
- Includes text, enum, boolean, and derived fields  

✅ **Listing & Data Management**
- Pagination (5–10 jobs per page)  
- Filter by status or company name  
- Optional sorting and search  

✅ **Derived Field**
- `daysToResponse` = `responseDate - appliedDate`  

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React.js (Hooks, React Router) |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ORM) |
| Authentication | JWT, bcrypt |
| API Client | Axios |
| Styling | CSS (Responsive forms & dashboard layout) |

---


