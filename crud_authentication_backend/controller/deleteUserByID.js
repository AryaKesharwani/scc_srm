const fs = require("fs");
module.exports = (req, res) => {
  const userId = req.params.id;
  let data = fs.readFileSync("./data/users.json", "utf8");
  let dataArray = JSON.parse(data);
  const indexToDelete = dataArray.findIndex((doc) => doc.id === userId);
  if (indexToDelete >= 0) {
    // Remove the document at the identified index
    dataArray.splice(indexToDelete, 1);

    // Write the updated array back to the file
    fs.writeFileSync("./data/users.json", JSON.stringify(dataArray, null, 2));
    res
      .status(200)
      .json({ message: `Document with ID ${userId} has been deleted.` });
    console.log();
  } else {
    console.log(`Document with ID ${userId} not found.`);
  }

  res.status(204).send();
};
