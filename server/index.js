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
    res.send(result);
  })
})

app.post("/api/post", (req, res) => {
  const { nombre, aPaterno, contacto, resenia } = req.body;
  const sqlInsert = "INSERT INTO Usuarios (nombre, aPaterno, contacto, resenia) VALUES (?, ?, ?, ?)"
  db.query(sqlInsert, [nombre, aPaterno, contacto, resenia], (err, result) => {
    if(err){
      console.log(err);
      res.status(400).send('Bad Request')
    }
    else {
      console.log(result);
      res.status(200).send('OK')
    }
  })
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM Usuarios WHERE id=?"
  db.query(sqlRemove, id, (err, result) => {
    if(err){
      console.log(err);
      res.status(400).send('Bad Request')
    }
    else {
      console.log(result);
      res.status(200).send('OK')
    }
  })
});

app.get("/", (req, res) => {
  // const sqlInstert = "INSERT INTO Usuarios (nombre, aPaterno, aMaterno, contacto, resenia) VALUES ('Guillermo', 'González', 'Junior', 'memo@correo.com', 'Quiero sandwiches de dos pesos again!!')";
  // db.query(sqlInstert, (err, result) => {
  //   console.log("Error", err),
  //   console.log("Result", result);
  // })
  //   res.send("It is done!!");
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})