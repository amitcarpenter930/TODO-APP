import mongoose from "mongoose"



export const dbConnect = ()=>{
    //connect with mongodb
mongoose
.connect(process.env.MONGO_URI, {
  dbName: 'backendapi',
})
.then((c) => {
  console.log(`Database Connected with on ${c.connection.host}`)
})
.catch((err) => {
  console.log(err)
})


}

