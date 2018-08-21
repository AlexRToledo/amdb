const mongo = require('mongodb');
const traverse = require('traverse');

class MongoUtils {
    constructor() {}


    async convertToBSONPrimitiveField(field) {
        try {
            if (field == null) {
                return null;
            }
            if (field.$oid !== undefined) {
                if (field.$oid == null) {
                    console.log('asdasd');
                }
                return await mongo.ObjectID(field.$oid);
            }
            else if (field.$date !== undefined) {
                return await new Date(field.$date);
            }
            else if (field.$binary !== undefined) {
                var buffer = new
                Buffer(field.$binary, 'base64');
                return await mongo.Binary(buffer);
            }
            else if (field.$numberLong !== undefined) {
                return await mongo.Long(field.$numberLong);
            }

            return null;
        } catch (e) {
            console.log(e)
        }
    }

    async createMongoDbObject(obj) {
        try {
            const self = this;
            traverse(obj).forEach(async (x) => {
                try {
                    if (typeof x === 'object') {
                        let result = await self.convertToBSONPrimitiveField(x);
                        if (result) {
                            await self.update(result, true);
                        }
                    }
                } catch (e) {
                    console.log(e)
                }
            });
            return obj;
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = MongoUtils;