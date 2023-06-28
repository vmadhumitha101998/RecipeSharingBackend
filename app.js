var mysql = require('mysql');
var con = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'RecSha'
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});


var express = require('express');
var app = express();
const morgan = require('morgan');
app.use(morgan('dev')); 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));//parses URL-encoded

app.get("/", function(req, res){
res.send("Test response from our web app");
});
app.set("view engine", "ejs");//template engine
var mysql = require('mysql');
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
//app.post("/register",function(req,res){
//console.log("POST request to /register" +"Std title: " +req.body.std_title);
//});
app.get("/hello", function(req, res) {
    const html =
    `<h1>Response is coming from hello route using GET method</h1>`;
    res.send(html);
    });

var q = "select * from recipes";
con.query(q,function(err, results, fields){
if (err) throw err;
console.log(results);
});

var q = "select * from recipes";
con.query(q, function(err, results, fields) {
if (err) throw err;
else {
//console.log(results);
results.forEach(function(element) {
console.log(element.Title + " " + element.Rating);
});
}
});

//Insert
var q = "insert into recipes(Title,ID,Instructions,Rating) values('Samosa',3,'Make a fine batter with basin and deep fry with potato stuff in oil',4.5),('Soup',4,'Heat water and add spices with tomato paste',4.9)";//multi rows insert
con.query(q, function(err, results, fields) {
if (err) throw err;
else
console.log("Inserted " + results.affectedRows + "row(s)");
});

//Update
var q = "update recipes set Rating=? where ID=?";
con.query(q, [3.43,1],function(err, results, fields) {
if (err) throw err;
console.log(results);
});

//Delete

//var q = "delete from recipes where ID=?";
//con.query(q, [2], function(err, results, fields) {
//if (err) throw err;
//console.log("Delete " + results.affectedRows + " row(s)"); // Success!
//});

//Searching for a recipe
let id = 1;
var q = "select * from recipes where ID=?";
con.query(q, [id], function(err, results, fields) {
if (err) throw err;
else {
if (results.length == 0) //search failed
console.log("No student found with ID: " + id);
else { //print searched student info
results.forEach(function(element) {
console.log(element.Title + " " + element.ID + " " + element.Rating + " " +
element.Type);
});
}
}
});


app.get("/test", function(req, res){
var teststring = "This is under /test route ";
res.send(teststring);
});
app.get("/db", function(req, res){
    var q = 'SELECT COUNT(*) as count FROM recipes';
    con.query(q, function (error, results) {
    if (error) throw error;
    var count = results[0].count;
    res.render("home",{data:count});
    });//query
    });//get

    app.post("/register", function(req, res) {
        var recipe_info = { Title: req.body.std_title, Rating: req.body.rate, Type:req.body.type }; //std info
        var q = "insert into recipes set ?";
        con.query(q, recipe_info, function(error, results) {
        if (error) throw error;
        res.redirect("/db"); //redirect to root page
        });
        });
    
        app.get("/display", function(req, res) {
            var q = "select * from recipes";
            con.query(q, function(error, results) {
            if (error) throw error;
            res.render("DisplayAll", { data: results });
            });
            });


        app.get("/search", function(req, res) {
        res.render("search");
        });

        app.post("/search", function(req, res) {
        var std_ID = req.body.std_ID;
        console.log("Searched Recipe ID:" +std_ID);
        var q = "select * from recipes where ID = ?";
        con.query(q, [std_ID], function(error, results) {
        if (error) throw error;
        else {
        if (results.length == 0) //search unsuccessful
        res.send("No recipe found with ID: " + std_ID);
        else //search successful 
        res.render("search_result", { data: results[0]});
        }
         });
        });

                            

app.listen(3000, function () {
console.log('App listening on port 3000!');
});
con.end();
