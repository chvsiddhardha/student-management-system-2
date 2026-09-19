const jwt=require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return res.json({
            message:"Access denied.No token provided"
        });
    }

    const token=authHeader.split(" ")[1];

    if(!token){
        return res.json({
            message:"Access denied.Invalid token format"
        });
    }
    try{
        const decoded=jwt.verify(token,"mysecretkey");
        req.user=decoded;
        next();
    }
    catch(error){
        return res.json({
            message:"Invalid or expired token"
        });
    }
};

module.exports=authMiddleware;