import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import https from 'https';

import { mainHandler, updateStore } from './handlers';

const app = express();
const PORT = 443;

const options = {
  key: fs.readFileSync(path.resolve(__dirname, '..', '..', 'localhost-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '..', '..', 'localhost.pem')),
};

app.get(
  /\.(js|css|map|ico|svg|jpg|jpeg|png)$/,
  express.static(path.resolve(__dirname, '..', '..', 'ssr')),
);

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.post('/update-store', updateStore);

app.use('*', mainHandler);

https.createServer(options, app).listen(PORT, () => {
  console.log('[INFO] SSR application is running on https://localhost');
});
