require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//Conect DB
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
});

// Routes
const { routerAPI } = require('./src/routes/index.js');
routerAPI(app);

const PORT = process.env.PORT || 5955;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on port ${PORT} `);
});
