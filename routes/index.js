import AppController from "./controllers/AppController";

const express = require("express");

const route = (app) => {
  const paths = express.route();
  app.use(express.json());
  app.use("/", paths);

  paths.get("/status", (request, response) =>
    AppController.getStatus(request, response)
  );
  paths.get("/stats", (request, response) =>
    AppController.getStats(request, response)
  );
};

module.exports = route;
