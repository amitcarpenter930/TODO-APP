import app from './app.js'
import { dbConnect } from './data/database.js'

dbConnect()

//Listing the PORT

app.listen(process.env.PORT, () => {
  console.log(`server is working on ${process.env.PORT}  Port`)
})
