const express = require("express");
const router = express.Router();

const users = [
  { name: "user1", email: "user1@gmail.com", age: 24 },
  { name: "user2", email: "user2@gmail.com", age: 32 },
  { name: "user3", email: "user3@gmail.com", age: 17 },
];

router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;
