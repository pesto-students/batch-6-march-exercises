const express = require('express');
const mongo = require('mongodb');
const { getDb } = require('../database');


const router = express.Router();

router.get('/', async (req, res) => {
  const db = await getDb();
  const projectsCollection = db.collection('projects');
  const projects = await projectsCollection.find().toArray();
  res.send(projects);
});

router.get('/:id', async (req, res) => {
  const db = await getDb();
  const projectsCollection = db.collection('projects');
  const objectId = new mongo.ObjectID(req.params.id);
  const project = await projectsCollection.findOne({ _id: objectId });
  res.send(project);
});

router.post('/', async (req, res) => {
  const db = await getDb();
  const projectsCollection = db.collection('projects');

  const obj = req.body;
  const result = await projectsCollection.insertOne(obj);
  res.send(result);
});

module.exports = router;
