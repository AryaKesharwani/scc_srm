const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { validationResult } = require("express-validator");
const path =require('path');

module.exports = (req, res) => {
  // Check for validation errors in the request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extract the user data from the request body
  const { name, email, password } = req.body;

  const newUser = {
    id: faker.datatype.uuid(),
    name,
    email,
    password,
    creationTimeStamp: Date.now(),
  };
  const existingData = fs.readFileSync(
    path.resolve("./data/users.json"),
    "utf8"
  );
  const existingJson = JSON.parse(existingData);
  existingJson.push(newUser);
  const newJson = JSON.stringify(existingJson);
  fs.writeFileSync("./data/users.json", newJson, "utf8");

  // Return a success response indicating that the account was created
  res.status(201).json({ message: "Account created successfully" });
};
