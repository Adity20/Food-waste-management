import express from 'express';

const app = express();

app.listen(3800, () => console.log('Server running on port 3800'));

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/test', (req, res) => {
    res.send('Test');
    }
);