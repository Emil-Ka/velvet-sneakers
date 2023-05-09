import express from 'express';
import path from 'path';
import cors from 'cors';

import { renderHtml, updateStore } from './handlers';

const app = express();
const PORT = 8080;

app.get(
  /\.(js|css|map|ico|svg|jpg|jpeg|png)$/,
  express.static(path.resolve(__dirname, '..', '..', 'ssr')),
);
app.use(cors());
app.use(express.json());

app.post('/update-store', updateStore);

app.use('*', renderHtml);

app.listen(PORT, () => {
  console.log(`[INFO] SSR application is running on http://localhost:${PORT}`);
});
