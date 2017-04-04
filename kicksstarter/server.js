'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Design = require("./db/connection").Design;


const app = express();

var port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://localhost/kicksstarter_db')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors())

app.get('/designs', (req, res) => {
  Design.find({}, (err, designs) => {
    res.json(designs)
  })
})

app.get('/designs/:id', (req, res) => {
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

app.listen(app.get('port'), () => {
  console.log(`Express Listening on Port ${app.get('port')}`)
})
