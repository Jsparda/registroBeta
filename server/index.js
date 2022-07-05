const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "lt.holt.",
  database: "reg-beta"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM Usuarios";
  db.query(sqlGet, (error, result) => {
    if(error){
      console.log("Error:", error)
    }
    else {
      console.log("Result:", result);
    }
    res.send("It is done!");
  })
})

app.get("/", (req, res) => {
  // const sqlInstert = "INSERT INTO Admins (user, passw) VALUES ('admin', 'admin')";
  // db.query(sqlInstert, (err, result) => {
  //   console.log("Error", err),
  //   console.log("Result", result);
  // })
    res.send("Message from express!!");
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})