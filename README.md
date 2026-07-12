# AssetPulse AI

AI-Powered Enterprise Asset & Resource Management Platform

AssetPulse AI is a full-stack enterprise dashboard application designed to help organizations manage assets, resource allocation, maintenance operations, bookings, departments, employees, audits, notifications, and reporting from a unified interface. The project is structured as a modular monorepo with a React frontend, an Express backend, and an AI service integration layer for future intelligent automation and analytics.

## Overview

This repository provides a modern local development environment for an enterprise asset management platform. The current implementation focuses on a working frontend-backend demo flow, with local authentication, dashboard navigation, and API route scaffolding for module-based enterprise operations.

The solution is intentionally organized into three major layers:

- Client: React + Vite + Tailwind CSS + shadcn-inspired UI components
- Server: Node.js + Express + Socket.IO + JWT-ready auth infrastructure
- AI Service: a separate service area for future AI-powered workflows, analytics, and automation

## Project Goals

The goal of AssetPulse AI is to provide a scalable platform for:

- Tracking enterprise assets and their lifecycle state
- Allocating resources across teams and departments
- Scheduling maintenance and service routines
- Monitoring bookings and utilization
- Supporting audit and compliance workflows
- Centralizing employee and department activity data
- Delivering a clean operational dashboard for decision-makers

## Key Features

### Frontend Experience

- Responsive dashboard layout
- Authentication page flow
- Protected route handling
- Asset and resource screen structure
- Modular enterprise UI sections for:
  - Dashboard
  - Assets
  - Allocation
  - Bookings
  - Maintenance
  - Audit
  - Departments
  - Employees
  - Reports
  - Notifications
  - Settings

### Backend Experience

- Express application bootstrap
- REST route structure for auth and major business modules
- Local demo authentication endpoint
- Health checks for development verification
- Socket.IO support for real-time communication
- Rate limiting and middleware security defaults
- MongoDB-ready configuration for production data persistence

### Current Local Demo Status

The project is currently configured to run locally in a development-friendly mode:

- Auth login uses a demo stub response for fast local verification
- MongoDB can be unavailable without blocking startup
- Route modules are scaffolded so the backend can boot and expose endpoints
- The frontend can connect to the local backend on a predictable URL

## Technology Stack

### Frontend

- React 19
- Vite 8
- Tailwind CSS 4
- shadcn-inspired component model
- React Router
- Axios
- Recharts
- Framer Motion
- Lucide React
- Socket.IO client

### Backend

- Node.js
- Express.js
- MongoDB via Mongoose
- JWT-based authentication support
- Socket.IO
- CORS, Helmet, Morgan, Cookie Parser
- Express Validator
- Nodemailer integration
- Multer for file handling

### AI Service

- Separate service folder for AI integrations and intelligent workflows

## Repository Structure

```text
AssetPulseAI/
├── ai-service/
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── database/
├── docs/
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   └── package.json
└── README.md
```

## Prerequisites

Before running the project locally, make sure you have the following installed:

- Node.js 18+ recommended
- npm 9+
- Git
- MongoDB (optional for local demo startup, but recommended for full persistence)

## Environment Configuration

### Client Environment

The client uses a Vite environment file to point at the local backend API:

```env
VITE_API_URL=http://127.0.0.1:5000/api
```

### Server Environment

The server includes a local environment file with development defaults such as:

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/assetpulse-ai
JWT_SECRET=your_super_secret_jwt_key
```

If MongoDB is not running locally, the application is designed to continue startup in demo mode so the frontend can still be verified.

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
git checkout main
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

### 4. Install AI Service Dependencies

If you plan to use the AI service layer, install dependencies inside the AI service folder as needed.

## How to Run the Project

### Start the Backend

From the project root:

```bash
cd server
npm start
```

This starts the Express server on port 5000.

### Verify the Backend

You can confirm the backend is running by opening the health route:

```text
http://127.0.0.1:5000/api/health
```

Expected response:

```json
{
  "success": true,
  "server": "Healthy"
}
```

### Start the Frontend

In a separate terminal:

```bash
cd client
npm run dev -- --host 127.0.0.1 --port 5173
```

The frontend will be available at:

```text
http://127.0.0.1:5173/
```

## Local Demo Login

For the current local development flow, the auth system uses a demo backend stub.

Demo credentials:

- Email: `admin@assetpulse.ai`
- Password: `Password123!`

These values are accepted by the local login route stub and redirect the user into the dashboard experience.

## Available Local Routes

### Backend Health

```text
GET /api/health
```

### Authentication

```text
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
POST /api/auth/forgot-password
POST /api/auth/reset-password/:token
PUT /api/auth/change-password
```

### Business Modules

The backend includes route scaffolding for:

- Assets
- Allocations
- Maintenance
- Bookings
- Audits
- Departments
- Employees
- Dashboard
- Notifications

## Development Notes

### Frontend Development

- Vite provides hot reloading for rapid UI iteration
- The client uses environment variables for the API base URL
- The UI is designed around reusable component structure and a clean route-based architecture

### Backend Development

- The server loads environment variables from `.env`
- App-level middleware handles CORS, security, logging, rate limiting, and JSON parsing
- Route modules are organized by feature area
- MongoDB can be integrated later without changing the general API structure

## Recommended Workflow

1. Start MongoDB if you want database-backed persistence.
2. Start the backend with `npm start` inside `server`.
3. Start the frontend with `npm run dev` inside `client`.
4. Open the login page at `http://127.0.0.1:5173/login`.
5. Use the demo credentials to verify the login flow.
6. Explore the dashboard and route structure.

## Troubleshooting

### Backend Not Starting

- Make sure dependencies are installed with `npm install`
- Confirm the `server` directory has its `.env` file configured
- Check whether port 5000 is already occupied

### Frontend Not Loading

- Confirm the Vite dev server is running on port 5173
- Confirm `client/.env` contains the correct `VITE_API_URL`
- Ensure the backend is reachable on `127.0.0.1:5000`

### Login Fails in the Browser

- Verify the backend health route responds successfully
- Confirm both the frontend and backend are running in separate terminals
- Check that CORS allows the local frontend origin

## Production Roadmap

The current repo is a development foundation for a deeper enterprise system. Planned evolution includes:

- Real database-backed authentication
- Secure password hashing and token management
- Role-based access control
- AI-driven recommendations and asset insights
- Better reporting, analytics, and dashboard widgets
- File upload and document management workflows
- Full integration with operational systems and external APIs

## License

This project is distributed under the MIT license.

## Authors

Developed as an enterprise asset management prototype and local demo platform for rapid iteration and feature exploration.

