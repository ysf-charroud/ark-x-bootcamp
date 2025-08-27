# Ark-X Bootcamp Project

This project is a Node.js application that demonstrates user authentication using [Passport.js](http://www.passportjs.org/). It includes local and Google authentication strategies, middleware for authentication, and user management endpoints.

## Features
- User authentication with Passport.js
- Local strategy (username/password)
- Google OAuth strategy
- Protected routes using authentication middleware
- REST API endpoints for user management

## Project Structure
```
app.js                # Main application entry point
app.rest              # REST client requests (for testing endpoints)
authMiddleware.js     # Middleware for route protection
users.js              # User management routes and logic
strategies/
  google.js           # Google OAuth strategy setup
  local.js            # Local strategy setup
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd ark-x-bootcamp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Configuration
- Set up your environment variables for Google OAuth and session secrets as needed.
- Update the configuration in `strategies/google.js` with your Google client credentials.

### Running the Application
```sh
node app.js
```

The server will start and listen for requests. Use the endpoints defined in `app.rest` or your preferred API client to test authentication and user routes.

## Usage
- Register and log in with local credentials.
- Authenticate with Google using the OAuth flow.
- Access protected routes with valid authentication.

## Dependencies
- [express](https://www.npmjs.com/package/express)
- [passport](http://www.passportjs.org/)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20)

## License
This project is for educational purposes as part of the Ark-X Bootcamp.
