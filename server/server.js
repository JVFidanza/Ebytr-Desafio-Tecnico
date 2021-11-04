const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/ping', (req, res) => res.status(200).json({ message: 'ṕong' }));