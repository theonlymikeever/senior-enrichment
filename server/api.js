'use strict'
const api = require('express').Router()
const db = require('../db')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

//Student API -----------------------------
api.get('/students', (req, res, next) => {
  db.model('student').findAll()
  .then((students) => res.send(students))
  .catch(next)
});

api.get('/students/:id', (req, res, next) => {
  db.model('student').findById(req.params.id)
  .then((student) => res.send(student))
  .catch(next)
});

api.post('/students', (req, res, next) => {
  db.model('student').create(req.body)
  .then(student => res.json(student))
  .catch(next)
});

api.put('/students/:id', (req, res, next) => {
  db.model('student').findById(req.params.id)
  .then((student) => {
    Object.assign(student, req.body)
    return student.save()
  })
  .then(() => res.sendStatus(200))
  .catch(next)
});

api.delete('/students/:id', (req, res, next) => {
  db.model('student').destroy({where: {id: req.params.id}})
  .then(() => res.sendStatus(200))
  .catch(next)
});


//Campus API ------------------------------
api.get('/campuses', (req, res, next) => {
  db.model('campus').findAll({include: [ db.model('student') ]})
  .then((campuses) => res.send(campuses))
  .catch(next)
});

api.get('/campuses/:id', (req, res, next) => {
  db.model('campus').findById(req.params.id)
  .then((campus) => res.send(campus))
  .catch(next)
});

api.post('/campuses', (req, res, next) => {
  db.model('campus').create(req.body)
  .then(campus => res.json(campus))
  .catch(next)
});

api.put('/campuses/:id', (req, res, next) => {
  db.model('campus').findById(req.params.id)
  .then((campus) => {
    Object.assign(campus, req.body)
    return campus.save()
  })
  .then(() => res.sendStatus(200))
  .catch(next)
});

api.delete('/campuses/:id', (req, res, next) => {
  db.model('campus').destroy({where: {id: req.params.id}})
  .then(() => res.sendStatus(200))
  .catch(next)
});

module.exports = api
