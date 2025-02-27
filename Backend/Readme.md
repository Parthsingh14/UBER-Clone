```markdown
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

### POST /captain/login

#### Description
This endpoint is used to log in an existing captain.

#### Request Body
The request body should be a JSON object with the following fields:

- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

Example:
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - Description: Captain successfully logged in.
  - Body: JSON object containing the authentication token and captain details.
  - Example:
    ```json
    {
      "message": "Captain Logged In",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
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
          "msg": "Password must be at least 6 characters long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - Description: Invalid credentials or captain not found.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

### GET /captain/profile

#### Description
This endpoint is used to get the profile of the logged-in captain.

#### Responses

- **200 OK**
  - Description: Captain profile retrieved successfully.
  - Body: JSON object containing the captain details.
  - Example:
    ```json
    {
      "message": "Captain Profile",
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
      }
    }
    ```

- **401 Unauthorized**
  - Description: Captain is not authenticated.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### GET /captain/logout

#### Description
This endpoint is used to log out the captain.

#### Responses

- **200 OK**
  - Description: Captain successfully logged out.
  - Body: JSON object containing the success message.
  - Example:
    ```json
    {
      "message": "Captain logged out successfully"
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

### `/ride` Routes Documentation

#### POST `/ride/create`

**Description**: Create a new ride.

**Request Body**:
- `pickup` (string, required): The pickup location. Must be at least 3 characters long.
- `destination` (string, required): The destination location. Must be at least 3 characters long.
- `vehicleType` (string, required): The type of vehicle. Must be one of `auto`, `car`, or `bike`.

**Responses**:
- **200 OK**
  - Description: Ride successfully created.
  - Body: JSON object containing the ride details.
  - Example:
    ```json
    {
      "user": "60d0fe4f5311236168a109ca",
      "pickup": "123 Main St",
      "destination": "456 Elm St",
      "otp": "123456",
      "fare": 50
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
          "msg": "Invalid Pickup Location",
          "param": "pickup",
          "location": "body"
        },
        {
          "msg": "Invalid Destination Location",
          "param": "destination",
          "location": "body"
        },
        {
          "msg": "Invalid Vehicle Type",
          "param": "vehicleType",
          "location": "body"
        }
      ]
    }
    ```
- **500 Internal Server Error**
  - Description: Server error.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "All Fields are required"
    }
    ```

#### GET `/ride/get-fare`

**Description**: Get the fare for a ride.

**Query Parameters**:
- `pickup` (string, required): The pickup location. Must be at least 3 characters long.
- `destination` (string, required): The destination location. Must be at least 3 characters long.

**Responses**:
- **200 OK**
  - Description: Fare successfully retrieved.
  - Body: JSON object containing the fare details.
  - Example:
    ```json
    {
      "auto": 40,
      "car": 60,
      "bike": 30
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
          "msg": "Invalid Pickup Location",
          "param": "pickup",
          "location": "query"
        },
        {
          "msg": "Invalid Destination Location",
          "param": "destination",
          "location": "query"
        }
      ]
    }
    ```
- **500 Internal Server Error**
  - Description: Server error.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "message": "Error fetching distance and time"
    }
    ```

### `/maps` Routes Documentation

#### GET `/maps/get-coordinates`

**Description**: Get the coordinates for a given address.

**Query Parameters**:
- `address` (string, required): The address to get coordinates for. Must be at least 3 characters long.

**Responses**:
- **200 OK**
  - Description: Coordinates successfully retrieved.
  - Body: JSON object containing the latitude and longitude.
  - Example:
    ```json
    {
      "latitude": 37.7749,
      "longitude": -122.4194
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
          "msg": "Invalid address",
          "param": "address",
          "location": "query"
        }
      ]
    }
    ```
- **404 Not Found**
  - Description: Coordinates not found.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "error": "coordinate not found"
    }
    ```

#### GET `/maps/get-distance-time`

**Description**: Get the distance and time between two locations.

**Query Parameters**:
- `origin` (string, required): The origin location. Must be at least 3 characters long.
- `destination` (string, required): The destination location. Must be at least 3 characters long.

**Responses**:
- **200 OK**
  - Description: Distance and time successfully retrieved.
  - Body: JSON object containing the distance and time.
  - Example:
    ```json
    {
      "distance": {
        "text": "5.3 km",
        "value": 5300
      },
      "duration": {
        "text": "15 mins",
        "value": 900
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
          "msg": "Invalid origin",
          "param": "origin",
          "location": "query"
        },
        {
          "msg": "Invalid destination",
          "param": "destination",
          "location": "query"
        }
      ]
    }
    ```
- **404 Not Found**
  - Description: Distance and time not found.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "error": "distance and time not found"
    }
    ```

#### GET `/maps/get-suggestions`

**Description**: Get autocomplete suggestions for a given input.

**Query Parameters**:
- `input` (string, required): The input to get suggestions for. Must be at least 3 characters long.

**Responses**:
- **200 OK**
  - Description: Suggestions successfully retrieved.
  - Body: JSON object containing the suggestions.
  - Example:
    ```json
    [
      {
        "description": "San Francisco, CA, USA",
        "place_id": "ChIJIQBpAG2ahYAR_6128GcTUEo"
      },
      {
        "description": "San Jose, CA, USA",
        "place_id": "ChIJ9T_5iuTKj4ARe3GfygqMnbk"
      }
    ]
    ```
- **400 Bad Request**
  - Description: Validation errors or missing required fields.
  - Body: JSON object containing the validation errors.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid input",
          "param": "input",
          "location": "query"
        }
      ]
    }
    ```
- **500 Internal Server Error**
  - Description: Server error.
  - Body: JSON object containing the error message.
  - Example:
    ```json
    {
      "error": "internal server error"
    }
    ```