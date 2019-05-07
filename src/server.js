import express from "express";
import expressGraphQl from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import schema from "./graphql/";

const app = express();
const PORT = process.env.PORT || "4000";
const db = process.env.MONGODB_URL;

mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.log(error));

app.use(
    "/graphql/",
    cors(),
    bodyParser.json(),
    expressGraphQl({
        schema,
        graphiql: true
    })
);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));