const roleMiddleware=(allowedRoles)=>{
    return (req,res,next)=>{
        if(!req.user){
            return res.json({
                message:"Authentication required"
            });
        }
        if(!allowedRoles.includes(req.user.role)){
            return res.json({
                message:"Acess denied"
            });
        }
        next();
    };
}
module.exports=roleMiddleware;