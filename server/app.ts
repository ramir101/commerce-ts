import express from "express";
import { prisma } from "./db";
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require("path");
app.use("/build", express.static(path.join(__dirname, "../../build")));
app.use("/static", express.static(path.join(__dirname, "../../static")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../../static/index.html"))
);

app.get("/users", async (req, res, next) => {
  try {
    const response = await prisma.user.findMany();
    res.send(response);
  } catch (ex) {
    next(ex);
  }
});

app.post("/api/auth", async (req, res, next) => {
  try {
    res.send(await prisma.user.authenticate(req.body));
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/auth", async (req, res, next) => {
  try {
    console.log(
      req.headers.authorization,
      "logging for find by token parameter"
    );
    res.send(await prisma.user.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
