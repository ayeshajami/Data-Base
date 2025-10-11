const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

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

app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    connection.query(q, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database error");
        }
        const count = result[0]['count(*)'];
        res.send(`Total users: ${count}`);
    });
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
