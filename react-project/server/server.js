import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
    }
);

app.listen(port, () => console.log('Server is running on http://localhost:5000'));

