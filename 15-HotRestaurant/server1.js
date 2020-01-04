let express = require("express");

let app = express();
let PORT = 3000;

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
