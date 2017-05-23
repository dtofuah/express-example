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
	});
}

app.get("/country/:code", function(req, res) {
	console.log("Serving up country page");
	const country = countries[req.params.code];


	if (!country) {
		res.status(404);
		return res.send("This is an incorrect Country code");
	}

	res.render("page/country", { country: country });
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
