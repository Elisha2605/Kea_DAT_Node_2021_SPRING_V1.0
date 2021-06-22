const Mongoclient = require("mongodb").MongoClient;
const url = "mongodb://locolhost:27017";
const dbName = "movies";

Mongoclient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw new Error(error);
    }

    const db = client.db(dbName);
    const actors = db.collection("actors");
    actors.insertOne({ name: "Elisha Ngoma", age: 29, id: 4 }, (error, result) => {
        if (error) {
            throw new Error(error);
        }
        console.log(result);
        client.close();
    });


});