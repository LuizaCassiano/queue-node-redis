import 'dotenv/config';
import express from 'express';
import PersonController from './app/controllers/PersonController';

const app = express();
app.use(express.json());

app.post('/persons', PersonController.insert);
app.get('/persons', PersonController.get);
app.delete('/persons', PersonController.delete);

app.listen(3333, () => {
  console.log('Server running on localhost:3333');
});