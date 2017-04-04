const mongoose = require ('mongoose')

mongoose.connect("mongodb://localhost/kicksstarter_db", (err, res) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Praise the MONGOD")
  }
})

const db = mongoose.connection

module.exports = mongoose
