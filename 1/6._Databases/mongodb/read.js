const Mongoclient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "movies";

Mongoclient.connect(url, { userUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw error;
    }

    const db = client.db(dbName);
    const actors = db.collection("actors");

    actors.find({ name: "Kevin Hart" }).toArray((error, data) => {
        console.log(data);
    });
});