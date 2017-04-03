let mongoose = require("./models.js").Design
let seedData = require("./seedData.json")

const Design = mongoose.model("Design")

Design.remove({}, () => {
  Design.create(seedData, () => {
    process.exit()
  })
})
