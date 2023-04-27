//Importing files
import express from 'express'
import userRoutes  from './routes/userRoutes.js'
import taskRoutes  from './routes/taskRoutes.js'
import { config} from "dotenv"
import cookieParser from 'cookie-parser'
import { errorhandle } from './middlewares/error.js'
import cors from "cors"






const app = express()

config ({
  path : "./data/config.env"
})

//Middle ware
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/task",taskRoutes)
app.use(cors({
  origin : [process.env.FRONTEND_URL],
  methods : ["GET" ,"PUT" , "POST" , "DELETE"], 
  credential : true 

}))





//Routes
app.get('/', (req, res) => {
  res.send('Working Fine ')
})



app.use(errorhandle)



export default app ; 



