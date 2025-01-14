const express = require('express');
const app = express();
const fs = require('fs');

require('ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/client', express.static('client'));
app.use('/images', express.static('images'));

function getProjects() {
    return JSON.parse(fs.readFileSync('projects.json', 'utf8'));
}

app.get('/', (req, res) => {
    res.locals.projects = getProjects();
    res.render('index.ejs');
});

app.get('/projects', (req, res) => {
    res.locals.projects = getProjects();
    res.render('projects.ejs');
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.post('/contact', (req, res) => {
    res.status(200).json('Sent');
});

app.get('*', (req, res) => {
    res.render('404.ejs');
})

app.listen(3000, _ => console.log('Started'));