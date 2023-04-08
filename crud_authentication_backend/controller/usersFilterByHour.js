const fs = require("fs");
module.exports = (req, res) => {
  const hours = parseInt(req.params.hours);
  const fileContents = fs.readFileSync("./data/users.json", "utf8");

  const userData = JSON.parse(fileContents);

  const currentTime = new Date();
  const cutoffTime = new Date(currentTime - hours * 60 * 60 * 1000);
  const filteredUserData = userData.filter((user) => {
    const userCreateTime = new Date(user.creationTimeStamp);
    // console.log(userCreateTime, cutoffTime, (userCreateTime >= cutoffTime));
    return userCreateTime >= cutoffTime;
  });

  // Return the filtered user data as the response
  res.json(filteredUserData);
};
