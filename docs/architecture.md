# Architecture Documentation

## Database Schema (MongoDB)

### 1. User Collection (`users`)

| Field        | Type     | Description                       |
|-------------|----------|-----------------------------------|
| `_id`       | ObjectId | Unique identifier                  |
| `username`  | String   | Login username                     |
| `password`  | String   | Hashed password using bcrypt       |
| `createdAt` | Date     | Account creation timestamp         |

### 2. Job Collection (`jobs`)

| Field             | Type       | Description |
|------------------|------------|-------------|
| `_id`            | ObjectId   | Unique job ID |
| `user`           | ObjectId   | Reference to `User` (`user._id`) |
| `company`        | String     | Company name |
| `position`       | String     | Job position applied for |
| `status`         | Enum       | `Applied` / `Interviewing` / `Offered` / `Rejected` |
| `isRemote`       | Boolean    | Whether the job is remote |
| `appliedDate`    | Date       | Date application sent |
| `responseDate`   | Date       | Date company responded |
| `daysToResponse` | Number     | Derived: difference between responseDate and appliedDate |
| `notes`          | String     | Optional notes |
| `createdAt`      | Date       | Timestamp when job added |
| `updatedAt`      | Date       | Timestamp when job updated |

---

## Module / Class Breakdown

### Backend (`/backend`)

| Module           | Purpose |
|-----------------|---------|
| `server.js`      | Initializes Express server, connects MongoDB, sets up middleware |
| `models/User.js` | User schema, password hashing middleware |
| `models/Job.js`  | Job schema, derived field calculation |
| `controllers/authController.js` | Handles login, registration endpoints |
| `controllers/jobController.js`  | Handles CRUD operations for jobs |
| `routes/authRoutes.js`          | `/api/auth` routes: login, register |
| `routes/jobRoutes.js`           | `/api/jobs` routes: CRUD, filtering, pagination |
| `middleware/authMiddleware.js` | JWT token verification |

### Frontend (`/frontend`)

| Module / Component        | Purpose |
|---------------------------|---------|
| `App.js`                  | Sets up routing, `user` state, and protected routes |
| `pages/Login.js`          | Login form, updates global `user` state |
| `pages/Register.js`       | Registration form, logs in user after signup |
| `pages/Dashboard.js`      | Shows job list, handles logout, fetches jobs |
| `components/JobForm.js`   | Form to create or update jobs, triggers dashboard refresh |
| `api/axiosConfig.js`      | Axios instance with base URL, optional interceptors for 401 handling |
| `styles.css`              | Layout and form styling (aligned labels, inputs, buttons, job list) |

---

## Data Flow / Architecture Overview

1. **Frontend**  
   - User interacts with React forms → calls Axios API → backend endpoints.
2. **Backend**  
   - Express routes → controllers → Mongoose models → MongoDB.
3. **State Handling**  
   - `user` state in App.js → passed to login, dashboard, register.  
   - Job list refreshed via `fetchJobs` callback.
4. **Derived Fields**  
   - `daysToResponse` calculated in backend from `appliedDate` and `responseDate`.

> Optional: Include a diagram showing **Frontend ↔ Backend ↔ MongoDB** with arrows for login, job CRUD, and derived field calculation.
