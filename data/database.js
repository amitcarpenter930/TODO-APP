import mongoose from "mongoose"



export const dbConnect = ()=>{
    //connect with mongodb
mongoose
.connect(process.env.MONGO_URI, {
  dbName: 'backendapi',
})
.then(() => {
  console.log('Database Connected')
})
.catch((err) => {
  console.log(err)
})


}

