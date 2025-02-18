const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = 8000;

const uri = "mongodb://127.0.0.1:27017"; // Use environment variables for security
const client = new MongoClient(uri);

app.use(express.json());

app.post("/api/todolist", async (req, res) => {
	console.log(req.query)
  async function run() {
    try {
      await client.connect();
      const dbo = client.db("mydb");
	    console.log("connected to db");
      const query = {};
      const options = {
        sort: { todoNumber: req.query.todoNumber },
        projection: { todoNumber: req.query.todoNumber, todoText:req.query.todoText },
      };

      const cursor = dbo.collection("todo").find(query, options);
      if ((await cursor.count()) === 0) {
        console.log("No documents found!");
        return res.send([]);
      }

      // Convert the cursor result to an array and send response
      const response = await cursor.toArray();
      res.send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving todo list");
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
