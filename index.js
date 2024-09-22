const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const path = require("path");
// Serve static files from the 'public' directory
app.use(express.static("public"));

app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());
