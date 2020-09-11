import 'dotenv/config';
import express from 'express';

import UserController from './app/controllers/userController'

const app = express();

app.use(express.json());

app.post('/users', UserController.store);

app.listen(process.dotenv.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});
