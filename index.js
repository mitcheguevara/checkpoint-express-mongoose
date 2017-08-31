const express = require('express');
// const parser = require('body-parser')
//
// const mongoose = require('./db/connection')
// const Author = require('./db/schema.js')
const app = express()
// var app = require('../app');
// app.get('/', function(req, res, next) {
//   res.render('index');
// });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//   console.log("Connection established to: ", db.name)
//
//   // With Mongoose, everything is derived from a Schema.
//   // var authorSchema = mongoose.Schema({
//   //     name: String,
//   //     publisher: String,
//   //     age: Number,
//   //     active: String
//   })
//
//
//
//
//   app.set('port', process.env.PORT || 3001)
//   app.use('/assets', express.static('public'))
//   app.use('/node_modules', express.static('node_modules'))
//   app.use(parser.json())
//
//   app.get('/authors', (req, res) => {
//     Author.find({}, null, {sort: {name: 1}}).then((authors) => {
//       res.json(authors)
//     })
//   })
//
//   app.post('/authors', (req, res) => {
//     Author.create(req.body).then((author) => {
//       res.status(200).json(author)
//     })
//   })
//
//
//   app.get('/authors/:id', (req, res) => {
//     Author.findOne({ _id: req.params.id }).then((author) => {
//       res.json(author)
//     })
//   })
//
//   app.put('/authors/:id', (req, res) => {
//     Author.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}).then((author) => {
//       res.status(200).json(author)
//     })
//   })
//
//   app.delete('/authors/:id', (req, res) => {
//     Author.findOneAndRemove({ _id: req.params.id }).then(() => {
//       res.status(200).send('author deleted')
//     })
//   })
//
//   app.get('/*', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
//   })
//
//   app.listen(app.get('port'), () => {
//     console.log(`Listening on ${app.get('port')}`)
//   })
