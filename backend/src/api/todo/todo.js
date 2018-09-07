const nodeRestful = require('node-restful')
const mongoose = nodeRestful.mongoose

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createAt: { type: Date, default: Date.now }
})

module.exports = nodeRestful.model('Todo', todoSchema)