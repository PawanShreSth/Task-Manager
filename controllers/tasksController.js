const Task = require('../models/taskModel');
const asyncWrapper = require('../middleware/async');

// Create
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

// Read
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    console.log('inside');
    return res.status(404).json({ message: `No task with id: ${taskId}` });
  }

  res.status(200).json(task);
});

// Update
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ message: `No task with id: ${taskId}` });
  }

  res.status(200).json(task);
});

// Delete
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.deleteOne({ _id: taskId });
  console.log(task);
  if (!task) {
    console.log('no task');
    return res.status(404).json({ message: `No task with id: ${taskId}` });
  }

  res.status(200).json(task);
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
