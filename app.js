const express = require("express");
const app = express();
const countries = require("./json/countries.json");
console.log(countries);

app.set("view engine", "ejs");

app.use(express.static("assets"));


function changeTemplate(res, pages, pageStuf) {
	return res.render("template", {
		pages: pages,
		pageStuf: pageStuf,
		header: "Donald Tofuah",
	});
}

app.get("/country", function(req, res) {
	console.log("Serving up country page");
	var country = countries[req.params.code];
	console.log(countries);

	if (!country) {
		res.status(404);
		return res.send("This code is not recognized");
	}

	res.render("page/country", "Contry", country);
});

app.get("/gallary", function(req, res) {
	console.log("Seriving up Gallary Page....");
	changeTemplate(res, "gallary");
});

app.get("/", function(req, res) {
	console.log("Seriving up Homepage....");
	changeTemplate(res, "index");
});


app.listen(3000, function() {
	console.log("Your server is available at localhoot:3000!");
});
