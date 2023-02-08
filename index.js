const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./usersRouter");

app.use(express.static("public"));
app.use("/users", userRouter);
app.route("/avatar").get((req, res) => res.sendFile(`${__dirname}/video.mp4`));
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
