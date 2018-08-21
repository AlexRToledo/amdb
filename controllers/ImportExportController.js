const config = require('../config');
const ImportExportRepository = require('../managers/ImportExportRepository');
const Manager = new ImportExportRepository();
const JsonResponse = require('../utils/ResponseJson');
const Json = new JsonResponse();

class ImportExportController {
    constructor(app) {
        this.app = app;
        this.path = config.path;
    }

    Router(){
        this.app.post(`${this.path}/import`,                this.Import);
        this.app.post(`${this.path}/export`,                 this.Export);
    }

    async Import(req, res) {
        try {
            let data = JSON.parse(req.body.data);
            let response = await Manager.Import(data);
            res.json(await Json.Json(response.data, response.message));
        } catch (e) {
            console.log(e);
        }
    }

    async Export(req, res) {
        try {
            let data = req.body.data;
            let response = await Manager.Export(data);
            res.json(await Json.Json(response.data, response.message));
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = ImportExportController;