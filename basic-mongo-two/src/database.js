const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'pesto-day-19';

let connectionInstance;

const getDbClient = async () => {
  if (!connectionInstance) {
    connectionInstance = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
  }
  return connectionInstance;
};

const getDb = async () => {
  await getDbClient();

  if (!connectionInstance) {
    throw new Error('Db not connected');
  }

  return connectionInstance.db(DB_NAME);
};

const closeConnection = async () => {
  const client = await getDbClient();
  client.close();
};

exports.getProjects = async (query = {}) => {
  const db = await getDb();
  const projects = await db.collection('projects').find(query).toArray();
  closeConnection();
  return projects;
};
