const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0/students")
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.json())
const studentsRouter = require('./routes/students')

app.use('/students', studentsRouter)
app.listen(3000, () => console.log('Server Started'))
