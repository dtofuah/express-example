const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("assets"));


app.get("/gallary", function(req, res) {
	console.log("Seriving up Homepage....");
	res.render("gallary", {
		header: "Donald Tofuah",
	});
});

app.get("/", function(req, res) {
	console.log("Seriving up Homepage....");
	res.render("index");
});


app.listen(3000, function() {
	console.log("Your server is available at localhoot:3000!");
});
