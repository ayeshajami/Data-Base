const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'asdfghjkl'
});

let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.helpers.slugify(faker.person.firstName() + '-' + faker.person.lastName()),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
  };  
};


let q="INSERT INTO user (id, username, email,password)VALUES(?,?,?,?)";

let data=[];
for(let i = 0; i < 100; i++){
    let user = createRandomUser();
    console.log(user);
}

// let users=[
//     ["123","123_newuser","abc@gmail.com","abs"],
//     ["124","124_newuser","abcde@gmail.com","abcd"],
// ];
// try{
//     connection.query(q, [users],(err, result) => {
//     if (err) throw err;
//     console.log(result);
// });
// }catch(err){
//     console.log(err);
// }

// connection.end();



