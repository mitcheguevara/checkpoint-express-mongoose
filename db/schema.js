const mongoose = require('connection.js')
const db = mongoose.connection
db.on('error', (err) => {
  console.log(err)
})
db.once('open', () => {
  console.log('database connected')
})
const Schema = mongoose.Schema

var authorSchema = mongoose.Schema({
    name: String,
    publisher: String,
    age: Number,
    active: String
})

AuthorSchema.pre('save', function (next) {

})




const Author = mongoose.model("Author", AuthorSchema)


module.exports = {
  Author: Author,
}
