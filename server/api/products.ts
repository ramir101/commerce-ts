import { prisma } from "../db";

import express = require("express");
const app = express.Router();

app.get("/", async (req, res, next) => {
  try {
    const response = await prisma.product.findMany();
    res.send(response);
  } catch (ex) {
    next(ex);
  }
});

export = app;
