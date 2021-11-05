const { findAllService,
  createTaskService,
  removeTaskService,
  findByTaskNameService,
  updateTaskService, 
  updateStatusService } = require('../services/tasksService');

const status200 = 200;
const status500 = 500;
const status400 = 400;
const status404 = 404;

const error500 = 'Erro inesperado';
const invalidTask = 'Tarefa inválida';
const inexistentTask = 'Tarefa inexistente';

const findAllController = async (_req, res) => {
  try {
    const result = await findAllService();
    return res.status(status200).json(result);
  } catch (err) {
    return res.status(status500).json({ message: error500, errorMessage: err.message });
  }
};

const createTaskController = async (req, res) => {
  const { task, status } = req.body;
  if (!task || !status) {
    return res.status(status400).json({ message: invalidTask });
  }
  try {
    await createTaskService({ task, status });
    return res.status(status200).json({ message: 'Tarefa criada com sucesso!' });
  } catch (err) {
    return res.status(status500).json({ message: error500, errorMessage: err.message });
  }
};

const removeTaskController = async (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(status400).json({ message: invalidTask });
  }
  try {
    const dbTask = await findByTaskNameService(task);
    if (!dbTask) {
      return res.status(status404).json({ message: inexistentTask });
    }
    await removeTaskService(task);
    return res.status(status200).json({ message: 'Tarefa removida com sucesso!' });
  } catch (err) {
    return res.status(status500).json({ message: error500, errorMessage: err.message });
  }
};

const updateTaskController = async (req, res) => {
  const { task, newTask } = req.body;
  if (!task || !newTask) {
    return res.status(status400).json({ message: invalidTask });
  }
  const dbTask = await findByTaskNameService(task);
    if (!dbTask) {
      return res.status(status404).json({ message: inexistentTask });
    }
  try {
  await updateTaskService({ task, newTask });
  return res.status(status200).json({ message: 'Tarefa atualizada com sucesso!' }); 
  } catch (err) {
    return res.status(status500).json({ message: error500, errorMessage: err.message });
  }
};

const updateStatusController = async (req, res) => {
  const { task, newStatus } = req.body;
  if (!task) {
    return res.status(status400).json({ message: invalidTask });
  }
  if (!newStatus) {
    return res.status(status400).json({ message: 'Status inválido' });
  }
  const dbTask = await findByTaskNameService(task);
    if (!dbTask) {
      return res.status(status404).json({ message: inexistentTask });
    }
  try {
    await updateStatusService({ task, newStatus });
    return res.status(status200).json({ message: 'Status atualizado com sucesso!' }); 
  } catch (err) {
    return res.status(status500).json({ message: error500, errorMessage: err.message });
  }
};
// const getTaskByName = async (req, res) => {
//   const { task } = req.body;
//   if (!task) {
//     return res.status(status400).json({ message: invalidTask });
//   }
// };

module.exports = {
  findAllController,
  createTaskController,
  removeTaskController,
  updateTaskController,
  updateStatusController,
};