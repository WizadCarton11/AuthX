# AuthX – Secure Authentication & Authorization Backend

AuthX is a backend authentication service I built to deeply understand how modern authentication systems work in real-world applications.
Instead of just using third-party auth services, I implemented the complete flow myself — including JWT access tokens, refresh tokens, role-based access control (RBAC), and secure password handling.
This project focuses on backend architecture, security, and clean middleware design.

---

## What This Project Does

- User Registration & Login
- Secure Password Hashing using bcrypt
- JWT-based Access Tokens (15 min expiry)
- Refresh Tokens (7 day expiry)
- Role-Based Access Control (Admin/User)
- Protected Routes using Middleware
- Input Validation using Joi
- API Rate Limiting for security
- Centralized Error Handling
- MongoDB Atlas cloud database integration

---

##  Why I Built This

I wanted to understand:

- How JWT actually works internally
- Why access tokens are short-lived
- How refresh tokens are validated and rotated
- How middleware controls request flow
- How role-based access is implemented cleanly
- How authentication scales in stateless systems

This project helped me move from "using authentication" to actually **engineering authentication systems**.

---

##  Authentication Flow

1. User registers → Password is hashed using bcrypt before storing.
2. On login:
   - Server generates a short-lived Access Token (15 minutes)
   - Server generates a long-lived Refresh Token (7 days)
3. Access Token is used to access protected routes.
4. If Access Token expires → client sends Refresh Token.
5. Server validates Refresh Token from database and issues a new Access Token.
6. Role-based middleware restricts access to admin-only routes.

---

##  Architecture Structure

- **Controllers** → Business logic
- **Models** → Mongoose schemas
- **Routes** → API endpoints
- **Middleware** → Authentication, Authorization, Validation
- **Validators** → Request schema validation
- **Utils** → Token generation logic

The project follows a modular structure to keep concerns separated and scalable.

---

##  API Endpoints

### Register
POST `/api/auth/register`

### Login
POST `/api/auth/login`

### Refresh Access Token
POST `/api/auth/refresh`

### Logout
POST `/api/auth/logout`

### Admin Route (Protected)
GET `/api/auth/admin`

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Joi
- express-rate-limit

---

  ## ~Ashray Saxena
