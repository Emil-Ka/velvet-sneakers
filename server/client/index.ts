import express from 'express';
import path from 'path';

const app = express();
const PORT = 9000;

app.use(express.static(path.join(__dirname, '..', '..', 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
