const courses = require('../courses.json');
const express = require('express');
const app = express();

app.get('/v1/courses', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(courses);
});

app.listen(3000, () => console.log('Listening on port 3000'));
