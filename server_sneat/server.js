const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.pluralize(null);

const app = express();
const PORT = 8000;

app.use(cors());

////mongodb://127.0.0.1:27017
mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "sneat",
  })
  .then(() => {
    console.log("connected MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB conncection Error", err);
  });

//format of table

let mySchema = new mongoose.Schema({});

//collection name in db  barcharts
let myModel = mongoose.model("barCharts", mySchema);

app.get("/", (req, res) => {
  res.send("<h1>home</h1>");
});

app.get("/barChart", (req, res) => {
  myModel
    .find()
    .then((data) => {
      res.json(data);
      console.log("barChart data find in mongo");
    })
    .catch((err) => {
      console.log("data not connected", err);
    });
});

//linecharts
let myModel2 = mongoose.model("linechartSimple", mySchema);

app.get("/linechartSimple", (req, res) => {
  myModel2
    .find()
    .then((data) => {
      res.json(data);
      console.log("linechart data find in mongo");
    })
    .catch((err) => {
      console.log("data not connected", err);
    });
});

//stackBar
let myModel3 = mongoose.model("StackBar", mySchema);

app.get("/StackBar", (req, res) => {
  myModel3
    .find()
    .then((data) => {
      res.json(data);
      console.log("StackBar data find in mongo");
    })
    .catch((err) => {
      console.log("data not connected", err);
    });
});

//waterfall
let myModel4 = mongoose.model("Waterfalldata", mySchema);

app.get("/Waterfalldata", (req, res) => {
  myModel4
    .find()
    .then((data) => {
      res.json(data);
      console.log("Waterfalldata data find in mongo");
    })
    .catch((err) => {
      console.log("data not connected", err);
    });
});

//lineChart2
let myModel5 = mongoose.model("PieChart", mySchema);

app.get("/PieChart", (req, res) => {
  myModel5
    .find()
    .then((data) => {
      res.json(data);
      console.log("PieChart data find in mongo");
    })
    .catch((err) => {
      console.log("data not connected", err);
    });
});

//Ratingline
let myModel6 = mongoose.model("RatingLine", mySchema);

app.get("/RatingLine", (req, res) => {
  myModel6
    .find()
    .then((data) => {
      res.json(data);
      console.log("RatingLine data find in mongo");
    })
    .catch((err) => {
      console.log("data not connected", err);
    });
});

//doughnut data
let myModel7 = mongoose.model("Doughdata", mySchema);

app.get("/Doughdata", (req, res) => {
  myModel7
    .find()
    .then((data) => {
      res.json(data);
      console.log("Doughdata data find in mongo");
    })
    .catch((err) => {
      console.log("data not connected", err);
    });
});

//Hboxplot
let myModel8 = mongoose.model("Hboxplot", mySchema);

app.get("/Hboxplot", (req, res) => {
  myModel8
    .find()
    .then((data) => {
      res.json(data);
      console.log("Hboxplot data find in mongo");
    })
    .catch((err) => {
      console.log("data not connected", err);
    });
});
app.listen(PORT, () => {
  console.log(`server running at http://127.0.0.1:${PORT}`);
});
