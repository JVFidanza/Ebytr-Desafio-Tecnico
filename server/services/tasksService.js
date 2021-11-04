const { findAll,
  create,
  remove,
  findByTaskName,
  updateTaskModel } = require('../models/tasksModel');

const getAll = async () => findAll();

const createTask = async ({ task, status }) => create({ task, status });

const removeTask = async (task) => remove(task);

const getByTaskName = async (task) => findByTaskName(task);

const updateTaskService = async ({ task, newTask }) => updateTaskModel({ task, newTask });

module.exports = {
  getAll,
  createTask,
  removeTask,
  getByTaskName,
  updateTaskService,
};