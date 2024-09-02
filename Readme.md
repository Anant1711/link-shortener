# Link Shortener Project

This project is a simple URL shortener service built using Node.js, Express, and MongoDB. It allows users to generate shortened URLs for any given long URL, track the usage of those URLs, and retrieve analytics on the usage.

## Features

- **Shorten URLs**: Generate a unique, shortened URL for any provided long URL.
- **Redirect URLs**: Redirect users to the original URL when they access the shortened URL.
- **Analytics**: Track the number of times a shortened URL has been accessed and view a history of access timestamps.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing URL data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Anant1711/link-shortener.git
   cd link-shortener
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up MongoDB**:

   Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017/shortURL`. You can adjust the MongoDB connection string in `app.js` if your MongoDB instance is hosted elsewhere.

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:8001`.

## API Endpoints

### 1. **Generate a new short URL**

   - **Endpoint**: `POST /url`
   - **Body Parameters**:
     - `url`: The long URL you want to shorten.
   - **Response**: A JSON object containing the generated `id` (shortened URL ID).

   ```json
   {
     "id": "JPjyBSkrV"
   }
   ```

### 2. **Redirect to the original URL**

   - **Endpoint**: `GET /url/:shortid`
   - **Parameters**:
     - `shortid`: The ID of the shortened URL.
   - **Behavior**: Redirects to the original URL.

### 3. **Get analytics for a short URL**

   - **Endpoint**: `GET /url/analytics/:shortid`
   - **Parameters**:
     - `shortid`: The ID of the shortened URL.
   - **Response**: A JSON object containing `totalClicks` (number of times the URL was accessed) and `analytics` (array of access timestamps).

   ```json
   {
     "totalClicks": 3,
     "analytics": [
       { "timestamp": 1725271369041 },
       { "timestamp": 1725279014527 },
       { "timestamp": 1725289952296 }
     ]
   }
   ```

## Folder Structure

- **controllers**: Contains the logic for URL generation, redirection, and analytics.
- **models**: Defines the MongoDB schema for storing URL data.
- **routes**: Defines the API routes.
- **connection**: Handles the connection to MongoDB.