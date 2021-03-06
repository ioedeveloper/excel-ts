// importing libraries and dependencies
import express from "express";
import {Request, Response } from "express";
import bodyParser = require("body-parser");
import {createConnection} from "typeorm";

import {excelApiRoutes} from "./routes/api";

// create app db connection.
createConnection().then(() => {
  console.log("Database Connection Established...");
}).catch(()=>{
    console.log("Oops! An error occured while connecting to the database.");
});

// create a new express application instance
const app: express.Application = express();

// the port the express app will listen on
const port:any = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/excel", excelApiRoutes.router);

app.get("/excel", (req:Request, res:Response) =>{
    res.status(200).send("Welcome to Excel-TS");
});
// serve the application at the given port
app.listen(port, () => {
    // success callback
    console.log(`Listening at http://localhost:${port}/`);
});