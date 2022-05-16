const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

//MiddleWares
app.use(express.json());
app.use(cors());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vif61.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const serviceCollection = client.db("doctors-portal").collection("services");
        app.get('/services',async(req,res)=>{
            const query = {};
            const cursor = serviceCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });
        
    }
    finally{

    }
}

run().catch(console.dir);



// client.connect(err => {
//     const collection = client.db("doctors-portal").collection("services");
//     // perform actions on the collection object
//     client.close();
// });




//global get request
app.get('/', (req, res) => {
    res.send('Server is Running');
})


//Listening to port
app.listen(port, () => {
    console.log('Listening to port', port);
})