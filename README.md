# Webtoon REST API

This is a RESTful API for managing a collection of webtoons, inspired by the webtoon "Castle Swimmer." The API allows you to create, retrieve, and delete webtoons, with JWT-based authentication implemented for secure access to certain operations.

## Features

- Fetch all webtoons with basic details (public).
- Fetch a specific webtoon by its ID (public).
- Add a new webtoon (requires JWT authentication).
- Delete a webtoon by its ID (requires JWT authentication).
- Simple login route to generate a JWT token for authenticated routes.

## Technologies Used

- **Node.js** with **Express.js** for building the REST API.
- **MongoDB** with **Mongoose** for database interaction.
- **JWT** (JSON Web Tokens) for securing endpoints.
- **dotenv** for environment variable management.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- A MongoDB database (you can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based option).
- Postman or cURL for testing API requests.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/webtoon-api.git

2. Navigate to the project directory:
   ```bash
   cd webtoon-api

3.Install Dependencies:
   ```bash
   npm install
```
4. Set up environment variables: Create a file named .env in the root directory of your project.
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000

5. Running the application: To start the server, run the following command:
   ```bash
   npm start
