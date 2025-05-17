const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@durjoys-db.smvgnqx.mongodb.net/?retryWrites=true&w=majority&appName=Durjoys-DB`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coffeesCollection = client.db('coffeeDB').collection('coffees')
    const usersCollection = client.db('coffeeDB').collection('users')

    // Getting Data from The DB
    app.get('/coffees',async(req,res)=>{
        const cursor = coffeesCollection.find();
        const result = await cursor.toArray();
        res.send(result)
    });
    // Getting Specific Data from The DB
    app.get('/coffees/:id',async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result =await coffeesCollection.findOne(query);
        res.send(result)
    });

    // Posting data to the DB
    app.post('/coffees',async(req,res)=>{
        const newCoffee = req.body;
        console.log(newCoffee);
        const result = await coffeesCollection.insertOne(newCoffee)
        res.send(result)
    })


// Updating Data
    app.put('/coffees/:id',async (req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const options = {upsert:true};
        const updatedCoffee = req.body;
        const updatedDoc = {
            $set:updatedCoffee
        }
        const result = await coffeesCollection.updateOne(filter,updatedDoc,options);
        res.send(result)})

// Deleting Data
    app.delete('/coffees/:id',async (req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await coffeesCollection.deleteOne(query);
        res.send(result)
    })

    // User related APIs
    app.get('/users',async(req,res)=>{
      const result = await usersCollection.find().toArray();
      res.send(result);
    })


    app.post('/users',async(req,res)=>{
      const userProfile = req.body;
      console.log(userProfile);
      const result = await usersCollection.insertOne(userProfile);
      res.send(userProfile);
    })

    app.delete('/users/:id',async (req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await usersCollection.deleteOne(query);
        res.send(result)
    })
    // Update Partial data
    app.patch('/users',async(req,res)=>{
      const {email,lastSignInTime}=req.body;
      const filter = {email:email};
      const updatedDoc = {
        $set:{
          lastSignInTime:lastSignInTime
        }
      }
      const result = await usersCollection.updateOne(filter,updatedDoc)
      res.send(updatedDoc)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send('Coffee server is getting hotter....')
})

app.listen(port,()=>{
    console.log(`Coffee server running on ${port}`);
})