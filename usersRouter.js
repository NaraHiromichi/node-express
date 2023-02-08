const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get Method inside usersRouter");
})
router.get('/about', (req, res) => {
  res.send("Get Method inside usersRouter/about");
})
// .post("/", (req, res) => {
//   res.send("POST Method inside usersRouter");
// })
// .put("/", (req, res) => {
//   res.send("PUT Method inside usersRouter");
// })s
// .delete("/", (req, res) => {
//   res.send("DELETE Method");
// }
// );

module.exports = router;
