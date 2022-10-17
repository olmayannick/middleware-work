require("dotenv/config");
const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

const middlewarePost = function (req, res, next) {
  console.log("post isteği için istek gönderildi.");
  next();
};

const middleware = function (req, res, next) {
  console.log("yeni bir istek geldi.");
  next();
};

app.use(middleware);

app.get("/hello", function (req, res) {
  res.send("merhaba GET isteği attınız.");
});
app.post("/hello",middlewarePost, function (req, res) {
  res.send("merhaba POST isteği attınız.");
});

app.put("/hello", function (req, res) {
  res.send("merhaba PUT isteği attınız.");
});

app.delete("/hello", function (req, res) {
  res.send("merhaba DELETE isteği attınız.");
});


app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
