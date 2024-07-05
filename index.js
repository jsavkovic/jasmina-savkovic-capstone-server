import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes.js';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use('/api', itemRoutes);

app.get('/', (_req, res) => {
    res.send('This is a homePage for Lendaroo, please make a request!!');
});

app.listen(PORT, () => {
    console.log('App is running on port ', PORT);
});
