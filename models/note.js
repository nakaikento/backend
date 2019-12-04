const mongoose = require('mongoose')
// const ENV_PATH = __dirname.slice(0, __dirname.lastIndexOf('/'))
// console.log(`ENV_PATH is ${ENV_PATH}`)
// require('dotenv').config({ path: ENV_PATH })
require('dotenv').config();

const url = process.env.MONGODB_URI
console.log(`url is ${url}`)

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
  })

  noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Note', noteSchema)

  // let notes = [
  //   {
  //     id: 1,
  //     content: "HTML is easy",
  //     date: "2019-05-30T17:30:31.098Z",
  //     important: true
  //   },
  //   {
  //     id: 2,
  //     content: "Browser can execute only Javascript",
  //     date: "2019-05-30T18:39:34.091Z",
  //     important: false
  //   },
  //   {
  //     id: 3,
  //     content: "GET and POST are the most important methods of HTTP protocol",
  //     date: "2019-05-30T19:20:14.298Z",
  //     important: true
  //   }
  // ]
