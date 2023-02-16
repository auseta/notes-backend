require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.TEST_MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: process.argv[2],
  important: process.argv[3],
})

note.save().then(result => {
  console.log('note saved')
  mongoose.connection.close()
})