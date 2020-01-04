<<<<<<< HEAD
let express = require("express");
=======
const express = require("express");
const path = require("path");
>>>>>>> 9a181516108d2d46c29813a11a14289a570600f6


let app = express();
let PORT = 3000;

<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});
let Reservations = [
   {
     routeName: "",
     name: "",
   },
   {
     routeName: "",
     name: "",
   },
   {
     routeName: "",
     name: "",
     
   }
 ];
app.post("/api/Reservations", function(req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   // This works because of our body parsing middleware
   var newReservations = req.body;
 
   // Using a RegEx Pattern to remove spaces from newCharacter
   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   newReservations.routeName = newReservation.name.place(/\s+/g, "").toLowerCase();
 
   console.log(newReservations);
 
   characters.push(newReservations);
 
   res.json(newReservations);
 });
=======
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
})
>>>>>>> 9a181516108d2d46c29813a11a14289a570600f6
