
import jwt from "jsonwebtoken"



export const sendCookies = (user ,res ,massage , statuscode=200)=>{
    const token  =  jwt.sign({_id : user._id} , process.env.JWT_SECRET)

    res.status(201).cookie("token" , token , {
        httpOnly : true , 
        maxAge : 15 * 1000 * 1000 ,
        sameSite :process.env.NODE_ENV === "Development" ?"lax": "none" ,
        secure :process.env.NODE_ENV === "Development" ?false :  true , 


      }).json({
        success : true ,
        massage , 
      })

 }
