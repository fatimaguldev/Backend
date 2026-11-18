const express = require("express");
const app = express(); //this app will help us to create server side application

console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request received!")
//     res.send("this is a basic response! and 1st one from express");
// });


app.get("/", (req, res) => {
    res.send("Hello! I am root")
});

app.get("/Apple", (req, res) => {
  res.send("you contacted Apple path");
});

app.get("/Orange", (req, res) => {
  res.send("you contacted Orange path");
});

app.get("*splat", (req, res) => {
    res.send("page not found")
}); //opar waly sary paths

app.post("/", (req, res) => {
  res.send("you send a post request to root!");
});

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no result")
});
