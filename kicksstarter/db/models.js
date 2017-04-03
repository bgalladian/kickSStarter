const mongoose = require('./connection.js')

const DesignSchema = new mongoose.Schema ({
  name: String,
  category: String,
  Designer: String,
  imageURL: String,
  material: String,
  inspiration: String

})

const Design = mongoose.model('Design', DesignSchema)


module.exports = {
  Design
}
