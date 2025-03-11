const express = require("express");const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = 8000;

const uri = "mongodb://127.0.0.1:27017"; // Use environment variables for security
const client = new MongoClient(uri);

app.use(express.json());

app.use("/api/todolist", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
 });


app.get("/api/todolist", async(req,res)=>{
  console.log("ran")
  try {
    await client.connect();
    const dbo = await client.db("mydb");
    const collection = dbo.collection("todolis");
    console.log("connected to db");

    const todos = await collection.find().toArray();  // Convert cursor to array

    res.send(200).send(todos)
  }catch(error){

    console.log(error)
    res.send(500).send("error finding list")
  } finally{
    await client.close();
  }
})

app.post("/api/todolist", async (req, res) => {
	console.log(req.query)
  async function run() {
    try {
      await client.connect();
      const dbo = await client.db("mydb");
      const collection = dbo.collection("todolis");
	    console.log("connected to db");

     // Insert the new todo item
    const newTodo = { todoNumber: parseInt(req.query.todoNumber), todoText:req.query.todoText };

    const result = await collection.insertOne(newTodo);
    console.log("added "+JSON.stringify(result))
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving todo list",{message:"v"});
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);const { MongoClient } = require("mongodb");
require("dotenv").config();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
