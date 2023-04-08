require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// Import necessary middleware and modules for request validation
const { check } = require("express-validator");

// Set up body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/healthcheck", require("./controller/healthcheck"));

// Define the route handler for POST requests to "/api/signup"
app.post(
  "/api/signup",
  [
    // Use express-validator to validate the incoming request body
    check("name").notEmpty(),
    check("email").isEmail(),
    check("password").notEmpty(),
  ],
  require("./controller/signup")
);

// Define the endpoint for retrieving users created in the last specified hours
app.get('/api/users/:hours', require('./controller/usersFilterByHour'));

// Login endpoint
app.post("/api/login", require("./controller/login"));


app.get('/api/users',require('./controller/usersByName'))

// Define the endpoint for retrieving a specific user by its ID
app.get('/api/user/:id', require('./controller/userByID'))


app.delete('/api/user/:id',require('./controller/deleteUserByID'));


app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
