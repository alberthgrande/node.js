const express = require("express");
const mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mydb",
});

const app = express();

app.listen("3000", () => {
  console.log("Server is running on port 3000");
});
// connect database
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

// create database
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE IF NOT EXISTS mydb";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created or already exists!");
  });
});

// create table
app.get("/createCustomersTable", (req, res) => {
  let sql =
    "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database customers table is created!");
  });
});

// insert table
app.get("/insertCustomers", (req, res) => {
  let sql = "INSERT INTO customers (name, address) VALUES ?";
  let customersValues = [
    ["John", "Highway 71"],
    ["Peter", "Lowstreet 4"],
    ["Amy", "Apple st 652"],
    ["Hannah", "Mountain 21"],
    ["Michael", "Valley 345"],
    ["Sandy", "Ocean blvd 2"],
    ["Betty", "Green Grass 1"],
    ["Richard", "Sky st 331"],
    ["Susan", "One way 98"],
    ["Vicky", "Yellow Garden 2"],
    ["Ben", "Park Lane 38"],
    ["William", "Central st 954"],
    ["Chuck", "Main Road 989"],
    ["Viola", "Sideway 1633"],
  ];
  con.query(sql, [customersValues], (err, result) => {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    res.send("Cutomers inserted successfully!");
  });
});

// select all table
app.get("/selectAllCutomers", (req, res) => {
  let sql = "SELECT * from customers";
  con.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send("Select all cutomers");
  });
});

// selected row
app.get("/selectedCutomers/:id", (req, res) => {
  let sql = `SELECT * from customers WHERE id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Selected cutomers");
  });
});

// select all fields
app.get("/selectedCutomersFields", (req, res) => {
  let sql = `SELECT * from customers`;
  con.query(sql, (err, result, fields) => {
    if (err) throw err;
    console.log(fields[0].type);
    res.send("Selected cutomers");
  });
});