const fs =require('fs')
const { faker } =require('@faker-js/faker');
const existingData = fs.readFileSync('./data/users.json', 'utf8');
const existingJson = JSON.parse(existingData);
function createRandomUser() {
  const user = {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    creationTimeStamp: Date.now()
  };

  return user;
}
const user = createRandomUser();
existingJson.push(user);
const newJson = JSON.stringify(existingJson);
fs.writeFileSync('./data/users.json', newJson, 'utf8');