const fs =require('fs')
module.exports = (req, res) => {
  const id = req.params.id;

  // Load the contents of the JSON file
  const fileContents = fs.readFileSync("./data/users.json", "utf8");

  // Parse the JSON data into a JavaScript object
  const userData = JSON.parse(fileContents);

  // Find the user with the specified ID
  const user = userData.find((u) => u.id === id);

  // Return the selected user as the response
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};
