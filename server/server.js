const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/', (req, res) => {
  res.send('Backend is working!');
});

// API endpoint placeholders - to be implemented
app.post('/api/upload/image', (req, res) => {
  res.json({ message: 'Image uploaded successfully' });
});

app.post('/api/avatar/generate', (req, res) => {
  res.json({ message: 'Avatar generated' });
});

app.post('/api/avatar/speak', (req, res) => {
  res.json({ message: 'Avatar speaking' });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
