import jwt from "jsonwebtoken"

const adminAuth=(req,res,next)=>{

    try {
        const {token}=req.headers
        if(!token){
            return res.json({success:false,message:"Not Authorised Login Again"})
        }
        const decodeToken=jwt.verify(token,process.env.JWT_SECRET)
        
        if(decodeToken.email!==process.env.ADMIN_EMAIL){
            return res.json({success:false,message:"Not Authorised Login Again"})
        }
        next()
    } catch (error) {
        console.log(error);        
        res.json({success:false,message:error.message})
    }
}

export default adminAuth