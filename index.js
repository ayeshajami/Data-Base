const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'asdfghjkl'
});

let q="INSERT INTO user (id, username, email,password)VALUES(?,?,?,?)";
let user=["123","123_newuser","abc@gmail.com","abs"];
try{
    connection.query(q, user,(err, result) => {
    if (err) throw err;
    console.log(result);
});
}catch(err){
    console.log(err);
}

connection.end();

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
