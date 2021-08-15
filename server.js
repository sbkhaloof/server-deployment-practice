'use strict';
const express = require('express');

const app = express();
const notFoundHnalder=require('./handlers/404');
const errorHandler=require('./handlers/500');

app.get('/', (req, res) => {
    res.status(200).send('all good');
})
app.get('/data', (req, res) => {
    let output = {
        firtname: 'ahmad',
        lastname: 'ali',
        birthdate: new Date().toString
    }
    res.status(200).json(output)
})
app.get('/wrong', (req, res, next) => {
    next('error from bad endpoint');
})
app.use('*', notFoundHnalder);
app.use(errorHandler);


function start(port) {
    app.listen(port, () => {
        console.log(`server started on port ${port}`)
    })

}

module.exports = {
    start,
    app
}