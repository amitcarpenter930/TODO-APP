import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  discription: {
    type: String,
    require: true,
  },
  isCompleted: {
    type: String,
    require: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId ,
    ref : "User" ,
    require: true,
  },
  creaatAt: {
    type: Date,
    default: Date.now,
  },
})

export const Task = mongoose.model('task', taskSchema)
