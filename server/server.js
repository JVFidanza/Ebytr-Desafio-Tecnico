const express = require('express');
const cors = require('cors');
const { findAllController,
  createTaskController,
  removeTaskController, 
  updateTaskController, 
  updateStatusController } = require('./controllers/tasksController');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
app.get('/tasks', findAllController);

app.post('/tasks', createTaskController);

app.delete('/tasks', removeTaskController);

app.put('/tasks/task', updateTaskController);

app.put('/tasks/status', updateStatusController);
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/ping', (req, res) => res.status(200).json({ message: 'ṕong' }));