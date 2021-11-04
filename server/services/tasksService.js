const { findAll } = require('../models/tasksModel');

const getAll = async () => findAll();

module.exports = {
  getAll,
};