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

### GET /users/profile

#### Description
This endpoint is used to get the profile of the logged-in user.

#### Responses

- **200 OK**
  - Description: User profile retrieved successfully.
  - Body: JSON object containing the user details.
  - Example:
    ```json
    {
      "_id": "60d0fe4f5311236168a109ca",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - Description: User is not authenticated.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### GET /users/logout

#### Description
This endpoint is used to log out the user.

#### Responses

- **200 OK**
  - Description: User successfully logged out.
  - Body: JSON object containing the success message.
  - Example:
    ```json
    {
      "message": "User logged out successfully"
    }
    ```

- **400 Bad Request**
  - Description: No token provided.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "No token provided"
    }
    ```



### POST /captain/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body should be a JSON object with the following fields:

- `fullname.firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the captain.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle.color` (string, required): The color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (number, required): The capacity of the vehicle. Must be at least 1.
- `vehicle.vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

- **201 Created**
  - Description: Captain successfully registered.
  - Body: JSON object containing the captain details and authentication token.
  - Example:
    ```json
    {
      "captain": {
        "_id": "60d0fe4f5311236168a109cb",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
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
          "msg": "First name must be at least 3 characters long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        },
        {
          "msg": "Vehicle color must be at least 3 characters long",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "Vehicle plate must be at least 3 characters long",
          "param": "vehicle.plate",
          "location": "body"
        },
        {
          "msg": "Vehicle capacity must be at least 1 characters long",
          "param": "vehicle.capacity",
          "location": "body"
        },
        {
          "msg": "Vehicle type must be car, motorcycle or auto",
          "param": "vehicle.vehicleType",
          "location": "body"
        }
      ]
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

