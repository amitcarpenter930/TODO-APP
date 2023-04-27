class Errorhandeler extends Error {
    constructor(massage , statuscode){
        super(massage)
        this.statuscode = statuscode 
    }
}



export const errorhandle = (err,req,res,next)=>{

    err.massage = err.massage || "Interanl Server Error"
    err.statuscode = err.statuscode || 500

    return  res.status(err.statuscode).json({
      success : false ,
      massage : err.massage
    })
  }

  export default Errorhandeler