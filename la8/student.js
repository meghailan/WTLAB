const mongoose = require('mongoose')
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Student', studentsSchema)
