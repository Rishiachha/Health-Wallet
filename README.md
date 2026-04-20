Digital Health Wallet
This project implements a secure Digital Health Wallet system using a full-stack React-Node.js architecture. The system allows users to store medical records, track vital health statistics, and securely share access with healthcare providers.

## Project Overview
The system provides a centralized platform for medical data management with a focus on security and role-based access.

Secure Storage: Maintains medical reports and vital signs in a structured database.

Role-Based Access: Distinguishes between Owners (patients) and Viewers (doctors/caregivers).

Vitals Tracking: Specifically tracks Blood Pressure, Sugar Levels, and Heart Rate.

Document Management: Handles physical report uploads and secure file serving.

Fluid UI: Utilizes modern animations and responsive design for a professional user experience.

## Folder / File Description
1. server.js
Purpose: The main backend execution engine for the application.

Implements an Express.js server running on port 5000.

Handles JWT-based authentication and authorization middleware.

Manages file uploads via Multer, storing reports in an uploads/ directory.

Defines API endpoints for registration, login, report uploading, and data retrieval.

2. health.db
Purpose: The lightweight SQLite database powering the system.

users table: Stores usernames, hashed passwords, and roles (Owner vs. Viewer).

reports table: Stores metadata including title, date, file paths, and vital stats (BP, Sugar, Heart Rate).

shares table: Manages the permissions mapping between reports and authorized viewers.

3. package.json
Purpose: Manifest file for project dependencies and scripts.

Core dependencies: react, react-router-dom, axios.

Styling & UI: tailwindcss, lucide-react, framer-motion.

Scripts: Includes commands for start, build, and test.

4. package-lock.json
Purpose: Locks the dependency tree to ensure reproducible builds.

Contains the exact versioning and integrity hashes for every node module used in the project.

Ensures that the development environment remains consistent across different machines.

5. .gitignore
Purpose: Defines which files and folders should be excluded from version control.

Prevents sensitive files like .env and heavy folders like node_modules/ from being uploaded to GitHub.

Excludes local logs and production build artifacts to keep the repository clean.

## Execution Order (IMPORTANT)
To run the project locally, follow these steps in order:

Backend Setup:

Bash
node server.js
This initializes the database and starts the API.

Frontend Setup:

Bash
npm install
npm start
This launches the React dashboard.

## Generated Assets & Storage
Medical Reports
Path: /uploads/

Format: Files are renamed with a Date.now() timestamp prefix to prevent naming conflicts (e.g., 1734923-Report.pdf).

Database State
health.db is updated in real-time as users register and upload data.

Access is strictly enforced: Viewers can only see reports that have an entry in the shares table.

## Key Observations
Performance: The use of SQLite ensures zero-config database setup, making the app highly portable.

Security: Authentication is handled via JWT tokens passed in the Authorization header, ensuring API routes are protected.

UX: Framer Motion is utilized on the frontend to provide smooth transitions between medical dashboard views.

## Final Note
The Digital Health Wallet bridges the gap between patient data and professional medical review, ensuring that "Pristine Data" is accessible to the right people at the right time.
