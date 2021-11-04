const express = require('express');
const cors = require('cors');
const { getAllTasks,
  insertTask,
  deleteTask, 
  updateTaskController } = require('./controllers/tasksController');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
app.get('/tasks', getAllTasks);

app.post('/tasks', insertTask);

app.delete('/tasks', deleteTask);

app.put('/tasks', updateTaskController);
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/ping', (req, res) => res.status(200).json({ message: 'ṕong' }));