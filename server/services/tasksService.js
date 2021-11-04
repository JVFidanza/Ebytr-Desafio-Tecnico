const { findAll, create } = require('../models/tasksModel');

const getAll = async () => findAll();

const createTask = async ({ task, status }) => create({ task, status });

module.exports = {
  getAll,
  createTask,
};