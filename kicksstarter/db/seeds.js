let seedData = require("./seedData.json")
let mongoose = require("./connection.js")
let Design = require("./models.js").Design

Design.remove({}, () => {
  Design.create(seedData, () => {
    process.exit()
  })
})
