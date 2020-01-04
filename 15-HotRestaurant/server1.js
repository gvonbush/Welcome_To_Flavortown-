const express = require("express");
const path = require("path");

let app = express();
let PORT = 3000;

let reservations = [];
let waitList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES FOR OUR PAGES
app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
   res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
   res.sendFile(path.join(__dirname, "tables.html"));
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   // This works because of our body parsing middleware
   let newReservation = req.body;

   console.log(newReservation);

   reservations.push(newReservation);

   res.json(newReservation);
});

// FIRING UP THE SERVER
app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});


app.post("/api/reservations", function(req, res) {
   var newReservation = req.body;

   newReservation.routeName = newReservation.name.place()

   console.log(newReservation);

   reservations.push(newReservations);

   res.json(newReservations);
});