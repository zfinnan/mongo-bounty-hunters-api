const mongoose = require('mongoose')

const hunterSchema = new mongoose.Schema({
  name: String,
  origin: String
})

module.exports = {
  Hunter: mongoose.model('hunters', hunterSchema),
  hunterSchema
}
