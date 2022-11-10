const {MongoClient} = require('mongodb');
module.exports = {
    selectedDb: {},
    async connect(){
        try {
            const client = await MongoClient.connect("mongodb://localhost:27017");
            this.selectedDb = client.db('hall');          
        } catch(err) {
            console.error(err);
        }
    }
};