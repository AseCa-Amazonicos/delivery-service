import express from 'express';
import {router} from './routes/router';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());
app.use('/api', router);

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});
