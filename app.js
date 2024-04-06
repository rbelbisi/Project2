const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error(e);
  }
}

connect();

// CREATE
app.post('/users', async (req, res) => {
    try {
      const result = await client.db('BikeShareDB').collection('users').insertOne(req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(500).send(e.toString());
    }
  });
  
  // READ
  app.get('/users', async (req, res) => {
    try {
      const users = await client.db('BikeShareDB').collection('users').find().toArray();
      res.status(200).send(users);
    } catch (e) {
      res.status(500).send(e.toString());
    }
  });
  
  // UPDATE
  app.put('/users/:id', async (req, res) => {
    try {
      const result = await client.db('BikeShareDB').collection('users').updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.status(200).send(result);
    } catch (e) {
      res.status(500).send(e.toString());
    }
  });
  
  // DELETE
  app.delete('/users/:id', async (req, res) => {
    try {
      const result = await client.db('BikeShareDB').collection('users').deleteOne({ _id: req.params.id });
      res.status(200).send(result);
    } catch (e) {
      res.status(500).send(e.toString());
    }
  });

app.post('/stations', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('stations').insertOne(req.body);
    res.status(201).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.get('/stations', async (req, res) => {
  try {
    const stations = await client.db('BikeShareDB').collection('stations').find().toArray();
    res.status(200).send(stations);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.put('/stations/:id', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('stations').updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.delete('/stations/:id', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('stations').deleteOne({ _id: req.params.id });
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

// CRUD for Trips
app.post('/trips', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('trips').insertOne(req.body);
    res.status(201).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.get('/trips', async (req, res) => {
  try {
    const trips = await client.db('BikeShareDB').collection('trips').find().toArray();
    res.status(200).send(trips);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.put('/trips/:id', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('trips').updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.delete('/trips/:id', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('trips').deleteOne({ _id: req.params.id });
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

// CRUD for Status (assuming it's a separate collection)
app.post('/status', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('status').insertOne(req.body);
    res.status(201).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.get('/status', async (req, res) => {
  try {
    const status = await client.db('BikeShareDB').collection('status').find().toArray();
    res.status(200).send(status);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.put('/status/:id', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('status').updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.delete('/status/:id', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('status').deleteOne({ _id: req.params.id });
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

// CRUD for Administrators
app.post('/admin', async (req, res) => {
  try {
    const result = await client.db('BikeShareDB').collection('admin').insertOne(req.body);
    res.status(201).send(result);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.get('/admin', async)