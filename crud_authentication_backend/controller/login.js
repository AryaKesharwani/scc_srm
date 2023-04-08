require('dotenv').config()
const jwt = require("jsonwebtoken"); 
// Secret key used for signing the token
const secretKey = process.env.JWT_SECRET;
const fs =require('fs')

module.exports = (req, res) => {

  const existingData = fs.readFileSync('./data/users.json', 'utf8');
  const users = JSON.parse(existingData);

  const { email, password } = req.body;

  // Find the user with the matching email and password
  const user = users.find((u) => u.email === email && u.password === password);

  // If no user is found, return a 401 Unauthorized error
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // If the user is found, generate a token with their user ID
  const token = jwt.sign({ id: user.id }, secretKey);

  // Return the token as the response
  res.json({ token });
};
