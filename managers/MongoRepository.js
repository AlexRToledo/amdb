const mongo = require("mongodb").MongoClient;
const mongo_url = global.config.mongoUrl;
const db_name = global.config.db.name;
const bson = require('bson');

class MongoRepository {
    constructor() {}

    async Load() {
        try {
            const conn = await mongo.connect(mongo_url);
            return conn.db(db_name);
        } catch (e) {
            console.log(e);
        }
    }

    async GetAllCollections() {
        try {
            let db = await this.Load();
            return await db.listCollections().toArray();
        } catch (e) {
            
        }
    }

    async CreateCollection(name) {
        try {
            let db = await this.Load();
            return await db.createCollection(name);
        } catch (e) {
            
        }
    }

    async DropCollection(name) {
        try {
            let db = await this.Load();
            return await db.collection(name).drop();
        } catch (e) {
            
        }
    }

    async ClearCollection(name) {
        try {
            let db = await this.Load();
            return await db.collection(name).remove({});
        } catch (e) {
            
        }
    }

    async RenameCollection(name, newname) {
        try {
            let db = await this.Load();
            return await db.collection(name).rename(newname);
        } catch (e) {
            
        }
    }

    async GetAllDocumentsByCollection(name) {
        try {
            let db = await this.Load();
            return await db.collection(name).find().toArray();
        } catch (e) {
            
        }
    }

    async GetDocumentById(document, id) {
        try {
            let db = await this.Load();
            return await db.collection(document).find({_id: bson.ObjectId(id)}).toArray();
        } catch (e) {
            
        }
    }

    async CreateDocument(name, document) {
        try {
            let db = await this.Load();
            return await db.collection(name).insert(document);
        } catch (e) {
            
        }
    }

    async UpdateDocument(name, document_id, document) {
        try {
            let db = await this.Load();
            return await db.collection(name).updateOne({_id: bson.ObjectId(document_id)}, {$set: document});
        } catch (e) {
            
        }
    }

    async RemoveDocument(name, document_id) {
        try {
            let db = await this.Load();
            return await db.collection(name).remove({"_id": bson.ObjectId(document_id)});
        } catch (e) {
            
        }
    }
}

module.exports = MongoRepository;