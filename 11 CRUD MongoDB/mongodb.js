const { MongoClient } = require("mongodb");

const url = "mongodb+srv://ymzadedypcoe:yogesh39@yogeshdypcoe.hbotaba.mongodb.net/";
const database = 'student';
const client = new MongoClient(url);

const dbConnect=async()=>
{
    const  result = await client.connect();
    const db=await result.db(database);
    return db.collection('profile');
}

module.exports = dbConnect; 