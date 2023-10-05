// Node.js Backend (index.js)

const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql2.createConnection({
  user: "root",
  host: "localhost",
  password: "Varma@1959",
  database: "logindb",
});



app.post('/api/register', (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;


  con.query("INSERT INTO register (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
    (err, result) => {
      if (err) {
        res.send({ message: "Error occurred during registration." });
      } else {
        res.send({ message: "Account Created Successfully" });
      }
    }
  );
});

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  con.query("SELECT * FROM register WHERE username = ? AND password = ?", [username, password], 
    (err, result) => {
      if (err) {
        res.send({ message: "Error occurred during login." });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Wrong Username or Password" });
        }
      }
    }
  );
});


app.get('/api/register', (req, res) => {
  
  con.query('SELECT * FROM register', (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error occurred while fetching data.' });
    } else {
      // If data is fetched successfully, send it to the frontend
      res.status(200).send(result);
    }
  });
});





app.listen(3001, () => {
  console.log("Running backend server on port 3001");
});





// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors());

// const con = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "",
//     database: "logindb"
// })



// app.post('/api/register', (req, res) => {
//     const email = req.body.email;
//     const username = req.body.username;
//     const password = req.body.password;

//     con.query("INSERT INTO register  (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
//         (err, result) => {
//             if(result){
//                 res.send(result);
//             }else{
//                 res.send({message: "ENTER CORRECT ASKED DETAILS!"})
//             }
//         }
//     )
// })

// app.post("/api/login", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     con.query("SELECT * FROM login WHERE username = ? AND password = ?", [username, password], 
//         (err, result) => {
//             if(err){
//                 req.setEncoding({err: err});
//             }else{
//                 if(result.length > 0){
//                     res.send(result);
//                 }else{
//                     res.send({message: "WRONG USERNAME OR PASSWORD!"})
//                 }
//             }
//         }
//     )
// })



// app.listen(3001, () => {
//     console.log("running backend server");
// })
