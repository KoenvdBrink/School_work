import express from 'express';
import bodyParser from 'body-parser';
import yargs from 'yargs';
import { HOST, PORT } from '../src/backendServerConfig.js';
import cors from 'cors';

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_CONFLICT = 409;
const STATUS_UNPROCESSABLE = 422;

let trips = []; // In Memory DB of the server
let log = [];   // Logs records for testing purposes

let jsonParser = bodyParser.json();
const app = express();
app.use(cors());
app.use(express.json());

/*
 * Startup options.
 * Note that we advise to not use them, but change the settings in the file
 * /src/config.js since those settings will also be used by the frontend.
 */
const options = yargs(process.argv.slice(2))
  .usage('Usage: npm start -- --port <port>')
  .options({
    p: {
      alias: 'port',
      describe: 'port nummer',
      type: 'number',
      default: PORT,
      demandOption: false,
    },
    h: {
      alias: 'host',
      describe: 'host',
      type: 'string',
      default: HOST,
      demandOption: true,
    },
  }).argv;

// Dummy data for testing purposes
function initializeDummyData() {
  return [
    {
      title: 'Utrecht', image: 'Neude_met_Domtoren.JPG', date: new Date('2005-6-18'), rating: 5, review: 'Top dag in Utrecht gehad. Hebben onder ander het Nijntje Pleintje bezocht en de Domtoren',
    },
    {
      title: 'Amsterdam', image: 'KeizersgrachtReguliersgrachtAmsterdam.jpg', date: new Date('2018-4-12'), rating: 3, review: 'Dagje shoppen in Amsterdam, maar het weer viel tegen',
    },
    {
      title: 'Veendam', image: 'Veendam_106.JPG', date: new Date('2001-5-29'), rating: 1, review: 'Zijn de lange leegte op en neer gelopen, maar zelfs het stadion deed de straatnaam eer aan',
    },
    {
      title: 'Rotterdam', image: 'Erasmusbrug_seen_from_Euromast.jpg', date: new Date('2017-6-15'), rating: 3, review: 'Architectuur van Rotterdam bekeken, en weet nu dat ik er niet zou willen wonen',
    },
    {
      title: 'Nederland', image: 'IMG_2315.JPG', date: new Date('2002-8-12'), rating: 2, review: 'Wist niet dat Nederland ook een plaats in de Nederland is, maar dan wel een plaats met ca 3 huizen',
    },
  ]; 
}

/*
 * REST API for testing purpose
 */
app.get('/v1/reset/:msg', (req, res) => {
  const MESSAGE = req.params.msg;
  trips = [];
  log = [];
  console.log(`RESET: ${MESSAGE}`);
  console.log('---------------------------------------------------------------------------');
  res.json(STATUS_OK);
});

app.get('/v1/init', (req, res) => {
  trips = initializeDummyData();
  console.log('INIT');
  console.log('---------------------------------------------------------------------------');
  res.json(STATUS_OK);

});

app.get('/logs', (req, res) => {
  res.json(log);
});

/*
 * CRUD REST API for the trips/trip
 */
// ---- READ (all) ----
app.get('/v1/trips', (req, res) => {
  const logEntry = {
    method: 'GET',
    url: '/v1/trips',
    status: STATUS_OK,
  };
  console.dir(logEntry);
  console.log('---------------------------------------------------------------------------');
  log = [...log, logEntry];
  res.json(trips);
});

// ---- READ (:key) ----
app.get('/v1/trip/:key', (req, res) => {
  const TRIP_KEY = req.params.key;
  const index = trips.findIndex((trip) => trip.title === TRIP_KEY);
  let logEntry = {
    method: 'GET',
    url: `/v1/trip/${TRIP_KEY}`,
  };

  if (trips[index]) {
    logEntry.status = STATUS_OK,
    res.json(trips[index]);
  } else {
    logEntry.status = STATUS_NOT_FOUND;
    res.sendStatus(STATUS_NOT_FOUND);
  };
  log = [...log, logEntry];
  console.dir(logEntry);
  console.log('---------------------------------------------------------------------------');
});

// ---- CREATE ----
app.post('/v1/trip/:key', jsonParser, (req, res) => {
  const TRIP_KEY = req.params.key;
  const trip = req.body;

  let logEntry = {
    method: 'POST',
    url: `/v1/trip/${TRIP_KEY}`,
    body: trip,
  };
  
  const index = trips.findIndex((tripItem) => tripItem.title === TRIP_KEY);
  if (index !== -1) {
    logEntry.status = STATUS_CONFLICT;
    res.status(STATUS_CONFLICT).end();
  } else if (TRIP_KEY === 'undefined') {
    logEntry.status = STATUS_UNPROCESSABLE;
    res.status(STATUS_UNPROCESSABLE).end();
  } else {
    trips = [...trips, trip];
    // console.log('DB:');
    // console.dir(trips);
    logEntry.status = STATUS_OK;
    res.send(trips);
  }
  log = [...log, logEntry];
  console.log('LOGS:');
  console.dir(logEntry);
  console.log('---------------------------------------------------------------------------');
});

// ---- UPDATE ----
app.put('/v1/trip/:key', jsonParser, (req, res) => {
  const TRIP_KEY = req.params.key;
  const trip = req.body;
  const index = trips.findIndex((trip) => trip.title === TRIP_KEY);
  
  let logEntry = {
    method: 'PUT',
    url: `/v1/trip/${TRIP_KEY}`,
    body: trip,
  };

  if (index === -1) {
    logEntry.status = STATUS_NOT_FOUND;
    res.sendStatus(STATUS_NOT_FOUND);
  } else {
    trips[index] = trip;
    logEntry.status = STATUS_OK;
    res.json(trips);
  }
  log = [...log, logEntry];
  console.dir(logEntry);
  console.log('---------------------------------------------------------------------------');
});

// ---- DELETE ----
app.delete('/v1/trip/:key', jsonParser, (req, res) => {
  const TRIP_KEY = req.params.key;
  const index = trips.findIndex((trip) => trip.title === TRIP_KEY);
  
  let logEntry = {
    method: 'DELETE',
    url: `/v1/trip/${TRIP_KEY}`,
  };

  if (index === -1) {
    logEntry.status = STATUS_NOT_FOUND;
    res.sendStatus(STATUS_NOT_FOUND);
  } else {
    trips.splice(index, 1);
    logEntry.status = STATUS_OK;
    res.json(trips);
  }
  log = [...log, logEntry];
  console.dir(logEntry);
  console.log('---------------------------------------------------------------------------');
});

/* 
 * Starting the server
 */
app.listen(options.port, () => { 
  const baseURL = `http://${options.host}:${options.port}`;
  console.log(`server running at ${baseURL}`);
})
