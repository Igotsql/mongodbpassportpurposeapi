const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = 3000;

const client = new MongoClient(process.env.MONGO_URI);

app.get("/", (req, res) => {
    res.send("Welcome to the Passport & Purpose API!");
});

app.get("/travelers", async (req, res) => {
    try {
        await client.connect();

        const database = client.db(process.env.DB_NAME);
        const travelers = database.collection("travelers");

        const results = await travelers.find({}).toArray();

        res.json(results);
    } catch (error) {
        res.status(500).json({
            message: "Error getting travelers",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});