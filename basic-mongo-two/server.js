const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const dbUrl = 'mongodb://localhost:27017';

const dbName = 'pesto-day-19';
const PORT = 3000;

let connectionInstance;


const dbClient = async () => {
  if (!connectionInstance) {
    connectionInstance = await MongoClient.connect(dbUrl, { useNewUrlParser: true });
  }

  return connectionInstance;
};

const getDb = async () => {
  await dbClient();

  if (!connectionInstance) {
    throw new Error('DB not connected');
  }
  return connectionInstance.db(dbName);
};

app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const db = await getDb();
  const projectCollection = db.collection('projects');
  const projects = await projectCollection.find({}).toArray();
  console.log(projects);
  res.send(projects);
  db.close();
});

app.post('/projects', async (req, res) => {
  const { project, developer } = req.body;
  const db = await getDb();
  const projects = db.collection('projects');
  const newValue = await projects.insertOne({ project, developer });
  res.json(newValue);
  return db.close();
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
