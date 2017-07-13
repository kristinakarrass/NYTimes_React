//include server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//require Artilce Schema
var Article = require("./models/Artilce");

//create instance of Express
var app = express();
//set the initial prot
var PORT = process.env.PORT || 3000;

//run Morgan for logging 
app.use(logger("dev"));
//run body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//serving static files from public directory
app.use(express.static("public"));

//=====================================================================================
//MongoDB configuration
var MONGODB = process.env.MONGODB_URI || "mongodb://localhost/NTYimes_React";
mongoose.connect(MONGODB);
var db = mongoose.connection;

db.on("error", function(err) {
	console.log("Mongoose Error: ", err);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});

//=====================================================================================
//Routes
//Main route
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

//Find all saved articles
app.get("/api/saved", function(req, res) {
	//find all records of saved articles -- don't know if I want to limit to 5
	Artilce.find({}).sort([["date", "descending"]
		]).exec(function(err, doc) {
			if (err) {
				console.log(err);
			} else {
				er.send(doc);
			}
		});
});

//Post articles user chooses to database
app.post("/api/saved", function(req, res) {
	console.log("BODY: " + req.body);
	//we will save the articles title and url to the database and add the current date
	Article.create({
		title: req.body.title,
		articleURL: req.body.articleURL,
		date: Date.now()
	}, function(err) {
      if (err) {
      	console.log(err);
      } else {
      	res.send("Saved Article");
      }
	});
});

//======================================================================================
//Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})