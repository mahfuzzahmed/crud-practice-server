const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');



// middle ware
app.use(cors())
app.use(express.json())


// mahfujahmed
// lzIIEOGNi91En1Pw


const uri = "mongodb+srv://mahfujahmed:lzIIEOGNi91En1Pw@cluster0.jgehw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

        app.post('/users', async (req, res) => {
            const users = req.body
            console.log('new users', users)

            const database = client.db("practiceDB");
            const userList = database.collection("Users");
            const result = await userList.insertOne(users);
            res.send(result)
        })


        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('simple crud is running')
})


app.listen(port, () => {
    console.log(`simple crud is running on port ${port}`)
})