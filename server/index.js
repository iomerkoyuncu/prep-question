const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "userdb"
});

app.post("/create", (req,res) => {
    
    const userId = req.body.userId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const gsm = req.body.gsm;

    db.query
    (
        "INSERT INTO user (userId,firstName,lastName,email,gsm) VALUES (?,?,?,?,?)",

        [userId,firstName,lastName,email,gsm], 
         
        (err,result) => {
             if(err)
             {
                 console.log(err);
             }
             else
             {
                 console.log("Values inserted. . .");
             }
         }
    );
});

app.get("/users", (req,res) => {
    db.query("SELECT * FROM user", (err, result) => {
        if(err)
        {
            console.log(err);
        } else
        {
            res.send(result);
        }
    } )
})

app.listen(3001, () => {
    console.log("Server running on 3001. . .");
});