const { findAll, create, remove } = require('../models/tasksModel');

const getAll = async () => findAll();

const createTask = async ({ task, status }) => create({ task, status });

const removeTask = async (task) => remove(task);

module.exports = {
  getAll,
  createTask,
  removeTask,
};