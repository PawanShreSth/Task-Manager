const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const taskRouter = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRouter);

app.use(notFound);
app.use(errorHandler);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
console.log('before');
