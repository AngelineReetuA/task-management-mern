const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config()
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const uri = process.env.MONGODB_URL;

app.post("/create-proj", async (req, res) => {
  const info = req.body;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  console.log(info);
  try {
    const database = client.db("proj-mgmt");
    const data = database.collection("projects");
    const result = await data.insertOne(info);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    res.status(200).json({ message: "Project created successfully." });
  } catch (error) {
    console.log("Error in creating project:", error);
    res.status(400).json({ message: "Error" });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`TSM listening on port ${port}`);
});
