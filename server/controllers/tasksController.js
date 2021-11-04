const { getAll } = require('../services/tasksService');

const status200 = 200;
const status500 = 500;

const getAllTasks = async (_req, res) => {
  try {
    const result = await getAll();
    return res.status(status200).json(result);
  } catch (err) {
    return res.status(status500).json({ message: 'Erro inesperado', err });
  }
};

module.exports = {
  getAllTasks,
};