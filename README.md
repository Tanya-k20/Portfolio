# Portfolio

A modern, full-stack personal portfolio application designed to showcase my projects, technical skills, achievements, and professional journey through a responsive and interactive web experience.

The application follows a structured full-stack architecture with dedicated client-side, server-side, shared, and database layers. It is designed with maintainability, scalability, and clean software engineering practices in mind.

---

## Live Demo

The application is deployed and hosted on **Render**.

---

## Overview

This portfolio serves as a centralized platform for presenting my technical work and professional profile. It enables recruiters, developers, and collaborators to explore my projects, skills, achievements, and experience.

The project demonstrates practical full-stack development experience, including frontend development, backend integration, database management, and production deployment.

---

## Key Features

* Responsive and modern user interface
* Personal and professional profile
* Technical skills showcase
* Project portfolio
* Achievements and experience sections
* Full-stack client-server architecture
* Backend API integration
* Database persistence
* Type-safe development with TypeScript
* Clean and maintainable project structure
* Production deployment on Render

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Backend

* Node.js
* Server-side APIs

### Database

* Drizzle ORM
* SQL database integration

### Deployment

* Render

### Development Tools

* npm
* pnpm
* Docker
* Prettier

---

## Project Architecture

```text
Portfolio/
│
├── client/                 # Frontend application
├── server/                 # Backend and server-side logic
├── shared/                 # Shared types and utilities
│
├── drizzle/                # Database schema and configuration
├── public/                 # Static assets
├── scripts/                # Development and utility scripts
│
├── drizzle.config.ts       # Drizzle ORM configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm or pnpm
* Git

### Clone the Repository

```bash
git clone https://github.com/Tanya-k20/Portfolio.git
```

### Navigate to the Project

```bash
cd Portfolio
```

### Install Dependencies

Using npm:

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add the required environment variables.

```env
DATABASE_URL=your_database_connection_url
```

> Never commit sensitive environment variables or credentials to version control.

### Run Locally

```bash
npm run dev
```

The application will start in development mode.

---

## Engineering Principles

### Separation of Concerns

The application separates frontend, backend, shared functionality, and database configuration to maintain a clean and scalable architecture.

### Type Safety

TypeScript helps improve code reliability, maintainability, and developer productivity.

### Maintainability

The project structure is organized to make components, server logic, and shared modules easier to manage and extend.

### Production Deployment

The application is deployed on **Render**, providing a production-ready environment for hosting the full-stack application.

---

## Future Improvements

* Automated testing
* CI/CD pipeline integration
* Improved accessibility
* Performance optimization
* Enhanced animations and interactions
* Advanced project filtering
* Analytics integration

---

## Author

**Tanya K**

Aspiring Software Developer | Python Developer | Full-Stack Developer

* GitHub: https://github.com/Tanya-k20

---

## License

This project is developed for personal portfolio and educational purposes.
