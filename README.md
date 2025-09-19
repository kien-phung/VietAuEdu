# FitZone - Fitness Equipment E-commerce

FitZone is an e-commerce application for fitness equipment and
accessories, featuring full functionality such as product management,
shopping cart, order processing, and payment.

## Project Structure

\- client: Frontend built with Next.js and TypeScript

\- server: Backend built with ASP.NET Core (C#)

## Requirements

### Backend (.NET)

\- .NET 9.0 SDK

\- MySQL Server

\- Redis Server

### Frontend (Next.js)

\- Node.js (version 18 or later)

\- npm or yarn

## Installation Guide

### 1. Clone the project

git clone https://github.com/Hai1205/FitZone.git\
cd FitZone

### 2. Setup and Run Backend

#### Install required services (MySQL & Redis) using Docker

cd server\
docker-compose up -d

#### Create .env file in the server folder

Create a \`.env\` file inside the \`server\` directory using the
\`.env.example\` as reference and adjust values accordingly.

#### Restore packages and run migrations

dotnet restore\
dotnet ef database update\
dotnet run

The backend will run at http://localhost:4040

### 3. Setup and Run Frontend

cd client\
npm install\
\# or\
yarn install\
\
\# Run in development mode\
npm run dev\
\# or\
yarn dev

The frontend will run at http://localhost:3000

## Key Features

### 1. Authentication System

- Register, login, forgot password
- JWT authentication
- Login with Google (OAuth)

### 2. Product Management

- Product listing
- Product details
- Search, filter, and categorization

### 3. Cart & Ordering

- Add products to cart
- Manage cart
- Checkout and order placement

### 4. User Management

- Personal information
- Order history
- Shipping addresses

### 5. Admin Panel

- Manage products
- Manage orders
- Manage users
- Statistics and reports

## Technologies Used

### Backend

- ASP.NET Core 9.0
- Entity Framework Core
- MySQL
- Redis (cache)
- JWT Authentication
- Cloudinary (image storage)
- MailKit (email sending)

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- React Query
- Zod (validation)
- React Hook Form

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author: [Hai1205](https://github.com/hai1205)
