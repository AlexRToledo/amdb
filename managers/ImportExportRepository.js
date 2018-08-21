const mongo = require("mongodb").MongoClient;
const mongo_url = global.config.mongoUrl;
const db_name = global.config.db.name;
const MongoUtils = require('../utils/MongoUtils');
const mongoUtils = new MongoUtils();
const errors = [];

class ImportExportRepository {
    constructor() {}

    async Load() {
        const conn = await mongo.connect(mongo_url);
        return conn.db(db_name);
    }

    async Import(data) {
        try {
            let db = await this.Load();

            for (let collection in data) {
                if (data.hasOwnProperty(collection)) {
                    // do stuff
                    await db.createCollection(collection);
                    for (let document of data[collection]) {
                        for (let field in document) {
                            /*
                        * Verify if is object, if not parse for mongo form.
                        * */
                            if(typeof document[field] === "object") {
                                let BJson = mongoUtils.convertToBSONPrimitiveField(document[field]);

                                if (BJson) {
                                    document[field] = BJson;
                                }
                                else {
                                    document[field] = mongoUtils.createMongoDbObject(document[field], document[field]);
                                }
                            }
                        }
                        await db.collection(collection).insert(document);
                    }
                }
            }

            return {error: false, data: errors, message: "Data imported successful."};
        } catch (e) {
            if(e.code = 11000) {
                return {error: true, data: null, message: "Error: Duplicate documents."};
            }
            return {error: true, data: null, message: "Error: Internal server error."};
        }
    }

    async Export(data) {
        try {
            let db = await this.Load();

            let response = {};

            for (let collection in data) {
                let documents = await db.collection(data[collection]).find().toArray();

                response[data[collection]] = documents;
            }

            return {error: false, data: response, message: "Data imported successful."};

        } catch (e) {
            return {error: true, data: null, message: "Error: Internal server error."};
        }
    }
}

module.exports = ImportExportRepository;