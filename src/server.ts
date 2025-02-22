import express from 'express';

import { userRoutes } from './routes/user-routes';

const app = express();
app.use(express.json());
app.use(userRoutes);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

