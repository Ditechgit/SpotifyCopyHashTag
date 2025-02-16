// Java Script Assincrono
// await async
// fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Diogo:Diogo944653100@cluster0.xs7yu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);  

export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);