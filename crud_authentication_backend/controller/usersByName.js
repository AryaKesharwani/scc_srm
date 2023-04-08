const fs =require('fs')
module.exports=(req,res)=>{
    const existingData = fs.readFileSync('./data/users.json', 'utf8');
    const users = JSON.parse(existingData);

    const sortedUsers = users
    .map(user => ({ id: user.id, name: user.name, email: user.email, creationTimeStamp: user.creationTimeStamp }))
    .sort((a, b) => a.name.localeCompare(b.name));

  res.json(sortedUsers);
}