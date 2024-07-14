module.exports.mymiddleware=function(req,res,next){
    // some code logic to perform task

    

    next();//or redirect to another route
}