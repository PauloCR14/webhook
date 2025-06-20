//Configuración de base de datos
const { MongoClient } = require("mongodb");
//const uri = "mongodb://root:123456@localhost:27017/?authMechanism=DEFAULT";
const uri = "mongodb+srv://Paulo-Cesar:paulo123@cluster0.fr512zh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri);
const dataBase = "webhook";
const collectionName = "Webhooks";

async function getCollectionAsync() {
await client.connect();
const db = client.db(dataBase);
const collection = db.collection(collectionName);

return collection;
}

async function agregarAsync(webhook) {
const collection = await getCollectionAsync();
let resultado = await collection.insertOne(webhook)
}

async function obtenerTodosAsync() {
const collection = await getCollectionAsync()
var query = {}
const sort = {
'fechaDeRegistro': -1
}
const limit = 100
var resultado = await collection.find(query, { sort, limit }).toArray()
console.log(resultado)

return resultado
}

module.exports = {
agregarAsync,
obtenerTodosAsync
}