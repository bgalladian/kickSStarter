'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Design = require("./db/models.js").Design;


const app = express();
const router = express.Router();

var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

app.use('/api', router);

app.get('/api/designs', (req, res) => {
  Design.find({}, (err, designs) => {
    res.json(designs)
  })
})

app.get('/designs/id', (req, res) => {
  Design.findOne({id: req.params.id}, (err, designs) => {
    res.json(design)
  })
})

app.post('/designs', (req, res) => {
  Design.create(req.body, (err, design) => {
    res.json(design)
  })
})

app.put('/designs/:id', (req, res) => {
  Design.findeOneAndUpdate({id: req.params.id}, req.body, {new: true}, (err, design) => {
    res.json(desgin)
  })
})

app.delete('/designs/:id', (req, res) => {
  Design.findOneAndRemove({id: req.params.id}, (err) => {
    res.redirect('/designs')
  })
})

app.listen(port, () => {
  console.log(`Express Listening on Port ${port}`)
})
