# Konimbo Home Project

## Description

The Konimbo Home Project is a landing page featuring a form that collects user information including Full Name, Email, and Message. The data submitted through the form is sent to an Airtable table via a backend API built with Node.js, Express, and TypeScript. The project is styled using Tailwind CSS for a modern and responsive design, and uses Zod for robust form validation to ensure data integrity.

## Features

- Landing page design
- Form validation with Zod
- Submission to Airtable
- Responsive UI with Tailwind CSS

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Zod
- Node.js
- Express
- Airtable API
- Axios

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd konimbo-home-project
   ```
2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```
4. Run the backend server:
   ```
   npm run dev
   ```
5. Run the frontend development server:
   ```
   cd ../frontend
   npm start
   ```
6. Open your browser and navigate to `http://localhost:5173` to view the project.

## Usage

Fill out the form on the landing page by entering your Full Name, Email, and a Message. Upon submission, the form data will be validated, and if valid, sent to the backend API which stores it in an Airtable table. You will receive confirmation of successful submission.

## API Endpoints

### POST `/records/create`

- Description: Receives form data and creates a new record in Airtable.
- Request Body (JSON):
  ```json
  {
    "fullName": "string",
    "email": "string",
    "message": "string"
  }
  ```
- Response:
  - Success: 200 OK with confirmation message.
  - Error: Appropriate error status and message.

## License

This project is licensed under the MIT License.
# konimbo-home-project-2
