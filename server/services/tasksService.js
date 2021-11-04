const { findAllModel,
  createTaskModel,
  removeTaskModel,
  findByTaskNameModel,
  updateTaskModel, 
  updateStatusModel } = require('../models/tasksModel');

const findAllService = async () => findAllModel();

const createTaskService = async ({ task, status }) => createTaskModel({ task, status });

const removeTaskService = async (task) => removeTaskModel(task);

const findByTaskNameService = async (task) => findByTaskNameModel(task);

const updateTaskService = async ({ task, newTask }) => updateTaskModel({ task, newTask });

const updateStatusService = async ({ task, newStatus }) => updateStatusModel({ task, newStatus });

module.exports = {
  findAllService,
  createTaskService,
  removeTaskService,
  findByTaskNameService,
  updateTaskService,
  updateStatusService,
};