import express from "express";
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require("path");
app.use("/build", express.static(path.join(__dirname, "../../build")));
app.use("/static", express.static(path.join(__dirname, "../../static")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../../static/index.html"))
);
