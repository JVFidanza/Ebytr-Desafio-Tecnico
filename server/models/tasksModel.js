const connection = require('./connection');

const findAll = async () => {
  const db = await connection();
  const result = await db.collection('tarefas').find().toArray();
  console.log(result);
  return result;
};

module.exports = {
  findAll,
};