const { faker } = require('@faker-js/faker');

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),   // ✅ fixed
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
  };
}

console.log(createRandomUser());
