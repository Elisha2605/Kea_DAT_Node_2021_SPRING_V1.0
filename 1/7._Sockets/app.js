const express = require("express");
const app = express();



const server = require("https").createServer(app);














server.listen(8080, (error) => {
    if (error) {
        console.log(error);
        console.log("Server running on port", 8080);
    }
});
