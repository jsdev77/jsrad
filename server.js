

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
	console.log("Something is happening");
	next();
});


router.get("/", function(req, res) {
	res.json({message: "ok we are in business!"});
});


router.route("/bears")
		.post(function(req, res) {
			res.json({message:"bear created"});
		})
		.get(function(req, res) {
			res.json({message:"here are the bears"});
		});

router.route("/bears/:bear_id")
	.get(function(req, res) {
		res.json({message : "here is one bear " + req.params.bear_id});
	});
	
app.use('/api', router);

app.listen(port);
console.log("working...");

