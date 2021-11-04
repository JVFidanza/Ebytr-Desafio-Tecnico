const connection = require('./connection');

const findAllModel = async () => {
  const db = await connection();
  const result = await db.collection('tarefas').find().toArray();
  return result;
};

const createTaskModel = async ({ task, status }) => {
  const db = await connection();
  const result = await db.collection('tarefas').insertOne({ tarefa: task, status });
  return result;
};

const removeTaskModel = async (task) => {
  const db = await connection();
  const result = await db.collection('tarefas').deleteOne({ tarefa: task });
  return result;
};

const findByTaskNameModel = async (task) => {
  const db = await connection();
  const result = await db.collection('tarefas').findOne({ tarefa: task });
  return result;
};

const updateTaskModel = async ({ task, newTask }) => {
  const db = await connection();
  return db.collection('tarefas').updateOne({ tarefa: task }, { $set: { tarefa: newTask } });
};

const updateStatusModel = async ({ task, newStatus }) => {
  const db = await connection();
  return db.collection('tarefas').updateOne({ tarefa: task }, { $set: { status: newStatus } });
};

module.exports = {
  findAllModel,
  createTaskModel,
  removeTaskModel,
  findByTaskNameModel,
  updateTaskModel,
  updateStatusModel,
};