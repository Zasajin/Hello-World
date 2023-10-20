import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectDir = __dirname;

const app = express();
const port = 3000;

app.use(express.static(join(projectDir, 'public')));

app.get('/', (req, res) => {

  res.sendFile(join(projectDir, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
