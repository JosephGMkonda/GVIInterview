import express from 'express';
import cors from 'cors';
import { HandleError } from './middlewares/ErrorHandling.js';
import customerRouter from './routes/Customers.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/customers', customerRouter);

app.use(HandleError);
app.get('/', (req, res) => {
    res.send('Hello World!');
}

)

export default app;