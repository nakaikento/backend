const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Note = require('../models/note')

const initialNotes = [
  {
    content: 'HTML is easy',
    date: new Date(),
    important: false,
  },
  {
    content: 'Browser can excute only Javascript',
    date: new Date(),
    important: true,
  },
]

breforeEach(async () => {
  await Note.deleteMany({})
  
  let noteObject = new Note(initialNotes[0])
  await noteObject.save()
  
  noteObject = new Note(initialNotes[1])
  await noteObject.save()
})