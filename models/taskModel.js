const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name cannot exceed 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Models are representation for Collection

module.exports = mongoose.model('task', TaskSchema);
