const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://pawanstha:1234@pmscollection-ecommerce.4uekm.mongodb.net/taskmanager?retryWrites=true&w=majority';

const connectDB = url => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
