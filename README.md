# 🌐 StackOverflowProject

This project is a prototype of Stack Overflow, designed and implemented as a 3-tier distributed web application. It incorporates user and admin personas and features such as reputation management, views, and pagination.

The application is built to handle high volume traffic, using technologies such as Kafka for event streaming and Redis for caching. It also implements token-based authentication to ensure secure user access.

## 🚀 Key Features

- **👥 User and Admin Personas**: The application provides distinct interfaces and functionalities for users and administrators.
- **⭐ Reputation Management**: Users can gain or lose reputation based on their activity, similar to the real Stack Overflow platform.
- **👁️ Views**: The application keeps track of the number of views for each question, helping to highlight popular topics.
- **📄 Pagination**: To improve usability, the application implements pagination for displaying questions and answers.

## 💻 Technologies Used

- Frontend: React.js
- Backend: Node.js
- Event Streaming: Kafka
- Authentication: Passport.js
- Caching: Redis
- Deployment: AWS EC2, AWS S3
- Databases: MongoDB, MySQL
- Performance Testing: JMeter
- API Query Language: GraphQL

## 📂 Project Structure

The project is organized into several key directories:

- `be`: Contains backend-related files.
- `kafka-backend`: Contains files related to Kafka event streaming.
- `public`: Contains public assets for the frontend.
- `src`: Contains the source code for the application.

## 🚀 Getting Started

To get started with the project:

### Frontend

1. Clone the repository's front end folder `src` into any machine having Node.js installed on it.
2. Open the terminal in the folder `src`.
3. Execute `npm install` to install all the dependencies.
4. Execute `npm start` to run the front end server.

### Backend

1. Clone the repository's Backend folder `be` into any machine having Node.js installed on it.
2. Open the terminal in the folder `be`.
3. Execute `npm install` to install all the dependencies.
4. Update the necessary environment variables as per the `.env` file.
5. Execute `node index.js` or `npm start` to run the backend server.

### Kafka Backend

1. Clone the repository's Kafka Backend folder `kafka-backend` into any machine having Node.js installed on it.
2. Open the terminal in the folder `kafka-backend`.
3. Execute `npm install` to install all the dependencies.
4. Execute `node server.js` or `npm start` to run the Kafka backend server.

Open the browser and navigate to Front end server's IP address with Port number (Eg: 127.0.0.1:3000) to find the landing page.

## 🌐 Deployment

The application is deployed using AWS EC2 and AWS S3.
