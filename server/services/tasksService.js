const { findAll, create, remove, findByTaskName } = require('../models/tasksModel');

const getAll = async () => findAll();

const createTask = async ({ task, status }) => create({ task, status });

const removeTask = async (task) => remove(task);

const getByTaskName = async (task) => findByTaskName(task);

module.exports = {
  getAll,
  createTask,
  removeTask,
  getByTaskName,
};