let express = require("express");

let app = express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});


app.post("/api/reservations", function(req, res) {
   var newReservation = req.body;

   newReservation.routeName = newReservation.name.place()

   console.log(newReservation);
})