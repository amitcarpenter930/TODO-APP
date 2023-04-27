import Errorhandeler from '../middlewares/error.js'
import { Task } from '../models/taskModels.js'

export const newTask = async (req, res, next) => {
 try {
  const { title, discription } = req.body
  await Task.create({
    title,
    discription,
    user: req.user,
  })
  res.status(201).json({
    success: true,
    massage: 'Task Added',
  })
 } catch (error) {
  next(error)
 }
}

export const getMyTask = async (req, res, next) => {
try {
  const userId = req.user
  const task = await Task.find({ user: userId })
  res.status(200).json({
    success: true,
    task,
  })
} catch (error) {
  next(error)
}
}

export const updateTask = async (req, res, next) => {
try {
  const { id } = req.params
  const task = await Task.findById(id)
  if (!task) return next(new Errorhandeler('Invalid id', 404))
  task.isCompleted = !task.isCompleted
  await task.save()
  res.status(200).json({
    success: true,
    massage: 'Task Updated',
  })
} catch (error) {
  next(error)
}
}

export const deleteTask = async (req, res, next) => {
try {
  const { id } = req.params
  const task = await Task.findById(id)
  if (!task) return next(new Errorhandeler('Invalid id', 404))
  await task.deleteOne()
  res.status(200).json({
    success: true,
    massage: 'Task Deleted',
  })  
} catch (error) {
  next(error)
}
}
