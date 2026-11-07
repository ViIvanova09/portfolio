import express from "express";
import { DatabaseSync } from "node:sqlite";

const database = new DatabaseSync("server/portfolio.db");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello from express");
});
app.get("/profile", (request, response) => {
  const getProfile = database.prepare(`
  SELECT * FROM profile WHERE id = ?
`);
  const profile = getProfile.get(1);
  response.json(profile);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log("express server is running");
});
