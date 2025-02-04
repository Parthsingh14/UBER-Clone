# Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object with the following fields:

- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **201 Created**
  - Description: User successfully registered.
  - Body: JSON object containing the user details and authentication token.
  - Example:
    ```json
    {
      "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

- **400 Bad Request**
  - Description: Validation errors or missing required fields.
  - Body: JSON object containing the validation errors.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Firstname atleast 3 character long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password much be 6 character long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```



### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body should be a JSON object with the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - Description: User successfully logged in.
  - Body: JSON object containing the authentication token and user details.
  - Example:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**
  - Description: Validation errors or missing required fields.
  - Body: JSON object containing the validation errors.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password much be 6 character long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - Description: Invalid credentials or user not found.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

## Setup

To set up the project, follow these steps:

1. Install dependencies:
    ```sh
    npm install
    ```

2. Create a `.env` file in the 

Backend

 directory with the following content:
    ```
    PORT=3000
    DB_CONNECT=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```

3. Start the server:
    ```sh
    npm start
    ```

The server will be running on `http://localhost:4000`.
```

