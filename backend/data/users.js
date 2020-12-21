const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jack Johson",
    email: "jack@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tina Smith",
    email: "tina@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
