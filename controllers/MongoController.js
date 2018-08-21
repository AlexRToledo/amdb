const MongoRepository = require('../managers/MongoRepository');
const Manager = new MongoRepository();
const JsonResponse = require('../utils/ResponseJson');
const Json = new JsonResponse();

const config = require('../config');
const path = config.path;

class MongoController {
    constructor($app) {
        this.app = $app;
    }

    Router(){
        this.app.get(`${path}/collections`,                    this.GetAllCollections);
        this.app.post(`${path}/collections/create`,            this.CreateNewCollection);
        this.app.post(`${path}/collections/:doc/rename`,       this.RenameCollection);
        this.app.delete(`${path}/collections/:doc/remove`,     this.DeleteCollection);
        this.app.delete(`${path}/collections/:doc/clear`,      this.ClearCollection);

        this.app.get(`${path}/collection/:doc`,               this.GetAllDocumentsByCollection);
        this.app.get(`${path}/collection/:doc/:id`,           this.GetDocumentById);
        this.app.post(`${path}/collection/:doc/create`,       this.CreateNewDocument);
        this.app.put(`${path}/collection/:doc/:id`,           this.UpdateDocument);
        this.app.delete(`${path}/collection/:doc/:id`,        this.RemoveDocument);
    }

    async GetAllCollections(req, res) {
        try {
            let json = await Json.Json(await Manager.GetAllCollections());
            res.json(json);
        } catch (e) {
            console.log(e);
        }
    }

    async DeleteCollection(req, res) {
        try {
            let collection = req.params.doc;
            let json = await Json.Json(await Manager.DropCollection(collection), "Collection deleted.");
            res.json(json);
        } catch (e) {
            console.log(e);
        }
    }

    async GetAllDocumentsByCollection(req, res) {
        try {
            let document = req.params.doc;
            let json = await Json.Json(await Manager.GetAllDocumentsByCollection(document));
            res.json(json);
        } catch (e) {
            console.log(e);
        }
    }

    async RenameCollection(req, res) {
        try {
            let collection = req.params.doc;
            let name = req.body.name;
            await Manager.RenameCollection(collection, name);
            res.json(await Json.Json([], "Collection updated."));
        } catch (e) {
            console.log(e)
        }
    }

    async GetDocumentById(req, res) {
        try {
            let document = req.params.doc;
            let id = req.params.id;
            let json = await Json.Json(await Manager.GetDocumentById(document, id));
            res.json(json);
        } catch (e) {
            console.log(e);
        }
    }

    async RemoveDocument(req, res) {
        try {
            let document = req.params.doc;
            let id = req.params.id;
            let json = await Json.Json(await Manager.RemoveDocument(document, id), "Document removed.");
            res.json(json);
        } catch (e) {
            console.log(e);
        }
    }

    async CreateNewCollection(req, res) {
        try {
            let collection = req.body.name;
            await Manager.CreateCollection(collection);
            res.json(await Json.Json([], "New collection created."));
        } catch (e) {
          console.log(e)
        }
    }

    async CreateNewDocument(req, res) {
        try {
            let collection = req.params.doc;
            let document = JSON.parse(req.body.document);
            let json = await Json.Json(await Manager.CreateDocument(collection, document), "New document created.");
            res.json(json);
        } catch (e) {
            console.log(e);
        }
    }

    async UpdateDocument(req, res) {
        try {
            let collection = req.params.doc;
            let document_id = req.params.id;
            let document_new = JSON.parse(req.body.document);
            delete document_new._id;
            let json = await Json.Json(await Manager.UpdateDocument(collection, document_id, document_new), "Document updated.");
            res.json(json);
        } catch (e) {
            console.log(e);
        }
    }

    async ClearCollection(req, res) {
        try {
            let collection = req.params.doc;
            let json = await Json.Json(await Manager.ClearCollection(collection), "Collection cleared.");
            res.json(json);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = MongoController;