import { User } from "../models/userModels.js";
import jwt from 'jsonwebtoken'


export const isAuthenticated =async (req,res,next)=>{


    const  {token } = req.cookies ;

    console.log(token)
    
    if(!token)
    return res.status(404).json({
      success: false,
      massage: "Login First"
    })
    
       
    const decoded = jwt.verify(token , process.env.JWT_SECRET)
   req.user =await User.find(decoded._id)
   next() 
    

}