const errors = require('restify-errors')
module.exports = server =>{
    server.get('/test', (req,res,next)=>{
        res.send({msg:"tester"});
        next();
    })

};