const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

// app.use((req, res, next) => {
//   res.send("Hello from express!");
// });

app.use("/api/posts", (req, res, next) => {
  const posts = [{ id: 12343, title: "First", content: "Hello" }];
  //return data json format
  res.status(200).json({
    message: "This is a message",
    posts: posts
  });
});

module.exports = app;
