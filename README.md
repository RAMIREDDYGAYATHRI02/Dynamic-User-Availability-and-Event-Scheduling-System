

---

# Dynamic User Availability and Event Scheduling System

## Project Overview

The Dynamic User Availability and Event Scheduling System is a full-stack web application that allows users to set their availability dynamically and enables admins to schedule sessions. Built with the MERN stack, it features a React frontend, an Express backend, and a MongoDB database. The application supports one-on-one and multi-participant sessions with a user-friendly interface.

## Features

- **User Availability Capture:** Users can log in, set availability for specific days or the entire week, and manage their availability slots.
- **Admin Scheduling Interface:** Admins can view user availability, schedule sessions, and handle one-on-one or multi-participant sessions.
- **Session Management:** View and manage scheduled sessions, including options to reschedule or cancel.
- **Intuitive UI/UX:** Modern and responsive design using React, Vite, and Bootstrap.

## Technology Stack

- **Frontend:** React, Vite, Bootstrap
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Deployment:** Netlify (Frontend), Render (Backend)

## Setup Instructions

### Frontend

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Build the Application:**

   ```bash
   npm run build
   ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`.

### Backend

1. **Navigate to the Backend Directory:**

   ```bash
   cd your-repo/backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the `backend` directory with the following content:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   The backend will be available at `http://localhost:5000`.

## Deployment Instructions

### Deploy Backend to Render

1. **Create a Render Account:**

   Sign up at [Render](https://render.com/).

2. **Create a New Web Service:**

   - Go to the [Render dashboard](https://dashboard.render.com/).
   - Click on "New" and select "Web Service."
   - Connect your GitHub repository containing the backend code.
   - Configure the build command as `npm install` and the start command as `npm run start`.
   - Add environment variables such as `MONGO_URI`.
   - Click "Create Web Service."

### Deploy Frontend to Netlify

1. **Create a Netlify Account:**

   Sign up at [Netlify](https://www.netlify.com/).

2. **Connect Your GitHub Repository:**

   - Go to the [Netlify dashboard](https://app.netlify.com/).
   - Click on "New site from Git."
   - Choose GitHub and authorize Netlify to access your repositories.
   - Select the repository containing the frontend code.

3. **Configure Build Settings:**

   - Set the build command to `npm run build`.
   - Set the publish directory to `dist` (or `build`).

4. **Deploy the Site:**

   Click on "Deploy site."

## MongoDB Compass

1. **Download and Install MongoDB Compass:**

   Get it from [MongoDB Compass Downloads](https://www.mongodb.com/products/compass).

2. **Connect to MongoDB:**

   - Open MongoDB Compass.
   - Click on "New Connection."
   - Enter your MongoDB connection string.
   - Click "Connect."

## Usage

### For Users

- **Log In:** Enter your email on the home page to log in.
- **Set Availability:** Use the form to set your availability for different days and time slots.

### For Admins

- **View Availability:** Navigate to the Admin Dashboard to select a user and view their availability.
- **Schedule Sessions:** Choose available slots to schedule one-on-one or multi-participant sessions.

## Contributing

Feel free to submit issues or pull requests on [GitHub](https://github.com/your-username/your-repo).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React:** A JavaScript library for building user interfaces.
- **Express:** A web application framework for Node.js.
- **MongoDB:** A NoSQL database used for data storage.
- **Netlify:** A platform for deploying static sites.
- **Render:** A platform for deploying backend applications.

---
