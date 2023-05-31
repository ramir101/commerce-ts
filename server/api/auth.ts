import { prisma } from "../db";

import express = require("express");
const app = express.Router();

app.get("/", async (req, res, next) => {
  try {
    res.send(await prisma.user.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

app.post("/", async (req, res, next) => {
  try {
    res.send(await prisma.user.authenticate(req.body));
  } catch (ex) {
    next(ex);
  }
});

export = app;
