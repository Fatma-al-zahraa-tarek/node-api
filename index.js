const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Mai' },
    { id: 2, name: 'Fatma' }
  ]);
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ id: 3, name });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});