const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'asdfghjkl'
});

try{
    connection.query("SHOW TABLES", (err, result) => {
    if (err) throw err;
    console.log(result);
});
}catch(err){
    console.log(err);
}

let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.helpers.slugify(faker.person.firstName() + '-' + faker.person.lastName()),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
  };
};

console.log(createRandomUser());
