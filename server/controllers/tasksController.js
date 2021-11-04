const { getAll, createTask, removeTask, getByTaskName } = require('../services/tasksService');

const status200 = 200;
const status500 = 500;
const status400 = 400;
const status404 = 404;

const error500 = 'Erro inesperado';
const invalidTask = 'Tarefa inválida';

const getAllTasks = async (_req, res) => {
  try {
    const result = await getAll();
    return res.status(status200).json(result);
  } catch (err) {
    return res.status(status500).json({ message: error500, err });
  }
};

const insertTask = async (req, res) => {
  const { task, status } = req.body;
  if (!task || !status) {
    return res.status(status400).json({ message: invalidTask });
  }
  try {
    await createTask({ task, status });
    return res.status(status200).json({ message: 'Tarefa criada com sucesso!' });
  } catch (err) {
    return res.status(status500).json({ message: error500, err });
  }
};

const deleteTask = async (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(status400).json({ message: invalidTask });
  }
  try {
    const dbTask = await getByTaskName(task);
    if (!dbTask) {
      return res.status(status404).json({ message: 'Tarefa inexistente' });
    }
    await removeTask(task);
    return res.status(status200).json({ message: 'Tarefa removida com sucesso!' });
  } catch (err) {
    return res.status(status500).json({ message: error500, err });
  }
};

// const getTaskByName = async (req, res) => {
//   const { task } = req.body;
//   if (!task) {
//     return res.status(status400).json({ message: invalidTask });
//   }
// };

module.exports = {
  getAllTasks,
  insertTask,
  deleteTask,
};