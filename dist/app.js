"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const typeorm_1 = require("typeorm");
const api_1 = require("./routes/api");
// create app db connection.
typeorm_1.createConnection().then(() => {
    console.log("Database Connection Established...");
}).catch(() => {
    console.log("Oops! An error occured while connecting to the database.");
});
// create a new express application instance
const app = express_1.default();
// the port the express app will listen on
const port = process.env.PORT || 8001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/excel", api_1.excelApiRoutes.router);
app.get("/excel", (req, res) => {
    res.status(200).send("Welcome to Excel-TS");
});
// serve the application at the given port
app.listen(port, () => {
    // success callback
    console.log(`Listening at http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map