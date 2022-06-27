// Create
const createTask = (req, res) => {
  res.json(req.body);
};

// Read
const getAllTasks = (req, res) => {
  res.send('Get All Tasks!!!');
};

const getTask = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

// Update
const updateTask = (req, res) => {
  res.send('Update Task!');
};

// Delete
const deleteTask = (req, res) => {
  res.send('Deleted Task!');
};
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
