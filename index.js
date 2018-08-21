const express = require('express'),
      config = require('./config');
const MainController = require("./controllers/MainController");
const MongoController = require("./controllers/MongoController");
const ImportExportController = require("./controllers/ImportExportController");

module.exports = (app) => {
    app.use(config.path, express.static(__dirname + config.assets_path));
    new MainController(app).Router();
    new MongoController(app).Router();
    new ImportExportController(app).Router();
};