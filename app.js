const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const taskRouter = require('./routes/tasks');

// middleware
app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
  res.send('Hello from task manager app!');
});

app.use('/api/v1/tasks', taskRouter);

const port = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
console.log('before');
