const coursesList = [];
const express = require('express');
const readline = require('readline');
const fs = require('fs');

const lineReader = readline.createInterface({
    input: fs.createReadStream('./courses.txt'),
    crlfDelay: Infinity
});

lineReader.on('line', line => {
    const courseId = line.match(/\d{5}/).toString().trim();
    const rawLineOne = line.match(/\d{5}(.*)/)[1];
    const courseSubject = rawLineOne.match(/\w+$/).toString().trim();
    const rawLineTwo = rawLineOne.match(/[^ ]+\s+[^ ]+$/)[0];
    const courseLength = rawLineTwo.match(/^\w/).toString().trim();
    const courseName = rawLineOne.match(/^.*(?=\d)/).toString().trim();
    // console.log('line ==>' + line + '<==');
    // console.log('---');
    // console.log('courseId ==>' + courseId + '<==');
    // console.log('courseName ==>' + courseName + '<==');
    // console.log('courseLength ==>' + courseLength + '<==');
    // console.log('courseSubject ==>' + courseSubject + '<==');
    // console.log('---');
    // console.log('rawLineOne ==>' + rawLineOne + '<==');
    // console.log('rawLineTwo ==>' + rawLineTwo + '<==');
    let courseObj = {
        id: courseId,
        name: courseName,
        length: Number(courseLength),
        subject: courseSubject
    };
    coursesList.push(courseObj);
});

const app = express();

app.get('/v1/courses', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(coursesList);
});

app.listen(3000, () => console.log('Listening on port 3000'));
