import express from 'express'
import { isAuthenticated } from '../middlewares/auth.js'
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from '../controller/taskController.js'

const router = express.Router()

// router.post("/new" ,isAuthenticated  , newTask )
router.post('/new', isAuthenticated, newTask)

router.get('/my',getMyTask)

router.route('/:id').put(updateTask).delete(deleteTask)

export default router
