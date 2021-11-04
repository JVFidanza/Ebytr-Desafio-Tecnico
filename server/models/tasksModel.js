const connection = require('./connection');

const findAll = async () => {
  const db = await connection();
  const result = await db.collection('tarefas').find().toArray();
  return result;
};

const create = async ({ task, status }) => {
  const db = await connection();
  const result = await db.collection('tarefas').insertOne({ tarefa: task, status });
  return result;
};

const remove = async (task) => {
  const db = await connection();
  const result = await db.collection('tarefas').deleteOne({ tarefa: task });
  return result;
};

const findByTaskName = async (task) => {
  const db = await connection();
  const result = await db.collection('tarefas').findOne({ tarefa: task });
  return result;
};

module.exports = {
  findAll,
  create,
  remove,
  findByTaskName,
};