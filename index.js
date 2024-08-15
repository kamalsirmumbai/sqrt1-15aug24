const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/compute", (req, res) => {
	let num  =req.query.number;
	let n = parseFloat(num);
	let r = n ** 0.5;
	let a = "square root = " + r;
	let log = "request for " + n + "-->" + new Date().toString() + "\n";
	fs.appendFile("result.txt", log, (err) => {
		if (err)
			console.log(err);
	});
	res.json({"msg":a});
});

app.listen(9001, () => { console.log("ready @ 9001"); } );




