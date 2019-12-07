require('dotenv').config();

let PORT = process.env.PORT
let URI = process.env.URI;

if (process.env.NODE_ENV === 'test') {
  URI = process.env.TEST_URI
}

module.exports = {
  URI,
  PORT
}
